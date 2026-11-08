# Print of the Dead

Python **niveau 1** (avant [Python of the Dead](../Python_of_the_dead/), qui traite des objets) : des monstres arrivent avec un ordre en français, l'élève tape la ligne Python correspondante. Son arme, le *Printeur 3000*, tire tout ce qui passe par `print( )`.

| Mission | Notions | Monstres |
| --- | --- | --- |
| 1 | `print("LUNDI")`, `print(13)`, `print(6 * 7)` : texte entre guillemets, nombres, calculs | zombies, squelettes |
| 2 | variables = boîtes : `arme = "ail"`, `print(arme)` vs `print("arme")`, `ail = 3` | vampires, fantômes |
| 3 | `balles = balles + 4`, `- * /`, `/` donne un float | loups-garous |
| 4 | `"Salut " + nom`, `cri * 3`, `print("Il reste", balles, "balles")`, `len(nom)` | zombies prénommés |
| 5 | tout mélangé + boss Bernard dont la barre de vie est la variable `vie` | la horde |

- Vérification par l'effet (ce qui est affiché, ce que contient la mémoire) : `print("Salut", nom)` est accepté comme `print("Salut " + nom)`.
- Mini-interpréteur intégré : vrais messages d'erreur Python (`NameError: name 'LUNDI' is not defined`, `Missing parentheses in call to 'print'`, `can only concatenate str (not "int") to str`…) + explication en français.
- Panneau « mémoire de Python » : chaque variable est une boîte avec son nom, sa valeur et son type.
- Mobile : barre de symboles (`print(`, `"`, `=`…, noms des variables), guillemets typographiques convertis, monstres plus lents.
- Toucher un monstre affiche son code (−3 points). Pas de note, progression gardée dans le navigateur. Code prof : taper `SNT-PROF` dans la console.
