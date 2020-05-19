## Expo React-native starter

This config takes as base the bare expo typescript template from [create react native app](https://github.com/expo/create-react-native-app), but has some differences like:

* Typescript is on 3.9.2 version
* Was added React-navigation
* Was configured *husky* for git hooks with *pretty-quick* and *lint-staged*
* Prettier has a base configuration
* The *tsconfig.json* has all options (as it comes by default) with path configuration to use with the import-resolver eslint plugin and configuration set in the `.eslintrc` file
* ESLint has a base configuration with:
  *  prettier
  *  react-hooks
  *  react-native
  *  react-native-a11y
  *  config-universe
  *  import-resolver
* A opinionated folder structure in *src* folder
```bash
src
├── assets
├── components
├── navigations
├── styles
└── utils
```