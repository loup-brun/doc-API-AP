import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '3f6'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3d0'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '4be'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'd88'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c0d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'ded'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'eba'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b35'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '52c'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '654'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'cd6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '989'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ca4'),
    routes: [
      {
        path: '/docs/category/documentation',
        component: ComponentCreator('/docs/category/documentation', '058'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/access-the-api',
        component: ComponentCreator('/docs/documentation/access-the-api', 'c4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/authors',
        component: ComponentCreator('/docs/documentation/authors', '2d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/cities',
        component: ComponentCreator('/docs/documentation/cities', 'b1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/comments',
        component: ComponentCreator('/docs/documentation/comments', '68c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/data-about-epigrams',
        component: ComponentCreator('/docs/documentation/data-about-epigrams', '71a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/external-references',
        component: ComponentCreator('/docs/documentation/external-references', '145'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/images-of-the-manuscrit',
        component: ComponentCreator('/docs/documentation/images-of-the-manuscrit', '5c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/internal-references',
        component: ComponentCreator('/docs/documentation/internal-references', 'c4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/keywords',
        component: ComponentCreator('/docs/documentation/keywords', '4fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/manuscrit-annotation',
        component: ComponentCreator('/docs/documentation/manuscrit-annotation', '8fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/pagination',
        component: ComponentCreator('/docs/documentation/pagination', '697'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/scholia',
        component: ComponentCreator('/docs/documentation/scholia', '1be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/texts',
        component: ComponentCreator('/docs/documentation/texts', '2a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/the-endpoint-passages',
        component: ComponentCreator('/docs/documentation/the-endpoint-passages', '7fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/documentation/wikidata',
        component: ComponentCreator('/docs/documentation/wikidata', '46c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cee'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
