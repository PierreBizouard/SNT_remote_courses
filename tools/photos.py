# Télécharge les photos des inventions depuis Wikipédia / Wikimedia Commons, avec auteur et licence
import json, os, re, urllib.request, urllib.parse, html
T={
 'Écriture':'Cuneiform','Imprimerie':'Printing_press','Machine à écrire':'Typewriter','Web':'CERN_httpd','Smartphone':'IPhone_(1st_generation)',
 'Maîtrise du feu':'Campfire','Roue':'Ljubljana_Marshes_Wooden_Wheel','Machine à vapeur':'Watt_steam_engine','Train à vapeur':'Puffing_Billy_(locomotive)','Voiture à moteur à explosion':'Benz_Patent-Motorwagen',
 'Télégraphe à bras (Chappe)':'Optical_telegraph','Télégraphe électrique':'Electrical_telegraph','Téléphone':'Candlestick_telephone','Radio':'Crystal_radio',"ARPANET (ancêtre d'Internet)":'Interface_Message_Processor',
 'Machine à calculer de Pascal':"Pascal's_calculator",'Calcul en binaire':'Gottfried_Wilhelm_Leibniz','Cartes perforées (métier Jacquard)':'Jacquard_machine','Premier ordinateur':'ENIAC','Microprocesseur':'Intel_4004',
 'Peintures dans les grottes':'Chauvet_Cave','Photographie':'View_from_the_Window_at_Le_Gras','Cinéma':'Cinématographe','Télévision':'Mechanical_television','Appareil photo numérique':'Digital_camera',
 'Flûte en os':'Paleolithic_flutes','Microphone':'Microphone','Disque vinyle':'Phonograph_record','CD audio':'Compact_disc','Musique en MP3':'Portable_media_player',
 'Pile électrique (Volta)':'Voltaic_pile','Batterie rechargeable au plomb':'Lead–acid_battery','Ampoule électrique':'Incandescent_light_bulb','Centrale électrique':'Pearl_Street_Station','Batterie lithium-ion':'Lithium-ion_battery',
 "Automate joueur d'échecs (truqué !)":'The_Turk','Ordinateur champion d\'échecs':'Deep_Blue_(chess_computer)','Assistant vocal':'IPhone_4S','ChatGPT':'ChatGPT'
}
UA={'User-Agent':'SNT-course-photos/1.0 (educational; github.com/PierreBizouard/snt_remote_courses)'}
def get(u): return urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=30).read()
os.makedirs('S1_enquete_techno/photos',exist_ok=True)
out={}
for i,(name,art) in enumerate(T.items()):
    try:
        s=json.loads(get('https://en.wikipedia.org/api/rest_v1/page/summary/'+urllib.parse.quote(art)))
        th=(s.get('thumbnail') or {}).get('source'); orig=(s.get('originalimage') or {}).get('source')
        if not th: out[name]={'err':'no image','art':art}; continue
        th=re.sub(r'/\d+px-','/400px-',th) if '/thumb/' in th else th
        fn=urllib.parse.unquote(orig.split('/')[-1]) if orig else ''
        meta={}
        if fn:
            q=json.loads(get('https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=extmetadata&titles=File:'+urllib.parse.quote(fn)))
            pg=list(q['query']['pages'].values())[0]; em=(pg.get('imageinfo') or [{}])[0].get('extmetadata',{})
            if not em:
                q=json.loads(get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=extmetadata&titles=File:'+urllib.parse.quote(fn)))
                pg=list(q['query']['pages'].values())[0]; em=(pg.get('imageinfo') or [{}])[0].get('extmetadata',{})
            strip=lambda v: html.unescape(re.sub('<[^>]+>','',v or '')).strip()
            meta={'artist':strip(em.get('Artist',{}).get('value'))[:120],'license':strip(em.get('LicenseShortName',{}).get('value')),'file':fn}
        ext=th.split('.')[-1].split('?')[0].lower()
        if ext not in ('jpg','jpeg','png','gif','webp'): ext='png'
        p=f'S1_enquete_techno/photos/{i:02d}.{ext}'
        open(p,'wb').write(get(th))
        out[name]={'art':art,'path':p,**meta}
    except Exception as e:
        out[name]={'err':str(e),'art':art}
json.dump(out,open('S1_enquete_techno/photos/credits.json','w'),ensure_ascii=False,indent=1)
