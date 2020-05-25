# Expo React-native starter

This config takes as base the **Expo managed workflow** template typescript template from [create react native app](https://github.com/expo/create-react-native-app), but has some differences like:

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
├── screens
├── styles
└── utils
```

## How to run the project
* With `yarn start` you init the expo server, and the expo dev tools will be open in the browser in `http://localhost:19002/`

## Opening the project
You can open the project on Android studio emulator or in your phone:

### Open in android studio emulator
* In the **dev tools** you will find a button with the text **Run on Android device/emulator** if you click on it, the android emulator will be open.

### Open the project in your phone
1. Install the (expo app)[https://play.google.com/store/apps/details?id=host.exp.exponent] from the google app store
2. In the **dev tools** you will find a *QR code*, scan it with the cellphone.
3. The app will be running in your cellphone.
