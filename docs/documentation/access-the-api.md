---
sidebar_position: 1
---

# Access the API

We will start by importing different useful libraries and define our first variables for the requests.

```python
import requests
import json

url = 'http://anthologiagraeca.org/api'
parameters = {
    'format':'json'
}

data = requests.get(url, parameters).json()
```

The variable `data` gives us, in json format, the available endpoints.

```python
data
```
```
{'passages': 'https://anthologiagraeca.org/api/passages/?format=json',
 'books': 'https://anthologiagraeca.org/api/books/?format=json',
 'scholia': 'https://anthologiagraeca.org/api/scholia/?format=json',
 'texts': 'https://anthologiagraeca.org/api/texts/?format=json',
 'media': 'https://anthologiagraeca.org/api/media/?format=json',
 'manuscripts': 'https://anthologiagraeca.org/api/manuscripts/?format=json',
 'keywords': 'https://anthologiagraeca.org/api/keywords/?format=json',
 'keyword_categories': 'https://anthologiagraeca.org/api/keyword_categories/?format=json',
 'languages': 'https://anthologiagraeca.org/api/languages/?format=json',
 'descriptions': 'https://anthologiagraeca.org/api/descriptions/?format=json',
 'cities': 'https://anthologiagraeca.org/api/cities/?format=json',
 'authors': 'https://anthologiagraeca.org/api/authors/?format=json',
 'comments': 'https://anthologiagraeca.org/api/comments/?format=json',
 'editions': 'https://anthologiagraeca.org/api/editions/?format=json'
 }
 ```