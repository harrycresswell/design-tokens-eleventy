# Design tokens and styleguides with Eleventy

A simple workflow showing you how to use [Eleventy](11ty.dev) and NPM Scripts to take YAML design tokens and generate a styleguide and CSS Custom properties.

## Features

- Eleventy
- NPM build Scripts
- Design tokens
- YAML to JSON
- JSON to SCSS
- Nunjucks templating
- Styleguide example

## Prerequisites

You will need the latest versions of [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed on your machine.

## Installation

Clone this repository and install the required dependencies:

```
npm install
```

## Local development

To start a local development server run:

```
npm start
```

Now you can preview the project by visiting `http://localhost:8080` in the browser.

## Production build

To build a production ready website to `._site` run:

```
npm run build
```

This will clean the `._site` directory and rebuild it ready for deployment.

## Basic concepts

Write your `scss` in `.src/scss`.

With a local server running `onchange` will watch for any changes you make to your `scss` files and compile them to `.src/site/_includes/css/main.css`. Eleventy handles live reloading, so no need for browser sync.

Create new partials and templates in `.src/site/_includes`.

If you make changes to your design tokens make sure you stop the local server (ctrl+c) then re-run the development server eith `npm start`. This will run the necessary scripts and propergate the changes.

For more infomation on this workflow read [Design tokens and styleguides with Eleventy](https://harrycresswell.com/articles/design-tokens-styleguides-eleventy/).

## Author

- [Harry Cresswell](https://harrycresswell.com/).
