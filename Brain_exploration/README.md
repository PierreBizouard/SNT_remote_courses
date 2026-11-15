# Brain Exploration

Série ludique sur la cognition, sur le modèle de Techno Survivor. On y aborde l'équilibre (homéostasie), la détection du changement, le cerveau conteur, le statut (Will Storr, Keith Johnstone), la tribu et les marchands d'attention (Tim Wu).

Le but est la métacognition : nous avons des biais, comme l'IA, et beaucoup sont aussi des superpouvoirs. Aucun jugement : tout le monde tombe dans les pièges, et c'est la diversité des points de vue qui compense.

Il y a 12 jeux, en 6 paires. Une paire s'ouvre quand les deux jeux de la paire précédente ont leur découverte notée. Le code enseignant `SNT-PROF` ouvre tout. L'enquête finale (8 situations de la vie réelle : quel mécanisme ?) s'ouvre après les 12 jeux.

| Paire | Jeux | État |
| --- | --- | --- |
| 1 · Pilote automatique | 🌡️ Survie homéostatique · 👁️ Hallucination contrôlée | ✅ jouables (v2 du jeu 1 à venir) |
| 2 · Seul le changement compte | 📡 Radar · 🔊 Bruit de fond | 🧪 à tester |
| 3 · Le cerveau conteur | 🎭 Confabulateur · 🪞 Miroir flatteur | 🧪 à tester |
| 4 · Le jeu du statut | 👑 Détecteur de statut · 🪙 Toujours plus | 🧪 à tester |
| 5 · La tribu | 👥 Pression du groupe · 🟦 Ma tribu | 🧪 à tester |
| 6 · Les marchands d'attention | 📺 Attention Tycoon · 🏭 Fabrique à besoins | 🧪 à tester |

## Les deux jeux jouables

**🌡️ Survie homéostatique** se joue en 3 phases de 30 s, avec 4 jauges : température, eau, sucre et stress.

1. On régule à la main.
2. Les événements sont annoncés 3 s avant, et un bonus récompense l'anticipation.
3. En pilote automatique, le corps régule seul pendant qu'on tape sur des zombies. Ensuite, les notifications font monter un stress que l'automatique n'arrive plus à faire baisser.

**👁️ Hallucination contrôlée** comporte 4 épreuves :

1. Des silhouettes flashées : zombie ou souche ? Les deux sont faits des mêmes pièces, avec un rapport hauteur/largeur variable. Fonds (jour, nuit, rouge…) et détails (chauves-souris, yeux, lune, fleurs) tirés au hasard. Zombie qui passe −5, fausse alerte −1, bonne réponse +1. Phase 1 réussie si au plus 1 zombie passe ; en phase 2, un seul zombie qui passe = partie perdue (on recommence la phase). On joue au calme puis en alerte, avec les mêmes silhouettes ambiguës dans les deux phases, et on compare.
2. Un texte aux lettres mélangées.
3. La tache aveugle, que le cerveau remplit avec les rayures du fond.
4. Le mot suivant, avec le lien vers les IA de langage.

## La découverte, en 5 étapes, sans pénalité

1. Ce qui s'est passé : un QCM, suivi d'un message rassurant (« la plupart des gens font pareil, ton prof aussi »).
2. Le superpouvoir : une scène préhistorique qui montre pourquoi le cerveau fait ça, puis quand il aide et quand il piège aujourd'hui.
3. Le mode enquête : des situations de la vie courante, à classer en « ça aide », « ça piège » ou « les deux ».
4. Et l'IA ? : le parallèle avec l'intelligence artificielle.
5. Avec tes mots : une phrase, une situation où le mécanisme t'aide et une où il te piège.

## ÉLÉA (Moodle)

`brain-exploration-scorm.zip` est un paquet SCORM 1.2.

- La note sur 100 correspond à la part des 12 jeux dont la découverte est notée.
- Chaque réponse est envoyée comme interaction, avec les identifiants suivants :
  - `<jeu>_revelation`, `_superpouvoir`, `_enqueteN` et `_ia`, accompagnés de correct / wrong ;
  - `<jeu>_phrase`, `_aide` et `_piege` pour les textes de l'élève.
