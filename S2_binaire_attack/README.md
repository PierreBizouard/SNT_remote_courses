# S2 · Binaire Attack

Jeu web (SNT, seconde) pour s'entraîner aux bases 2, 10 et 16 et au codage des images.
Une seule page HTML autonome, jouable sur ordinateur, tablette et téléphone.

- `index.html` : le jeu (à ouvrir dans un navigateur, ou via GitHub Pages).
- `binaire-attack-scorm.zip` : paquet SCORM 1.2 pour ÉLÉA / Moodle (note sur 100, erreurs remontées dans le rapport des interactions).
- `questions-qcm.md` : liste des questions du QCM hexadécimal.

## Contenu

- **Comprendre le binaire** (tutoriel) : billes rangées en paquets de 10, puis tas qui doublent 1, 2, 4, 8, 16, cartes CS Unplugged, notation `0b`, électronique, petit défi.
- **1 · Les billes 16-8-4-2-1**
- **2 · Attaque binaire** (modes Attaque et Sauvetage avec escalier jusqu'au fromage : facile ; intermédiaire, l'eau monte ; difficile, l'eau monte et le fromage est de plus en plus haut)
- **3 · Les colonnes** (modes boules et unités)
- **4 · Le tableau hexa** (+ QCM)
- **5 · Pixels et lumières**
- Jeu secret **Détonateurs** (5 étoiles, hors note), façon Puyo Puyo : les blocs ont la taille de leur valeur (1, 2, 4, 8 cases ; 16 = 4x4 ou 2x8) et tombent par gravité. Une étoile-détonateur est fixée sur un bloc : elle explose quand son groupe fait exactement son nombre de cases. Blocs identiques alignés : fusion (1 + 1 = 10) ; bloc à moitié dans le vide : il se casse en deux. Trop de cases : le groupe se pétrifie en pierres grises, que le souffle brise (au moins 1 case autour du groupe, plus pour les grands nombres) : collée au groupe, une pierre casse tout de suite ; à 2 cases il faut 2 explosions ; à 3 cases, 3. Les blocs qui touchent une étoile deviennent constellés ✨. Deux étoiles dans le même groupe additionnent leurs nombres (somme affichée en grand) ; si le groupe se coupe, chaque étoile repart avec la moitié (division entière par 2). Mode « grand puits » (12x20, petites cases) : bloc 16 et étoiles jusqu'à 31 dès le début.

Paliers : un objectif de points débloque le niveau suivant, un second donne une étoile.
Code enseignant (débloque tout) : voir `TEACHER_CODE` dans le source.
