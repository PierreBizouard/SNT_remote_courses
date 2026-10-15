# S1 · Techno Survivor

Séance d'introduction SNT en version ultra-ludique : les élèves font les découvertes en jouant, puis on reprend le cours à partir de leurs phrases.

| Jeu | Découverte visée |
| --- | --- |
| 🧟 Zombies QCM | Un zombie, quatre réponses autour de lui : on tire sur la bonne ; un tir raté part à côté et le zombie accélère (questions du cours) |
| 🕰️ Les inventions | 8 familles d'inventions en images (dont électricité, piles et batteries ; images ; sons) à cliquer de la plus ancienne à la plus récente ; chaque bonne réponse part dans la frise ; smartphone à assembler (batterie + appareil photo + micro + microprocesseur + Internet) ; grande frise construite à la fin (accélération) |
| ✍️ CyberSpeedScribe | Chaque symbole existe en tracé et en pixel art, les deux versions alternent, en temps limité ; quand un symbole revient, on repasse son propre dessin (autre couleur) ; comparaison tracé / pixels ; évolution finale, pixels = nombres |
| 🐙 La pieuvre laser | Défense : chaque paquet livré à la bonne tourelle (adresse IPv4 complète) lance un missile ; flèches cliquables aux embranchements ; 5 topologies (arbre, étoile, anneau, maillé, sous-réseaux avec routeurs /24) ; lasers qui coupent des câbles |
| ⬛ La boîte noire | Comprendre une machine fermée : essais, hypothèse, prédiction (démarche scientifique) |
| 📱 Le fil d'actu | Les émotions fortes se propagent plus loin : économie de l'attention |
| 🫧 La bulle | Boucle de rétroaction des likes, bulle de filtres, mission « sortir de sa bulle » |
| ❤️ Les likes | Hasard quand on est inconnu, superstition (menu de croyances testé par expérience), gamification |
| 🌐 Le réseau | 10 personnages (artistes, médecin, policier, prof, étudiant) aux valeurs cachées, 100 posts sur 25 événements étudiants, propagation des émotions, enquête pour recouper, révélation finale + travaux de recherche |
| 🧠 La boucle de dopamine | Fil prévisible puis imprévisible, courbe de dopamine simulée (erreur de prédiction, Schultz 1997), envie de continuer, notifications ; boucle déclencheur → action → récompense → envie, comment la casser |
| 🎚️ Le sélecteur | On like dans un flux et on règle l'algorithme (renforcement, découverte, anti-répétition) : boucle qui s'emballe, piège, contre-réaction qui stabilise ; DSA |
| 🏭 L'usine à tâches | Découper une mission en boîtes, choisir humain, machine à règles ou IA pour chacune, inventer des machines, lancer 20 commandes : erreurs, délai, coût, satisfaction (3 missions : pizzeria, vie scolaire, tournoi e-sport) |

Chaque jeu se termine par « Ta découverte » : un choix + une phrase de l'élève. La page « Mes découvertes » récapitule tout et se copie pour l'envoyer au professeur. Les réponses restent sur l'appareil (localStorage).

`enquete-calme.html` : première version, plus calme, en 6 missions (frise, avant -5000, iceberg, panne, love or hate, copie).

## ÉLÉA (Moodle)

`techno-survivor-scorm.zip` : paquet SCORM 1.2 à déposer comme activité SCORM. Note sur 100 = part des 12 épreuves dont la découverte est notée (statut « terminé » à 12/12). Chaque découverte est envoyée comme deux interactions (réponse au QCM, correcte ou non, et phrase de l'élève) : elles se lisent dans le rapport des interactions de l'activité. La progression est gardée sur ÉLÉA.
