"use strict";(self.webpackChunkapi_ap=self.webpackChunkapi_ap||[]).push([[3782],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function g(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),l=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=l(e.components);return t.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return n?t.createElement(h,s(s({ref:a},u),{},{components:n})):t.createElement(h,s({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var g={};for(var i in a)hasOwnProperty.call(a,i)&&(g[i]=a[i]);g.originalType=e,g.mdxType="string"==typeof e?e:r,s[1]=g;for(var l=2;l<o;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9241:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>g,toc:()=>l});var t=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},s="Data about epigrams",g={unversionedId:"documentation/data-about-epigrams",id:"documentation/data-about-epigrams",title:"Data about epigrams",description:"Let us now have a look at the data available for each epigram. Most of these data are present in the list of epigrams (alldata['results']), but each epigram has its own endpoint, structured on the basis of its book and its number.",source:"@site/docs/documentation/data-about-epigrams.md",sourceDirName:"documentation",slug:"/documentation/data-about-epigrams",permalink:"https://rochdly.github.io/doc-API-AP/docs/documentation/data-about-epigrams",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"https://rochdly.github.io/doc-API-AP/docs/documentation/pagination"},next:{title:"Images of the manuscript (Codex Palatinus 23)",permalink:"https://rochdly.github.io/doc-API-AP/docs/documentation/images-of-the-manuscrit"}},i={},l=[],u={toc:l};function p(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-about-epigrams"},"Data about epigrams"),(0,r.kt)("p",null,"Let us now have a look at the data available for each epigram. Most of these data are present in the list of epigrams (",(0,r.kt)("inlineCode",{parentName:"p"},"alldata['results']"),"), but each epigram has its own endpoint, structured on the basis of its book and its number."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Greek Anthology")," has 16 books, as you can see here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"number_of_books = requests.get('https://anthologiagraeca.org/api/books/').json()['count']\n\nprint(number_of_books)\n  16\n")),(0,r.kt)("p",null,"An epigram is normally identified by a number (for exemple 1 or 145)."),(0,r.kt)("p",null,"Sometimes there are two or more epigrams for the same number. In these cases letters are used (",(0,r.kt)("em",{parentName:"p"},"e.g"),". 132a)."),(0,r.kt)("p",null,"Based on this information the epigram endpoind will be structured as follows:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/passages/urn:cts:greekLit:tlg7000.tlg001.ag:"),"+bookNumber",(0,r.kt)("inlineCode",{parentName:"p"},"."),"+epigramNumber+epigramLetter"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"an example from the platform: ",(0,r.kt)("a",{parentName:"p",href:"https://anthologiagraeca.org/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.132a/"},"https://anthologiagraeca.org/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.132a/"))),(0,r.kt)("p",null,"This url is avaiable in the list of epigrams as one can see in the field url of each result (let us take the first one here):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"epigrams_res['results'][0]['url']\n  'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:1.1/?format=json'\n")),(0,r.kt)("p",null,"Let us have a look at the epigram 6.13, which means the epigram number 13 of the book 6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ep6_13 = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.13').json()\n\nep6_13\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Results"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{'id': 394,\n 'book': {'url': 'https://anthologiagraeca.org/api/books/5/', 'number': 6},\n 'fragment': 13,\n 'sub_fragment': '',\n 'urn': 'urn:cts:greekLit:tlg7000.tlg001.ag:6.13',\n 'url': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.13/',\n 'web_url': '/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.13/',\n 'manuscripts': ['http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A142.jpg/pct:10.614886731391586,73.26114119117034,50.355987055016186,4.664723032069971/full/0/default.jpg',\n  'http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A143.jpg/pct:30.37231055564613,13.349681305818653,51.660362990702126,7.613758509494807/full/0/default.jpg'],\n 'texts': [{'url': 'https://anthologiagraeca.org/api/texts/1463/',\n   'language': 'grc',\n   'text': '\u03bf\u1f31 \u03c4\u03c1\u03b9\u03c3\u03c3\u03bf\u03af \u03c4\u03bf\u03b9 \u03c4\u03b1\u1fe6\u03c4\u03b1 \u03c4\u1f70 \u03b4\u03af\u03ba\u03c4\u03c5\u03b1 \u03b8\u1fc6\u03ba\u03b1\u03bd \u1f45\u03bc\u03b1\u03b9\u03bc\u03bf\u03b9,\\n\u1f00\u03b3\u03c1\u03cc\u03c4\u03b1 \u03a0\u03ac\u03bd, \u1f04\u03bb\u03bb\u03b7\u03c2 \u1f04\u03bb\u03bb\u03bf\u03c2 \u1f00\u03c0\u1fbd \u1f00\u03b3\u03c1\u03b5\u03c3\u03af\u03b7\u03c2:\\n\u1f67\u03bd \u1f00\u03c0\u1f78 \u03bc\u1f72\u03bd \u03c0\u03c4\u03b7\u03bd\u1ff6\u03bd \u03a0\u03af\u03b3\u03c1\u03b7\u03c2 \u03c4\u03ac\u03b4\u03b5, \u03c4\u03b1\u1fe6\u03c4\u03b1 \u03b4\u1f72 \u0394\u1fb6\u03bc\u03b9\u03c2\\n\u03c4\u03b5\u03c4\u03c1\u03b1\u03c0\u03cc\u03b4\u03c9\u03bd, \u039a\u03bb\u03b5\u03af\u03c4\u03c9\u03c1 \u03b4\u1fbd \u1f41 \u03c4\u03c1\u03af\u03c4\u03bf\u03c2 \u03b5\u1f30\u03bd\u03b1\u03bb\u03af\u03c9\u03bd.\\n\u1f00\u03bd\u03b8\u1fbd \u1f67\u03bd \u03c4\u1ff7 \u03bc\u1f72\u03bd \u03c0\u03ad\u03bc\u03c0\u03b5 \u03b4\u03b9\u1fbd \u1f20\u03ad\u03c1\u03bf\u03c2 \u03b5\u1f54\u03c3\u03c4\u03bf\u03c7\u03bf\u03bd \u1f04\u03b3\u03c1\u03b7\u03bd,\\n\u03c4\u1ff7 \u03b4\u1f72 \u03b4\u03b9\u1f70 \u03b4\u03c1\u03c5\u03bc\u1ff6\u03bd, \u03c4\u1ff7 \u03b4\u1f72 \u03b4\u03b9\u1fbd \u1f20\u03ca\u03cc\u03bd\u03c9\u03bd. '},\n  {'url': 'https://anthologiagraeca.org/api/texts/1464/',\n   'language': 'ita',\n   'text': 'Tre fratelli ti hanno dedicato queste reti,\\nPan cacciatore, ognuna proveniente da una caccia differente.\\nPigre queste di uccelli, Damis queste,\\ndi bestie feroci, Cleitore, il terzo, di animali marini.\\nIn cambio dai una caccia fortunata al primo in aria\\nal secondo nei boschi e al terzo sulle rive.'},\n  {'url': 'https://anthologiagraeca.org/api/texts/1465/',\n   'language': 'fra',\n   'text': \"Ces trois fr\xe8res t'ont d\xe9di\xe9 ces filets,\\nPan chasseur, chacun issu d'une chasse diff\xe9rente.\\nPigres celles-ci, d'oiseaux, Damis celle-ci,\\nde b\xeates f\xe9roces, Cl\xe9itor, le troisi\xe8me, d'animaux marins.\\nEn \xe9change donne une bonne chasse au premier dans l'air,\\nau deuxi\xe8me dans les bois et au troisi\xe8me sur les rivages.\"},\n  {'url': 'https://anthologiagraeca.org/api/texts/1466/',\n   'language': 'fra',\n   'text': \"Les trois fr\xe8res t'ont consacr\xe9, chasseur Pan, ces filets, pris par chacun \xe0 son genre de chasse: Pigr\xe8s, pour les oiseaux; Damis, pour les quadrup\xe8des; Cl\xe9itor, pour le peuple de la mer. Envoie-leur en \xe9change une bonne chasse \xe0 l'un par les airs, au second par les bois, \xe0 l'autre par les gr\xe8ves.\"},\n  {'url': 'https://anthologiagraeca.org/api/texts/1467/',\n   'language': 'eng',\n   'text': 'Huntsman Pan, the three brothers dedicated these nets to thee, each from a different chase: Pigres these from fowl, Damis these from beast, and Clitor his from the denizens of the deep. In return for which send them easily caught game, to the first through the air, to the second through the woods, and to the third through the shore-water.'}],\n 'authors': [{'url': 'https://anthologiagraeca.org/api/authors/19/',\n   'tlg_id': 'tlg-1458',\n   'names': [{'name': 'Leonidas of Tarentum', 'language': 'eng'},\n    {'name': '\u039b\u03b5\u03c9\u03bd\u03af\u03b4\u03b1\u03c2 \u1f41 \u03a4\u03b1\u03c1\u03b1\u03bd\u03c4\u1fd6\u03bd\u03bf\u03c2', 'language': 'grc'},\n    {'name': 'Leonida di Taranto', 'language': 'ita'},\n    {'name': '\u039b\u03b5\u03c9\u03bd\u1f77\u03b4\u03b1\u03c2 \u1fbf\u0391\u03bb\u03b5\u03be\u03b1\u03bd\u03b4\u03c1\u03b5\u1f7b\u03c2', 'language': 'grc'},\n    {'name': \"L\xe9onidas d'Alexandrie\", 'language': 'fra'},\n    {'name': 'Leonidas of Alexandria', 'language': 'eng'}]}],\n 'cities': [],\n 'keywords': [{'url': 'https://anthologiagraeca.org/api/keywords/1/',\n   'names': [{'name': 'distique \xe9l\xe9giaque', 'language': 'fra'},\n    {'name': 'distico elegiaco', 'language': 'ita'},\n    {'name': 'Elegiac couplet', 'language': 'eng'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/1/',\n    'names': [{'name': 'Formes m\xe9triques', 'language': 'fra'},\n     {'name': 'Metric forms', 'language': 'eng'},\n     {'name': 'Metra', 'language': 'lat'},\n     {'name': 'Forme metriche', 'language': 'ita'},\n     {'name': 'Formas m\xe9tricas', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/4/',\n   'names': [{'name': '\xe9poque hell\xe9nistique', 'language': 'fra'},\n    {'name': 'epoca ellenistica', 'language': 'ita'},\n    {'name': 'hellenistic period', 'language': 'eng'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/4/',\n    'names': [{'name': '\xc9poques', 'language': 'fra'},\n     {'name': 'Periods', 'language': 'eng'},\n     {'name': 'Tempora', 'language': 'lat'},\n     {'name': 'Periodi', 'language': 'ita'},\n     {'name': '\xc9pocas', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/73/',\n   'names': [{'name': 'Valid\xe9 par William', 'language': 'fra'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/11/',\n    'names': [{'name': 'Validation', 'language': 'fra'},\n     {'name': 'Validation', 'language': 'eng'},\n     {'name': 'Contralectus', 'language': 'lat'},\n     {'name': 'Validazione', 'language': 'ita'},\n     {'name': 'Valida\xe7\xe3o', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/186/',\n   'names': [{'name': 'dedicatory', 'language': 'eng'},\n    {'name': 'votif (anath\xe9matique)', 'language': 'fra'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/3/',\n    'names': [{'name': 'Genres', 'language': 'fra'},\n     {'name': 'Genres', 'language': 'eng'},\n     {'name': 'Genera', 'language': 'lat'},\n     {'name': 'Generi', 'language': 'ita'},\n     {'name': 'G\xeaneros', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/234/',\n   'names': [{'name': 'Damis', 'language': 'eng'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',\n    'names': [{'name': 'Personnes cit\xe9es', 'language': 'fra'},\n     {'name': 'Quoted persons', 'language': 'eng'},\n     {'name': 'Homines memorati', 'language': 'lat'},\n     {'name': 'Persone citate', 'language': 'ita'},\n     {'name': 'Pessoas citadas', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/270/',\n   'names': [{'name': 'Chasse', 'language': 'fra'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/10/',\n    'names': [{'name': 'Motifs', 'language': 'fra'},\n     {'name': 'Motifs', 'language': 'eng'},\n     {'name': 'Themata', 'language': 'lat'},\n     {'name': 'Motivi', 'language': 'ita'},\n     {'name': 'Motivos', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/492/',\n   'names': [{'name': 'Pan', 'language': 'eng'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/7/',\n    'names': [{'name': 'Divinit\xe9s', 'language': 'fra'},\n     {'name': 'Deities', 'language': 'eng'},\n     {'name': 'Divinitates', 'language': 'lat'},\n     {'name': 'Divinit\xe0', 'language': 'ita'},\n     {'name': 'Divindades', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/574/',\n   'names': [{'name': '\u03a0\u03af\u03b3\u03c1\u03b7\u03c2', 'language': 'grc'},\n    {'name': 'Pigr\xe8s', 'language': 'fra'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',\n    'names': [{'name': 'Personnes cit\xe9es', 'language': 'fra'},\n     {'name': 'Quoted persons', 'language': 'eng'},\n     {'name': 'Homines memorati', 'language': 'lat'},\n     {'name': 'Persone citate', 'language': 'ita'},\n     {'name': 'Pessoas citadas', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/575/',\n   'names': [{'name': '\u039a\u03bb\u03b5\u03af\u03c4\u03c9\u03c1', 'language': 'grc'},\n    {'name': 'Cl\xe9itor', 'language': 'fra'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',\n    'names': [{'name': 'Personnes cit\xe9es', 'language': 'fra'},\n     {'name': 'Quoted persons', 'language': 'eng'},\n     {'name': 'Homines memorati', 'language': 'lat'},\n     {'name': 'Persone citate', 'language': 'ita'},\n     {'name': 'Pessoas citadas', 'language': 'por'}]}}],\n 'scholia': [{'book': 6,\n   'fragment': 13,\n   'sub_fragment': '',\n   'number': 1,\n   'url': 'https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:6.13.1/'},\n  {'book': 6,\n   'fragment': 13,\n   'sub_fragment': '',\n   'number': 2,\n   'url': 'https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:6.13.2/'}],\n 'comments': [{'description': ['# Fresque de Pomp\xe9i\\n\\n Cette \xe9pigramme est repr\xe9sent\xe9e, selon Gutzwiller, dans une fresque de Pomp\xe9i'],\n   'language': ['fra']},\n  {'description': [\"# Imitations de 6.13\\n\\n C'est vraisemblablement cette pi\xe8ce de L\xe9onidas qui a inspir\xe9 les \xe9pigr. 11-16 et 179-187, entre autres 14 (d'Antipater) et 16 (d'Archias), qui n'en sont que des imitations assez serviles. Elle \xe9tait, en tous cas, une des plus classiques de toute la s\xe9rie; car c'est celle-l\xe0 qu'on avait grav\xe9e sur le mur d'une maison de Pomp\xe9i pour servir de l\xe9gende \xe0 une sc\xe8ne o\xf9 \xe9tait peinte cette offrande de trois chasseurs; mais il ne subsiste, des trois distiques que comportait l'inscription, que cinq lettres diss\xe9min\xe9es et les six premi\xe8res du v. 6; et il a fallu toute la perspicacit\xe9 de Dilthey pour y reconna\xeetre des fragments de notre \xe9pigramme. \\n-P. Waltz \"],\n   'language': ['fra']}],\n 'external_references': [],\n 'internal_references': [{'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.11/',\n   'reference_type': 'Default'},\n  {'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.14/',\n   'reference_type': 'Default'},\n  {'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.179/',\n   'reference_type': 'Default'},\n  {'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.186/',\n   'reference_type': 'Default'},\n  {'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.187/',\n   'reference_type': 'Default'}],\n 'media': []}\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ep12_132a = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.132a').json()\n\nep12_132a\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Results"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{'id': 3199,\n 'book': {'url': 'https://anthologiagraeca.org/api/books/8/', 'number': 12},\n 'fragment': 132,\n 'sub_fragment': 'a',\n 'urn': 'urn:cts:greekLit:tlg7000.tlg001.ag:12.132a',\n 'url': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.132a/',\n 'web_url': '/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.132a/',\n 'manuscripts': ['http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A589.jpg/pct:11.78916,41.5646,60.6891,16.87853/full/0/default.jpg'],\n 'texts': [{'url': 'https://anthologiagraeca.org/api/texts/6328/',\n   'language': 'grc',\n   'text': '\u1f06 \u03c8\u03c5\u03c7\u1f74 \u03b2\u03b1\u03c1\u03cd\u03bc\u03bf\u03c7\u03b8\u03b5, \u03c3\u1f7a \u03b4\u1fbd \u1f04\u03c1\u03c4\u03b9 \u03bc\u1f72\u03bd \u1f10\u03ba \u03c0\u03c5\u03c1\u1f78\u03c2 \u03b1\u1f34\u03b8\u1fc3,\\n \u1f04\u03c1\u03c4\u03b9 \u03b4\u1fbd \u1f00\u03bd\u03b1\u03c8\u03cd\u03c7\u03b5\u03b9\u03c2, \u03c0\u03bd\u03b5\u1fe6\u03bc\u1fbd \u1f00\u03bd\u03b1\u03bb\u03b5\u03be\u03b1\u03bc\u03ad\u03bd\u03b7.\\n\u03c4\u03af \u03ba\u03bb\u03b1\u03af\u03b5\u03b9\u03c2; \u03c4\u1f78\u03bd \u1f04\u03c4\u03b5\u03b3\u03ba\u03c4\u03bf\u03bd \u1f45\u03c4\u1fbd \u1f10\u03bd \u03ba\u03cc\u03bb\u03c0\u03bf\u03b9\u03c3\u03b9\u03bd \u1f1c\u03c1\u03c9\u03c4\u03b1\\n \u1f14\u03c4\u03c1\u03b5\u03c6\u03b5\u03c2, \u03bf\u1f50\u03ba \u1f94\u03b4\u03b5\u03b9\u03c2 \u1f61\u03c2 \u1f10\u03c0\u1f76 \u03c3\u03bf\u1f76 \u03c4\u03c1\u03ad\u03c6\u03b5\u03c4\u03bf;\\n\\n                  \u03bf\u1f50\u03ba \u1f94\u03b4\u03b5\u03b9\u03c2; \u03bd\u1fe6\u03bd \u03b3\u03bd\u1ff6\u03b8\u03b9 \u03ba\u03b1\u03bb\u1ff6\u03bd \u1f04\u03bb\u03bb\u03b1\u03b3\u03bc\u03b1 \u03c4\u03c1\u03bf\u03c6\u03b5\u03af\u03c9\u03bd,\\n\u03c0\u1fe6\u03c1 \u1f05\u03bc\u03b1 \u03ba\u03b1\u1f76 \u03c8\u03c5\u03c7\u03c1\u1f70\u03bd \u03b4\u03b5\u03be\u03b1\u03bc\u03ad\u03bd\u03b7 \u03c7\u03b9\u03cc\u03bd\u03b1.\\n \u03b1\u1f50\u03c4\u1f74 \u03c4\u03b1\u1fe6\u03b8\u1fbd \u03b5\u1f35\u03bb\u03bf\u03c5: \u03c6\u03ad\u03c1\u03b5 \u03c4\u1f78\u03bd \u03c0\u03cc\u03bd\u03bf\u03bd. \u1f04\u03be\u03b9\u03b1 \u03c0\u03ac\u03c3\u03c7\u03b5\u03b9\u03c2\\n\u1f67\u03bd \u1f14\u03b4\u03c1\u03b1\u03c2, \u1f40\u03c0\u03c4\u1ff7 \u03ba\u03b1\u03b9\u03bf\u03bc\u03ad\u03bd\u03b7 \u03bc\u03ad\u03bb\u03b9\u03c4\u03b9.'},\n  {'url': 'https://anthologiagraeca.org/api/texts/11852/',\n   'language': 'eng',\n   'text': 'O sore-afflicted soul, now thou bumest in the fire and now thou revivest, recovering thy breath. Why dost thou weep? When thou didst nurse merciless Love in thy bosom knewest thou not that he was being nursed for thy bane ? Didst thou not know it ? Now learn to know the pay of thy good nursing, receiving from him fire and cold snow therewith. Thyself thou hast chosen this ; bear the pain. Thou sufferest the due guerdon of what thou hast done, burnt by his boiling honey.'},\n  {'url': 'https://anthologiagraeca.org/api/texts/11856/',\n   'language': 'fra',\n   'text': 'Oh\\xa0! mon \xe2me accabl\xe9e de souffrances, tant\xf4t c\u2019est le feu qui te br\xfble, tant\xf4t tu reprends vie en retrouvant le souffle\\xa0! Tu pleures\\xa0? Lorsque dans ton sein tu nourrissais l\u2019impitoyable Amour, ne savais-tu pas que c\u2019\xe9tait contre toi que tu le nourrissais\\xa0? Tu ne le savais pas\\xa0? Vois maintenant le salaire de tes bons soins\\xa0: tu re\xe7ois tout ensemble feu et neige glac\xe9e\\xa0! C\u2019est toi, toi qu\u2019il l\u2019a choisi\\xa0! Supporte ta douleur\\xa0! Juste souffrance de tes actes, la br\xfblure du miel ardent\\xa0!'}],\n 'authors': [{'url': 'https://anthologiagraeca.org/api/authors/2/',\n   'tlg_id': 'tlg-1492',\n   'names': [{'name': '\u039c\u03b5\u03bb\u03ad\u03b1\u03b3\u03c1\u03bf\u03c2', 'language': 'grc'},\n    {'name': 'Meleager', 'language': 'eng'},\n    {'name': 'M\xe9l\xe9agre', 'language': 'fra'}]}],\n 'cities': [],\n 'keywords': [{'url': 'https://anthologiagraeca.org/api/keywords/1/',\n   'names': [{'name': 'distique \xe9l\xe9giaque', 'language': 'fra'},\n    {'name': 'distico elegiaco', 'language': 'ita'},\n    {'name': 'Elegiac couplet', 'language': 'eng'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/1/',\n    'names': [{'name': 'Formes m\xe9triques', 'language': 'fra'},\n     {'name': 'Metric forms', 'language': 'eng'},\n     {'name': 'Metra', 'language': 'lat'},\n     {'name': 'Forme metriche', 'language': 'ita'},\n     {'name': 'Formas m\xe9tricas', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/3/',\n   'names': [{'name': 'erotic', 'language': 'eng'},\n    {'name': '\xe9rotic', 'language': 'fra'},\n    {'name': 'erotico', 'language': 'ita'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/3/',\n    'names': [{'name': 'Genres', 'language': 'fra'},\n     {'name': 'Genres', 'language': 'eng'},\n     {'name': 'Genera', 'language': 'lat'},\n     {'name': 'Generi', 'language': 'ita'},\n     {'name': 'G\xeaneros', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/4/',\n   'names': [{'name': '\xe9poque hell\xe9nistique', 'language': 'fra'},\n    {'name': 'epoca ellenistica', 'language': 'ita'},\n    {'name': 'hellenistic period', 'language': 'eng'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/4/',\n    'names': [{'name': '\xc9poques', 'language': 'fra'},\n     {'name': 'Periods', 'language': 'eng'},\n     {'name': 'Tempora', 'language': 'lat'},\n     {'name': 'Periodi', 'language': 'ita'},\n     {'name': '\xc9pocas', 'language': 'por'}]}},\n  {'url': 'https://anthologiagraeca.org/api/keywords/181/',\n   'names': [{'name': 'Couronne de M\xe9l\xe9agre', 'language': 'fra'}],\n   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/14/',\n    'names': [{'name': 'Collections', 'language': 'fra'},\n     {'name': 'Collections', 'language': 'eng'},\n     {'name': 'Collecteana', 'language': 'lat'},\n     {'name': 'Collezioni', 'language': 'ita'},\n     {'name': 'Cole\xe7\xf5es', 'language': 'por'}]}}],\n 'scholia': [],\n 'comments': [],\n 'external_references': [],\n 'internal_references': [],\n 'media': []}\n")))),(0,r.kt)("p",null,"The epigram's number is in the key ",(0,r.kt)("inlineCode",{parentName:"p"},"fragment")," and the letter (when it has one) in the key ",(0,r.kt)("inlineCode",{parentName:"p"},"sub_fragment"),"."))}p.isMDXComponent=!0}}]);