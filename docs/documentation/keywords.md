---
sidebar_position: 8
---

# Keywords

Each epigram can be associated with keywords.

One can have more information about a keyword on its own endpoint, structured as follow :

`https://anthologiagraeca.org/api/keywords/`+keyword_id

(the keyword id can be found here at the end of its URL on the platform, _e.g._ https://anthologiagraeca.org/keywords/1/ is the URL for the keyword "Elegiac couplet" ; the id is "1").

```python
ep6_13 = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.13').json()
ep6_13['keywords']
```

```
[{'url': 'https://anthologiagraeca.org/api/keywords/1/',
  'names': [{'name': 'distique élégiaque', 'language': 'fra'},
   {'name': 'distico elegiaco', 'language': 'ita'},
   {'name': 'Elegiac couplet', 'language': 'eng'}],
  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/1/',
   'names': [{'name': 'Formes métriques', 'language': 'fra'},
    {'name': 'Metric forms', 'language': 'eng'},
    {'name': 'Metra', 'language': 'lat'},
    {'name': 'Forme metriche', 'language': 'ita'},
    {'name': 'Formas métricas', 'language': 'por'}]}},
 {'url': 'https://anthologiagraeca.org/api/keywords/4/',
  'names': [{'name': 'époque hellénistique', 'language': 'fra'},
   {'name': 'epoca ellenistica', 'language': 'ita'},
   {'name': 'hellenistic period', 'language': 'eng'}],
  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/4/',
   'names': [{'name': 'Époques', 'language': 'fra'},
    {'name': 'Periods', 'language': 'eng'},
    {'name': 'Tempora', 'language': 'lat'},
    {'name': 'Periodi', 'language': 'ita'},
    {'name': 'Épocas', 'language': 'por'}]}},
 {'url': 'https://anthologiagraeca.org/api/keywords/73/',
  'names': [{'name': 'Validé par William', 'language': 'fra'}],
  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/11/',
   'names': [{'name': 'Validation', 'language': 'fra'},
    {'name': 'Validation', 'language': 'eng'},
    {'name': 'Contralectus', 'language': 'lat'},
    {'name': 'Validazione', 'language': 'ita'},
    {'name': 'Validação', 'language': 'por'}]}},
 {'url': 'https://anthologiagraeca.org/api/keywords/186/',
  'names': [{'name': 'dedicatory', 'language': 'eng'},
   {'name': 'votif (anathématique)', 'language': 'fra'}],
  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/3/',
   'names': [{'name': 'Genres', 'language': 'fra'},
    {'name': 'Genres', 'language': 'eng'},
    {'name': 'Genera', 'language': 'lat'},
    {'name': 'Generi', 'language': 'ita'},
    {'name': 'Gêneros', 'language': 'por'}]}},
 {'url': 'https://anthologiagraeca.org/api/keywords/234/',
  'names': [{'name': 'Damis', 'language': 'eng'}],
  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',
   'names': [{'name': 'Personnes citées', 'language': 'fra'},
    {'name': 'Quoted persons', 'language': 'eng'},
    {'name': 'Homines memorati', 'language': 'lat'},
    {'name': 'Persone citate', 'language': 'ita'},
    {'name': 'Pessoas citadas', 'language': 'por'}]}},
 {'url': 'https://anthologiagraeca.org/api/keywords/270/',
  'names': [{'name': 'Chasse', 'language': 'fra'}],
  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/10/',
   'names': [{'name': 'Motifs', 'language': 'fra'},
    {'name': 'Motifs', 'language': 'eng'},
    {'name': 'Themata', 'language': 'lat'},
    {'name': 'Motivi', 'language': 'ita'},
    {'name': 'Motivos', 'language': 'por'}]}},
 {'url': 'https://anthologiagraeca.org/api/keywords/492/',
  'names': [{'name': 'Pan', 'language': 'eng'}],
  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/7/',
   'names': [{'name': 'Divinités', 'language': 'fra'},
    {'name': 'Deities', 'language': 'eng'},
    {'name': 'Divinitates', 'language': 'lat'},
    {'name': 'Divinità', 'language': 'ita'},
    {'name': 'Divindades', 'language': 'por'}]}},
 {'url': 'https://anthologiagraeca.org/api/keywords/574/',
  'names': [{'name': 'Πίγρης', 'language': 'grc'},
   {'name': 'Pigrès', 'language': 'fra'}],
  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',
   'names': [{'name': 'Personnes citées', 'language': 'fra'},
    {'name': 'Quoted persons', 'language': 'eng'},
    {'name': 'Homines memorati', 'language': 'lat'},
    {'name': 'Persone citate', 'language': 'ita'},
    {'name': 'Pessoas citadas', 'language': 'por'}]}},
 {'url': 'https://anthologiagraeca.org/api/keywords/575/',
  'names': [{'name': 'Κλείτωρ', 'language': 'grc'},
   {'name': 'Cléitor', 'language': 'fra'}],
  'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',
   'names': [{'name': 'Personnes citées', 'language': 'fra'},
    {'name': 'Quoted persons', 'language': 'eng'},
    {'name': 'Homines memorati', 'language': 'lat'},
    {'name': 'Persone citate', 'language': 'ita'},
    {'name': 'Pessoas citadas', 'language': 'por'}]}}]
```

```python
keyword_1 = requests.get("https://anthologiagraeca.org/api/keywords/1/").json()

keyword_1
```
```
{'id': 1,
 'url': 'https://anthologiagraeca.org/api/keywords/1/',
 'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/1/',
  'names': [{'name': 'Formes métriques', 'language': 'fra'},
   {'name': 'Metric forms', 'language': 'eng'},
   {'name': 'Metra', 'language': 'lat'},
   {'name': 'Forme metriche', 'language': 'ita'},
   {'name': 'Formas métricas', 'language': 'por'}]},
 'names': [{'name': 'distique élégiaque', 'language': 'fra'},
  {'name': 'distico elegiaco', 'language': 'ita'},
  {'name': 'Elegiac couplet', 'language': 'eng'}],
 'alternative_urns': [{'urn': 'https://www.wikidata.org/wiki/Q2082412'}]}
 ```

keywords are organized in `categories` and each keyword *must* belong to a category.

The list of the categories is here: https://anthologiagraeca.org/api/keyword_categories/
