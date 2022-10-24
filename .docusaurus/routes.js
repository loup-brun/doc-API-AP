import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog', '14c'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/archive',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/archive', '397'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/first-blog-post',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/first-blog-post', 'c06'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/long-blog-post',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/long-blog-post', '450'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/mdx-blog-post',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/mdx-blog-post', '1d9'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/tags',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/tags', 'd2e'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/tags/docusaurus',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/tags/docusaurus', 'c45'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/tags/facebook',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/tags/facebook', '616'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/tags/hello',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/tags/hello', '8b5'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/tags/hola',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/tags/hola', '570'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/blog/welcome',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/blog/welcome', '220'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/markdown-page',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/markdown-page', 'c36'),
    exact: true
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/docs',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs', '3bc'),
    routes: [
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/category/documentation',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/category/documentation', '70a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/access-the-api',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/access-the-api', '233'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/authors',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/authors', 'fa7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/cities',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/cities', '77e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/comments',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/comments', '03f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/data-about-epigrams',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/data-about-epigrams', '3c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/external-references',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/external-references', 'b54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/images-of-the-manuscrit',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/images-of-the-manuscrit', '36d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/internal-references',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/internal-references', '9ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/keywords',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/keywords', '151'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/manuscrit-annotation',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/manuscrit-annotation', '30c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/pagination',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/pagination', 'e19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/scholia',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/scholia', '28f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/texts',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/texts', 'a71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/the-endpoint-passages',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/the-endpoint-passages', '13b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/documentation/wikidata',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/documentation/wikidata', '816'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://rochdly.github.io/doc-API-AP/docs/intro',
        component: ComponentCreator('https://rochdly.github.io/doc-API-AP/docs/intro', '966'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: 'https://rochdly.github.io/doc-API-AP/',
    component: ComponentCreator('https://rochdly.github.io/doc-API-AP/', '79b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
