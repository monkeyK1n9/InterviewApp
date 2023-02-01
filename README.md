# INTERVIEW K-TRONIK

This is the react native project for K-tronik interview. It is built with expo react native (expo.dev).

| Login Screen                                           | Home Screen                                           |
| ------------------------------------------------------ | ----------------------------------------------------- |
| ![Login](https://user-images.githubusercontent.com/91855362/216076363-d60d0a25-11ef-4187-87d9-bf3b00d81267.png) | ![Home](https://user-images.githubusercontent.com/91855362/216076462-aa9cf218-3eff-4cfd-88b8-88d0de73c1d2.png) |

## Introduction

To get started, make sure to install:

- Android studio, if you want to have an android emulator installed
- Xcode, for iOS

## Setup

You can download the zip, or clone, then run:

```
yarn install
```

This will install the necessary packages. The project is built on top of expo SDK 47.
To start the server and visualise on an emulator, run:

```
npx expo start
```

Now you are good to go.

## Connecting to the database

To connect your app to the database, make sure you have a .env file in your project.
If you don't have a .env file, create one, and provide the required parameters. You can have a look at the model of the ![.env.example]("./env.example")

```js
FIREBASE_APIKEY =
FIREBASE_AUTHDOMAIN =
FIREBASE_PROJECTID =
FIREBASE_STORAGEBUCKET =
FIREBASE_MESSAGINGSENDERID =
FIREBASE_APPID =
```

## Spin the server

You will need to spin the server locally. To achieve this, you will need run:

```js
yarn start
```

Now you have connected the backend (firebase) and the frontend.

# Contributions

Don't hesitate to do a pull request or fire an issue if you see any.

This project is built with ❤️
