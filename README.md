# The Project

## What is inside?

This project uses lot of stuff as:

-   [monorepo yarn workspaces](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [React with CRA](https://reactjs.org/)
-   [Styled Components](https://styled-components.com/)
-   [Jest](https://jestjs.io/)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
-   [Storybook](https://storybook.js.org/)
-   [Eslint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [PlopJS](https://plopjs.com/)
-   [react-icons](https://react-icons.github.io/)
-   [react-toastify](https://www.npmjs.com/package/react-toastify)
-   [axios](https://axios-http.com/)
-   [miragejs](https://miragejs.com/)

## Architecture

```
├── packages
|   |-- core                    (Global Library)
|       |-- assets              (Files imgs/svgs/etc..)
|       |-- context             (Context React/React Native)
|       |-- helpers             (Short Code helper)
|       |-- hooks               (Simples hooks)
|       |-- services            (Api/Request/Response services)
|       |-- utils               (support functions)
|       |-- jest.config.js      (config tests)
|       |-- tsconfig            (config typescript)
|   |-- server                  (Development server MirageJS)
|   |-- web                     (Web Page Site Browser)
|       |-- .storybook          (configs storybook)
|       |-- genarators          (config/template plopjs)
|       |-- public              (public web)
|       |-- src                 (source files)
|           |-- @types          (typing global set)
|           |-- components      (react components commons)
|           |-- pages           (router page)
|           |-- templates       (templates global)
|           |-- App.tsx         (Initial Component with Providers configs)
|           |-- index.tsx       (initial call with config local server)
|           |-- Router.tsx      (Routers configs)
|           |-- jest.config.js  (config tests)
|           |-- tsconfig        (config typescript)
```

## Getting Started

First, run the development server:

```bash
yarn web
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

-   `web`: runs your application on `localhost:3000`
-   `test`: runs jest to test all components packages
-   `test:watch`: runs jest to test all components packages watch
-   `test:web`: runs jest in packages/web
-   `test:core`: runs jest in packages/core
-   `coverage`: runs jest to coverage all packages
-   `storybook:web`: runs storybook on `localhost:6006`
-   `generate:web`: generate template components ex: `yarn generate [type component/templates] [name component]`
