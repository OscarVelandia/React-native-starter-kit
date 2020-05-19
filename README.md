## Expo React-native starter

This config takes as base the the bare workflow from template from [create react native app with typescript](https://github.com/expo/create-react-native-app) but have some differences like:

* Typescript is on 3.9.2 version
* React-navigation
* Use *husky* for git hooks with *pretty-quick* and *lint-staged*
* Prettier config
* The *tsconfig.json* has all options (as it comes by default) with path configuration to use with the import-resolver eslint plugin and configuration set in the `.eslintrc` file
* ESLint has a base configuration with:
  *  prettier
  *  react-hooks
  *  react-native
  *  react-native-a11y
  *  config-universe
  *  import-resolver
* And a opinionated folder structure in *src* folder
```bash
src
├── assets
├── components
├── navigations
├── styles
└── utils
```