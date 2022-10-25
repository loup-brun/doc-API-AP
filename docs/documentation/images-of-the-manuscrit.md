---
sidebar_position: 5
---

# Images of the manuscript (Codex Palatinus 23)

For each epigram, the corresponding iiif images of the manuscript can be found under the key `manuscript` (a high quality digitization of the _codex palatinus 23_ is available on the website of the [Palatinate Library of Heidelberg](https://digi.ub.uni-heidelberg.de/diglit/cpgraec23/0079/image,info)).

For more information about the manuscript and its images, cf. the section "Manuscript Annotation API" in this document. 

```python
ep6_13 = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.13').json()
ep6_13['manuscripts']
```
```python
['http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A142.jpg/pct:10.614886731391586,73.26114119117034,50.355987055016186,4.664723032069971/full/0/default.jpg',
 'http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A143.jpg/pct:30.37231055564613,13.349681305818653,51.660362990702126,7.613758509494807/full/0/default.jpg']
 ```
 Two images are associated with epigram 6.13 since it spans two different pages. 
