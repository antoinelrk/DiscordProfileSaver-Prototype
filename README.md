# Discord Profile Saver

## Quoi ?

Petit projet qui consiste à sauvegarder les informations de profile Discord, ça comporte les avatars, les bannières, les couleurs et les "bio".

## Pourquoi ?

Actuellement je possède Nitro, comme **beaucoup** de membres Discord. Parfois j'aime changer de profile sans forcément tout recréer (Couleurs, Bio etc..), donc j'ai décidé de faire une petite application qui sauvegarderai ça afin que je puisse retrouver facilement ces informations.
Mais je ne m'arrêterai pas ici ! Le but final est de pouvoir se connecter avec son compte Discord et de "switch" automatiquement de profile suivant le serveur (ou le profile principal); C'est un gros projet finalement mais pas si complexe que ça.

## Etat

Ce projet est en opensource, utilisez-le, modifiez-le, partagez-le, c'est fait pour !
Pour l'instant le système de stockage se fait dans les Cookies, je sais c'est caca, mais c'est un prototype. Une api verra le jour bientôt (Soon<sup>TM</sup>).
C'est du Javascript actuellement, si le projet devient plus complexe, il y aurait une refonte en Typescript; cette version sera **supprimée** pour laisser place à la nouvelle.

### Docker

Le Dockerfile inclut dans le projet sert pour ma démo, il est "configuré" pour une utilisation personnelle (et instable)

## Lancer le projet chez soi

Clonez, installez, *npmrunez* 🤣

```sh
git clone https://github.com/antoinelrk/DiscordProfileSaver-Prototype.git
cd ./DiscordProfileSaver-Prototype
npm i && npm run dev
```

## La suite ? 

Je mettrais ce projet à jour le plus souvent possible, donc n'hésitez pas à activer les notifications ! (Et une petite étoile si ça vous plaît).
Si vous avez une idée, n'hésitez pas a me contacter ou faire une pull-request.

Happy coding! 
