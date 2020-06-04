# Eleventy starter 1.0

A simple starter for [Eleventy](11ty.io) static site generator by [Harry Cresswell](https://harrycresswell.com/).

## Features

- Eleventy
- NPM build Scripts
- SCSS support
- Nunjucks templating

## Prerequisites

You will need the latest versions of  [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed on your machine.

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
npm build
```

This will clean the `._site` directory and rebuild it ready for deployment.

## Basic concepts

Write your `scss` in `.src/scss`. 

With a local server running `onchange` will watch for any changes you make to your `scss` files and compile them to `.src/site/_includes/css/main.css`. Eleventy handles live reloading, so no need for browser sync. 

Create new partials and templates in `.src/site/_includes`.





