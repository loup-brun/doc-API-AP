---
sidebar_position: 12
---

# External references

An epigram can be linked to some external source. The idea of the project is to develop an edition which can take into account some "weak links" between the anthological material and some other cultural artefacts. This links are subjective and they do not want to be considered as "scientific". They can be link to a pop song, for example.

They are just hyperlinks. For example:

```python
ep7_710 = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:7.710').json()
ep7_710['external_references']
```

```
[{'title': 'Jacques Lazure, Le Blaffart (2018)',
  'url': 'https://opuscules.ca/article-alire?article=202248'},
 {'title': 'Charles Baudelaire, Remords Posthumes (1857)',
  'url': 'https://poesie.webnet.fr/lesgrandsclassiques/Poemes/charles_baudelaire/remords_posthume'},
 {'title': 'Mylène Farmer, Regrets (1991)',
  'url': 'https://www.youtube.com/watch?v=ph6piqBnkgU'}]
```