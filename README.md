# Next.js 15 App Directory: Unexpected Behavior with Dynamic Routes and Error Boundaries

This repository demonstrates an unexpected behavior in Next.js 15's App Directory when using dynamic routes in conjunction with error boundaries.  The issue involves a scenario where a dynamic route might throw an error, and the error boundary's functionality doesn't behave as expected.

## Description

The problem is related to how error boundaries handle errors during data fetching or route transitions within the App Directory. In certain situations, even with a properly placed error boundary, the error might not be caught or might result in unexpected rendering behavior.

## Reproduction

The `pages/index.js` demonstrates an error when loading the page. The solution, in `app/page.js`, demonstrates the usage of error boundaries and demonstrates the fix.