# Project image convention

Create one folder per project slug, then add approved images to that folder:

`/public/images/projects/secondary-school-cbt-deployment/`

Reference each file in the project entry in `src/components/portfolio/portfolioData.js`:

```js
gallery: [
  {
    src: '/images/projects/secondary-school-cbt-deployment/lab-overview.jpg',
    alt: 'Approved description of the CBT laboratory installation',
    caption: 'Optional context for the photograph.',
  },
],
```

The first image can also be assigned to `heroImage`. Keep all alt text specific
to what is visible, and publish only customer-approved photographs and details.
