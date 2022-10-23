---
sidebar_position: 14
---

# Wikidata and other identifiers

Almost all the objects in our data are aligned with a wikidata id. It is the case for `authors`, `keywords` and `cities`. The wikidata id can be found in the field `alternative_urns`.

Let us look for an author: 

```python
meleager = requests.get('https://anthologiagraeca.org/api/authors/1').json()

meleager
```

```
{'id': 1,
 'url': 'https://anthologiagraeca.org/api/authors/1/',
 'names': [{'name': 'Callimachus', 'language': 'eng'},
  {'name': 'Καλλίμαχος', 'language': 'grc'},
  {'name': 'Callimaque', 'language': 'fra'}],
 'alternative_urns': ['https://www.wikidata.org/wiki/Q192417',
  'http://data.perseus.org/catalog/urn:cts:greekLit:tlg0533'],
 'city_born': {'url': 'https://anthologiagraeca.org/api/cities/1/',
  'names': [{'name': 'Cyrène', 'language': 'fra'},
   {'name': 'Cirene', 'language': 'spa'},
   {'name': 'Cirene', 'language': 'por'},
   {'name': 'Cyrene', 'language': 'eng'},
   {'name': 'Cyrene', 'language': 'lat'},
   {'name': 'Cirene', 'language': 'ita'}],
  'alternative_urns': ['https://anthologia.ecrituresnumeriques.ca/api/v1/cities/3',
   'https://www.wikidata.org/wiki/Q44112',
   'https://pleiades.stoa.org/places/373778'],
  'unique_id': 3,
  'longitude': '32.80799',
  'latitude': '21.86616',
  'descriptions': [],
  'created_at': '2021-04-08T21:27:25.373000Z',
  'updated_at': '2021-04-08T21:27:25.373000Z'},
 'city_died': {'url': 'https://anthologiagraeca.org/api/cities/2/',
  'names': [{'name': 'Alexandrie', 'language': 'fra'},
   {'name': 'Alexandria', 'language': 'eng'},
   {'name': 'Ἀλεξάνδρεια', 'language': 'grc'}],
  'alternative_urns': ['https://anthologia.ecrituresnumeriques.ca/api/v1/cities/4',
   'https://www.wikidata.org/wiki/Q87',
   'https://pleiades.stoa.org/places/727070'],
  'unique_id': 4,
  'longitude': '31.20010',
  'latitude': '29.91857',
  'descriptions': [],
  'created_at': '2021-04-08T21:27:25.384000Z',
  'updated_at': '2021-04-08T21:27:25.384000Z'},
 'born_range_year_date': None,
 'died_range_year_date': None,
 'unique_id': 1,
 'created_at': '2021-04-08T21:27:25.392000Z',
 'updated_at': '2021-04-08T21:27:25.392000Z',
 'validation': 0,
 'tlg_id': 'tlg-0533',
 'main_name': 'Callimachus',
 'descriptions': [],
 'images': []}
```

```python
meleager['alternative_urns']
```

```
['https://www.wikidata.org/wiki/Q192417',
 'http://data.perseus.org/catalog/urn:cts:greekLit:tlg0533']
```

Other identifiers can be found in alternative_urns: for exemple the TLG for authors (look above) and the pleiades id for places:

```python
Mytilene['alternative_urns']
```
```
['https://www.wikidata.org/wiki/Q42295059',
 'https://pleiades.stoa.org/places/550763']
```