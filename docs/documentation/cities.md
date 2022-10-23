---
sidebar_position: 9
---

# Cities (places)

An epigram can be associated with some places (cities or countries or whatever can have geocoordinates). Epigram 6.13 has no cities associated. Let us look to another epigram:

```python
ep7_81 = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:7.81').json()

ep7_81['cities']
```

```
ep7_81 = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:7.81').json()

ep7_81['cities']

[{'url': 'https://anthologiagraeca.org/api/cities/45/',
  'names': [{'name': 'Lindus', 'language': 'eng'}]},
 {'url': 'https://anthologiagraeca.org/api/cities/61/',
  'names': [{'name': 'Atenas', 'language': 'por'},
   {'name': 'Classical Athens', 'language': 'eng'},
   {'name': 'Antigua Atenas', 'language': 'spa'},
   {'name': 'Athènes', 'language': 'fra'},
   {'name': 'Atene', 'language': 'ita'},
   {'name': 'Athenae antiquae', 'language': 'lat'}]},
 {'url': 'https://anthologiagraeca.org/api/cities/73/',
  'names': [{'name': 'Sparta', 'language': 'eng'},
   {'name': 'Sparte', 'language': 'fra'},
   {'name': 'Esparta', 'language': 'spa'},
   {'name': 'Sparta', 'language': 'ita'},
   {'name': 'Sparta', 'language': 'lat'},
   {'name': 'Esparta', 'language': 'por'}]},
 {'url': 'https://anthologiagraeca.org/api/cities/78/',
  'names': [{'name': 'Antigua Corinto', 'language': 'spa'},
   {'name': 'Ancient Corinth', 'language': 'eng'},
   {'name': 'Corinthe antique', 'language': 'fra'},
   {'name': 'Corinto', 'language': 'ita'}]},
 {'url': 'https://anthologiagraeca.org/api/cities/89/',
  'names': [{'name': 'Mytilene', 'language': 'eng'},
   {'name': 'Mytilène', 'language': 'fra'},
   {'name': 'Mitilene', 'language': 'spa'},
   {'name': 'Mitilene', 'language': 'ita'},
   {'name': 'Mytilene', 'language': 'lat'}]},
 {'url': 'https://anthologiagraeca.org/api/cities/128/',
  'names': [{'name': 'Milet', 'language': 'fra'},
   {'name': 'Mileto', 'language': 'spa'},
   {'name': 'Mileto', 'language': 'por'},
   {'name': 'Mileto', 'language': 'ita'},
   {'name': 'Miletus', 'language': 'eng'},
   {'name': 'Miletus', 'language': 'lat'},
   {'name': 'Mileto', 'language': 'spa'},
   {'name': 'Mileto', 'language': 'por'},
   {'name': 'Milet', 'language': 'fra'},
   {'name': 'Mileto', 'language': 'ita'},
   {'name': 'Miletus', 'language': 'eng'},
   {'name': 'Miletus', 'language': 'lat'}]},
 {'url': 'https://anthologiagraeca.org/api/cities/129/',
  'names': [{'name': 'Priene', 'language': 'eng'},
   {'name': 'Priene', 'language': 'spa'},
   {'name': 'Priène', 'language': 'fra'},
   {'name': 'Priene', 'language': 'ita'},
   {'name': 'Priene', 'language': 'por'},
   {'name': 'Priene', 'language': 'lat'}]}]
```

And let us have a look to one of these cities:

```python
Mytilene = requests.get('https://anthologiagraeca.org/api/cities/89').json()

Mytilene
```

```
{'url': 'https://anthologiagraeca.org/api/cities/89/',
 'names': [{'name': 'Mytilene', 'language': 'eng'},
  {'name': 'Mytilène', 'language': 'fra'},
  {'name': 'Mitilene', 'language': 'spa'},
  {'name': 'Mitilene', 'language': 'ita'},
  {'name': 'Mytilene', 'language': 'lat'}],
 'alternative_urns': ['https://www.wikidata.org/wiki/Q42295059',
  'https://pleiades.stoa.org/places/550763'],
 'unique_id': 95,
 'longitude': None,
 'latitude': None,
 'descriptions': [],
 'created_at': '2021-09-09T19:09:12.954728Z',
 'updated_at': '2021-09-09T19:09:12.954734Z'}
```