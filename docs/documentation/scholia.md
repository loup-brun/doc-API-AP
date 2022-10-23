---
sidebar_position: 10
---

# Scholia

On the _Codex Palatinus 23_, scholia are often associated to epigrams. Those scholia are also rendered on the platform and hence on the API.

```python
ep6_13['scholia']
```

```
[{'book': 6,
  'fragment': 13,
  'sub_fragment': '',
  'number': 1,
  'url': 'https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:6.13.1/'},
 {'book': 6,
  'fragment': 13,
  'sub_fragment': '',
  'number': 2,
  'url': 'https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:6.13.2/'}]
```

Each *scholium* is identified by the epigram to which it is a scholium plus a number. For exemple the second scholium of the epigram 6.13 will be named 6.13.2.

The urn of a scholium will be structured as follows:

`/passages/urn:cts:greekLit:tlg5011.tlg001.sag:`+bookNumber`.`+epigramNumber+epigramLetter`.`+scholiumNumber

> For example: `/passages/urn:cts:greekLit:tlg5011.tlg001.sag:6.13.2/`

A *scholium* contains very similar information as an epigram: texts in different languages, the picture of the manuscript (in iiif), cities, keywords, commentaries.

**Attention** the texts opening a book have been identified as scholia to the epigram 0 of the book. For example 5.0.1 or 5.0.2 or 12.0.1

```python
sc5_0_1 = requests.get('https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:5.0.1/').json()
print(sc5_0_1)
sc5_0_2 = requests.get('https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:5.0.2/').json()
print(sc5_0_2)
sc12_0_2 = requests.get('https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:12.0.2/').json()
print(sc12_0_2)
```

```
{'id': 1999, 'url': 'https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:5.0.1/', 'urn': 'urn:cts:greekLit:tlg5011.tlg001.sag:5.0.1', 'web_url': '/passages/urn:cts:greekLit:tlg5011.tlg001.sag:5.0.1/', 'manuscripts': ['http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A087.jpg/pct:9.335021316210499,67.9883147400695,17.828050776662216,8.264462809917363/full/0/default.jpg'], 'texts': [{'url': 'https://anthologiagraeca.org/api/texts/3980/', 'language': 'grc', 'text': 'ἀρχή τῶν ἐρωτικὼν ἐπιγραμμάτων'}, {'url': 'https://anthologiagraeca.org/api/texts/12872/', 'language': 'por', 'text': 'Início dos epigramas eróticos.'}, {'url': 'https://anthologiagraeca.org/api/texts/12873/', 'language': 'fra', 'text': 'Le début des épigrammes érotiques.'}], 'cities': [], 'keywords': [], 'passage': {'book': 5, 'fragment': 0, 'sub_fragment': '', 'url': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:5.0/'}, 'comments': [{'description': ['Lemmatiste: L.'], 'language': ['fra']}], 'media': []}
{'id': 2000, 'url': 'https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:5.0.2/', 'urn': 'urn:cts:greekLit:tlg5011.tlg001.sag:5.0.2', 'web_url': '/passages/urn:cts:greekLit:tlg5011.tlg001.sag:5.0.2/', 'manuscripts': [' http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A088.jpg/pct:9.57839977186465,5.684292685810079,77.95889161681437,5.6234937070427575/full/0/default.jpg'], 'texts': [{'url': 'https://anthologiagraeca.org/api/texts/3981/', 'language': 'grc', 'text': 'ἀρχή τῶν ἐρωτικῶν έπιγραμμάτων - διαφόρων ποιητῶν'}, {'url': 'https://anthologiagraeca.org/api/texts/12875/', 'language': 'por', 'text': 'Início dos epigramas eróticos - de diferentes poetas.'}, {'url': 'https://anthologiagraeca.org/api/texts/12876/', 'language': 'fra', 'text': 'Le début des épigrammes érotiques - de différentes auteurs.'}], 'cities': [], 'keywords': [], 'passage': {'book': 5, 'fragment': 0, 'sub_fragment': '', 'url': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:5.0/'}, 'comments': [], 'media': []}
{'id': 816, 'url': 'https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:12.0.2/', 'urn': 'urn:cts:greekLit:tlg5011.tlg001.sag:12.0.2', 'web_url': '/passages/urn:cts:greekLit:tlg5011.tlg001.sag:12.0.2/', 'manuscripts': ['http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A569.jpg/pct:12.639237143536691,11.953945008805782,63.97128581066486,12.422816818582767/full/0/default.jpg'], 'texts': [{'url': 'https://anthologiagraeca.org/api/texts/1863/', 'language': 'grc', 'text': 'καὶ τίς ἂν εἴην εἰ πάντων σοι τῶν εἰρημένων τὴν γνῶσιν ἐκθέμενος τῶν Στράτωνος τῶν Σαρδιανοῦ Παιδικὴν Μοῦσαν ἐπεκρυψάμην, ἣν αὐτὸς παίζων πρὸς τοὺς πλησίον ἐπεδείκνυτο, τέρψιν οἰκείαν τὴν ἀπαγγελίαν τῶν ἐπιγραμμάτων, οὐ τὸν νοῦν, ποιούμενος. ἔχου τοίνυν τῶν ἑξῆς: ἐν χορείαις γὰρ ἥ γε σώφρων, κατὰ τὸν τραγικόν, οὐ διαφθαρήσεται.'}, {'url': 'https://anthologiagraeca.org/api/texts/1864/', 'language': 'grc', 'text': 'καὶ τίς ἂν εἴην εἰ πάντων σοι τῶν εἰρημένων τὴν γνῶσιν ἐκθέμενος τὴν Στράτωνος τοῦ Σαρδιανοῦ Παιδικὴν Μοῦσαν ἐπεκρυψάμην, ἣν αὐτὸς παίζων πρὸς τοὺς πλησίον ἐπεδείκνυτο, τέρψιν οἰκείαν τὴν ἀπαγγελίαν τῶν ἐπιγραμμάτων, οὐ τὸν νοῦν, ποιούμενος. ἔχου τοίνυν τῶν ἑξῆς: ἐν χορείαις γὰρ ἥ γε σώφρων, κατὰ τὸν τραγικόν, οὐ διαφθαρήσεται.'}, {'url': 'https://anthologiagraeca.org/api/texts/1865/', 'language': 'eng', 'text': 'And what kind of man should I be, reader, if after setting forth all that precedes for thee to study, I were to conceal the Puerile Muse of Strato of Barclis, which he used to recite to those about him in sport, taking personal delight in the diction of the epigrams, not in their meaning. Apply thyself then to what follows, for “in dances,” as the tragic poet says, "a chaste woman will not be corrupted.”'}, {'url': 'https://anthologiagraeca.org/api/texts/1866/', 'language': 'fra', 'text': "Et qui serais-je si après t'avoir donné la connaissance de toutes les choses dites, je te cachais la Muse garçonnière de Straton de Sardes, que lui-même en jouant récitait à ceux qui l'entouraient, en se faisant une joie personnelles de la récitation des épigrammes et non de leur sens. Voilà pour toi ce qui suit: dans les danses en effet, comme le dit le poète tragique, une femme chaste ne peut pas être corrompue."}], 'cities': [], 'keywords': [], 'passage': {'book': 12, 'fragment': 0, 'sub_fragment': '', 'url': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.0/'}, 'comments': [], 'media': []}
```