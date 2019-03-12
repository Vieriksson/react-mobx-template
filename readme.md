### React template
Template with react, react router and mobx-react-lite. Short descriptions about the tools can be found below. 

#### Install

- [Install Node](https://nodejs.org/en/download/)
- [Install Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)
- [Install VS Code](https://code.visualstudio.com/download)

##### Install packages

Run `yarn`

##### VS Code plugins

Install by pressing `ctrl+p` and paste `ext install` + the name of the plugin. You can also use the left menu to find the plugin.

A couple of useful Visual Studio Code plugins.

- ESLint: `dbaeumer.vscode-eslint`
- vscode-styled-component: `ext install jpoissonnier.vscode-styled-components`
- vscode-icons: `ext install robertohuertasm.vscode-icons`
- Prettier - Code formatter: `ext install esbenp.prettier-vscode`
- Auto Rename Tag: `ext install formulahendry.auto-rename-tag`

#### Start the dev environment

`yarn dev`

#### Build

`yarn build`

### Tooling

#### Yarn

Yarn is the package manager. It is, according to me, npm on steroids.

#### Babel

The transpiler that let us use typescript and the latest features of javascript.

_Specify the transpling process using .babelrc_

[Playground](https://babeljs.io/repl)

#### Webpack

Webpack is the build tool. It lets us automate the babel flow as well as providing us with a development server.

_Specify the build process using the webpack.conf.js-files_

[More info](https://webpack.js.org/)

#### Typescript

Adds typings to javascript which lets us speed up the development process and find bugs during compile time instead of run time.

_Specify your typescript rules in tsconfig.json_

_If you find yourself using a npm package without typing, a package probably exist with the name: @types/namn-of-the-package_

[Playground](https://www.typescriptlang.org/play/)

#### Prettier

Code formatter

To enable prettier, you need the VS Code-plugin: Prettier - Code Formatter.

_Specify the formatting rules in .prettierrc_

### Testing

#### Jest

Jest is a tool for running tests and asserting outputs. 

_Run tests with `yarn test` or `yarn test --watch`_

[More info](https://jestjs.io/)

#### React Testing Library

To interact with the DOM during tests, react testing library is a good tool. It lets you trigger actions as well as asserting that the right values are rendered to the DOM.

[More info](https://github.com/kentcdodds/react-testing-library)
