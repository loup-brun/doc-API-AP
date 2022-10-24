import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/doc-API-AP/blog',
    component: ComponentCreator('/doc-API-AP/blog', '9de'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/archive',
    component: ComponentCreator('/doc-API-AP/blog/archive', 'ee4'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/first-blog-post',
    component: ComponentCreator('/doc-API-AP/blog/first-blog-post', '84c'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/long-blog-post',
    component: ComponentCreator('/doc-API-AP/blog/long-blog-post', 'b45'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/mdx-blog-post',
    component: ComponentCreator('/doc-API-AP/blog/mdx-blog-post', 'c89'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/tags',
    component: ComponentCreator('/doc-API-AP/blog/tags', 'b8c'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/tags/docusaurus',
    component: ComponentCreator('/doc-API-AP/blog/tags/docusaurus', '337'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/tags/facebook',
    component: ComponentCreator('/doc-API-AP/blog/tags/facebook', '3ad'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/tags/hello',
    component: ComponentCreator('/doc-API-AP/blog/tags/hello', '846'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/tags/hola',
    component: ComponentCreator('/doc-API-AP/blog/tags/hola', 'f23'),
    exact: true
  },
  {
    path: '/doc-API-AP/blog/welcome',
    component: ComponentCreator('/doc-API-AP/blog/welcome', '332'),
    exact: true
  },
  {
    path: '/doc-API-AP/markdown-page',
    component: ComponentCreator('/doc-API-AP/markdown-page', '996'),
    exact: true
  },
  {
    path: '/doc-API-AP/docs',
    component: ComponentCreator('/doc-API-AP/docs', '2fc'),
    routes: [
      {
        path: '/doc-API-AP/docs/category/documentation',
        component: ComponentCreator('/doc-API-AP/docs/category/documentation', '1ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/access-the-api',
        component: ComponentCreator('/doc-API-AP/docs/documentation/access-the-api', '614'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/authors',
        component: ComponentCreator('/doc-API-AP/docs/documentation/authors', '5fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/cities',
        component: ComponentCreator('/doc-API-AP/docs/documentation/cities', '395'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/comments',
        component: ComponentCreator('/doc-API-AP/docs/documentation/comments', 'eeb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/data-about-epigrams',
        component: ComponentCreator('/doc-API-AP/docs/documentation/data-about-epigrams', '1ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/external-references',
        component: ComponentCreator('/doc-API-AP/docs/documentation/external-references', '86d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/images-of-the-manuscrit',
        component: ComponentCreator('/doc-API-AP/docs/documentation/images-of-the-manuscrit', 'e2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/internal-references',
        component: ComponentCreator('/doc-API-AP/docs/documentation/internal-references', 'a91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/keywords',
        component: ComponentCreator('/doc-API-AP/docs/documentation/keywords', 'd76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/manuscrit-annotation',
        component: ComponentCreator('/doc-API-AP/docs/documentation/manuscrit-annotation', '4bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/pagination',
        component: ComponentCreator('/doc-API-AP/docs/documentation/pagination', 'f02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/scholia',
        component: ComponentCreator('/doc-API-AP/docs/documentation/scholia', 'f02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/texts',
        component: ComponentCreator('/doc-API-AP/docs/documentation/texts', 'd6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/the-endpoint-passages',
        component: ComponentCreator('/doc-API-AP/docs/documentation/the-endpoint-passages', '2f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/documentation/wikidata',
        component: ComponentCreator('/doc-API-AP/docs/documentation/wikidata', '1d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doc-API-AP/docs/intro',
        component: ComponentCreator('/doc-API-AP/docs/intro', '544'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/doc-API-AP/',
    component: ComponentCreator('/doc-API-AP/', '643'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
