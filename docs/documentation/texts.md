---
sidebar_position: 6
---

# Texts

Each epigram has a list of texts wich are associated to it. All the epigrams in our database should have at least the greek text. An epigram can have more than one greek editions of the text and a set of translations in different languages :

```python
ep6_13 = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.13').json()
ep6_13['texts']
```

```
[{'url': 'https://anthologiagraeca.org/api/texts/1463/',
  'language': 'grc',
  'text': 'οἱ τρισσοί τοι ταῦτα τὰ δίκτυα θῆκαν ὅμαιμοι,\nἀγρότα Πάν, ἄλλης ἄλλος ἀπ᾽ ἀγρεσίης:\nὧν ἀπὸ μὲν πτηνῶν Πίγρης τάδε, ταῦτα δὲ Δᾶμις\nτετραπόδων, Κλείτωρ δ᾽ ὁ τρίτος εἰναλίων.\nἀνθ᾽ ὧν τῷ μὲν πέμπε δι᾽ ἠέρος εὔστοχον ἄγρην,\nτῷ δὲ διὰ δρυμῶν, τῷ δὲ δι᾽ ἠϊόνων. '},
 {'url': 'https://anthologiagraeca.org/api/texts/1464/',
  'language': 'ita',
  'text': 'Tre fratelli ti hanno dedicato queste reti,\nPan cacciatore, ognuna proveniente da una caccia differente.\nPigre queste di uccelli, Damis queste,\ndi bestie feroci, Cleitore, il terzo, di animali marini.\nIn cambio dai una caccia fortunata al primo in aria\nal secondo nei boschi e al terzo sulle rive.'},
 {'url': 'https://anthologiagraeca.org/api/texts/1465/',
  'language': 'fra',
  'text': "Ces trois frères t'ont dédié ces filets,\nPan chasseur, chacun issu d'une chasse différente.\nPigres celles-ci, d'oiseaux, Damis celle-ci,\nde bêtes féroces, Cléitor, le troisième, d'animaux marins.\nEn échange donne une bonne chasse au premier dans l'air,\nau deuxième dans les bois et au troisième sur les rivages."},
 {'url': 'https://anthologiagraeca.org/api/texts/1466/',
  'language': 'fra',
  'text': "Les trois frères t'ont consacré, chasseur Pan, ces filets, pris par chacun à son genre de chasse: Pigrès, pour les oiseaux; Damis, pour les quadrupèdes; Cléitor, pour le peuple de la mer. Envoie-leur en échange une bonne chasse à l'un par les airs, au second par les bois, à l'autre par les grèves."},
 {'url': 'https://anthologiagraeca.org/api/texts/1467/',
  'language': 'eng',
  'text': 'Huntsman Pan, the three brothers dedicated these nets to thee, each from a different chase: Pigres these from fowl, Damis these from beast, and Clitor his from the denizens of the deep. In return for which send them easily caught game, to the first through the air, to the second through the woods, and to the third through the shore-water.'}]
```

