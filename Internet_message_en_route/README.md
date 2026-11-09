# Message en route

Simulateur pour la partie **Internet / messages** de SNT : on part uniquement du contenu d'un message, et à chaque échec (silence ou message d'erreur qui revient), l'élève (Alice) observe le canal à deux fils (aller et retour, bits en créneaux), pose une question ou ajoute l'information qui manque. Petit à petit, il reconstruit un vrai paquet TCP/IP.

| Chapitre | Problème observé | Champ découvert |
| --- | --- | --- |
| 1 Le fil | les lettres n'entrent pas dans le fil | contenu en binaire (ASCII, 8 bits) |
| 2 Le début | les bits se perdent dans les parasites | préambule (début) |
| 3 La fin | deux messages collés + parasites | longueur |
| 4 Le carrefour | le routeur jette le paquet | adresse IP destination |
| 5 Le retour | la réponse ne revient pas | adresse IP source |
| 6 Les applications | l'ordinateur de Bob ne sait pas à quelle appli donner | port |
| 7 Le découpage | paquets dans le désordre | numéro de séquence |
| 8 Les parasites | un bit change (14H → 15H) | somme de contrôle |
| 9 Le paquet perdu | un paquet est jeté, personne ne le sait | accusé de réception (ACK) |
| 10 La boucle infinie | un paquet tourne en rond | TTL |

Mode enseignant : code `SNT-PROF` (tous les chapitres + bouton Solution).
