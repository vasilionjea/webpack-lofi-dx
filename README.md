# webpack-lofi-dx
[![Build Status](https://github.com/vasilionjea/webpack-frontend-template/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/vasilionjea/webpack-frontend-template/actions/workflows/unit-tests.yml)

An example repo that consumes the `lofi-dx` package in a Webpack/TS project: https://www.npmjs.com/package/lofi-dx

#### Typescript
Webpack's `ts-loader` uses `tsc`, the TypeScript compiler, and relies on your `tsconfig.json` configuration to compile _.ts_ files to **es2015**.

#### Sass
Transforms Sass to CSS.

#### ESLint & Prettier
ESLint relies on your `.eslintrc.cjs` config to lint _.ts_ files, and uses the recommended rules. Prettier formats your code and relies on its defaults and the `.prettierrc` file.

#### Jest
Jest is a JavaScript Testing Framework and works with Typescript. Tests are written under the `test` directory.

## Environments
You must have NodeJS already installed on your machine, then run `npm install` before running any other commands.

### Dev
* `npm run start` to start the webpack development server with live reload. Opens your browser & points it at http://localhost:3000
* `npm run lint` to lint your code with ESLint.
* `npm run format` to format your code with Prettier.
* `npm run test` to run tests in watch mode, or `npm run test:ci` to run tests once.

### Prod
1. Run `npm run build` to build project.
2. Then deploy the generated `dist/` directory.
