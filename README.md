# Amplify Studio / Figma / Clojurescript / Reagent Tutorial

_NOTE: THIS IS STILL UNDERCONSTRUCTION AND THESE INSTRUCTIONS ARE NOT UP TO DATE_ 01/01/2022

Implements the AWS Tutorial [Build a Vacation Rental Site with Amplify Studio](https://welearncode.com/studio-vacation-site/) but instead of being Javascript based, uses Clojurescript for the project implementation. It does incorporate the Javascript output of Amplify Studio but all code to use it is in Clojurescript.

### Tooling Used in the project:

- [Create Reagent App](https://github.com/AutoScreencast/create-reagent-app) to create the project scaffold
- [Clojurescript](https://clojurescript.org) (The whole point of this article!)
- [Shadow-CLJS](http://shadow-cljs.org/) as the build tool / compiler
- [Webpack](https://webpack.js.org) Key to preping JSX and JS Files from Amplify Studio and UI Components to be used with shadlow-cljs transpiled clojurescript.
- [Babel](https://babeljs.io) Used by webpack to convert JSX to JS
- [Reagent](https://github.com/reagent-project/reagent) (CLJS wrapper around [React](https://reactjs.org/)) for building your user interface
- [Amplify Studio](https://aws.amazon.com/amplify/studio/) and all the related [AWS Amplify tooling](https://aws.amazon.com/amplify/)
- [Figma AWS Amplify UI Kit](https://www.figma.com/community/file/1047600760128127424)

## Prerequisites

### Setup an Amplify Studio Project

All the initial setup of the Amplify Studio Project on AWS and the associated Figma project is already described in the first part of the [Build a Vacation Rental Site with Amplify Studio](https://welearncode.com/studio-vacation-site/) so will not repeat it here.

That first part of the article will have you do all the following in the appropriate Web Consoles and services AWS and Figma). You won't be doing any CLI commands on your local dev computer:

- Setup an Amplify Studio project via the Amplify Sandbox
- Create a basic data model in Amplify Studio
- Deploy the start of the Amplify project to AWS
- Create some sample data
- Set up a Figma project using the Amplify UI Components and shows you how to modify it
- Import the modified Figma project into the Amplify project
- Link the data model and the UI Component in Amplify Studio
- Create a collection view using Amplify Studio

**Start by following the instructions from the original article, [Build a Vacation Rental Site with Amplify Studio](https://welearncode.com/studio-vacation-site/), up thru to the section: `Pull to Studio`**

## Creating an Amplify Studio App with Clojurescript

This is the actual instructions on how to create your Amplify Studio app in Clojurescript instead of Javascript. It replaces the remainder all the content after `Pull to Studio` from the original article [Build a Vacation Rental Site with Amplify Studio](https://welearncode.com/studio-vacation-site/).

### Create a git repo with shadow-cljs / reagent scaffolding

Instead of using `create-react-app` that would have created a Javascript/React app, we’re going to use [create-reagent-app](https://www.npmjs.com/package/create-reagent-app) to create the scaffolding of a shadow-cljs / reagent / react app repo.

In this tutorial, we will make this a git repo and snapshot the state at every stage so that if you make a mistake you can go back to an earlier step.

```
npx create-reagent-app  amplifystudio-cljs-tutorial
cd amplifystudio-cljs-tutorial
git init
git add -A
git commit -m "Initial Commit after create-reagent-app"
npm-install
```

### Add webpack and related dependencies

Shadow-cljs can not directly consume JSX files that are the output of the Figma plugin and it needs some help to pull in the AWS UI Components files that Amplify Studio injects into the project.

The use of Babel to prepare JSX files for Shadow-cljs is based on info from [Shadow CLJS User’s Guide - JavaScript Dialects](https://shadow-cljs.github.io/docs/UsersGuide.html#_javascript_dialects). This tutorial moves the babel managment into webpack as described later on.

The following dependencies are needed primarily to install webpack and its dependencies.
`html-webpack-plugin` and `html-beautifier-webpack-plugin` are used to inject the proper JS include for the output of webpack into the index.html.

```bash
npm i -D @babel/cli @babel/core @babel/preset-react @babel/preset-env babel-loader html-webpack-plugin html-beautifier-webpack-plugin process webpack webpack-cli
```

Then update any dependencies to the latest versions
If you don’t already have it, install [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

```
npm install -g npm-check-updates
```

And then run it to update any dependencies to the latest versions ignoring specified versions in the package.json.

I like to start projects with the latest versions of everything. But you could just make sure `shadow-cljs` is the latest version, best to stay latest with that.

If you run it without the `-u` it will just show you what it would update and you could manually update the ones you care about.

```bash
ncu -u
npm install
```

### Update your local git repo

```bash
git add -A
git commit -m "Snapshot after adding webpack dependencies"
```

If you want, you could push it to your own remote Github or other repository

### Add AWS Dependencies

- AWS Account
  - If you don’t already have an AWS account, you’ll need to create one in order to follow the steps outlined in this tutorial. [Create an AWS Account](https://portal.aws.amazon.com/billing/signup?redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start)
- Amplify CLI
  If you don’t already have the Amplify CLI installed you can install it with

```bash
npm install -g @aws-amplify/cli
```

- Configure Account / IAM / CLI to work with Amplify
  If you already have an AWS account you want to use and you have things setup in your workstation / Terminal to use AWS CLI via profiles in ~/.aws/credentials, you can just set your profile in your terminal for the profile to use

```bash
export AWS_PROFILE=<your profile>
```

and you don’t need to do `amplify configure`.

If you haven’t set up aws amplify on your local dev machine before, follow the instructions at [Configure the Amplify CLI](https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli)

### Install the was-amplify libraries in your project

Still at the top of the `amplifystudio-cljs-tutorial` repo, install the libraries

```bash
npm i aws-amplify @aws-amplify/ui-react
```

You might want to commit the changes to git just as a snapshot in case the next step messes anything up.

```bash
git commit -a -m "After adding amplify deps"
```

### Sync repo with Amplify project

Using the amplify CLI, pull the project info and ui-components into your repo.

You’ll get the command to do this from your Amplify Apps page that was created earlier.
![](images/AWS_Amplify_Console%202.png)

If you are using an AWS account via IAM, you should log in to your AWS Console on your default browser. The following command is going to open up your default browser to authenticate to AWS.

If you are not using AWS IAM for auth, but are using the Amplify Console that has its own username/password style login, you don’t need to do anything in advance.

**DON’T TYPE THIS EXACT LINE**
Use the line from your environment as it has the appID for your application
The following line is just an example

```bash
amplify pull --appId dgt42342sdv765la --envName staging
```

This will eventually open a browser page to authenticate the process. As mentioned earlier, if you are using IAM for access, its easiest if you logged into the AWS Console with your browser first. If you forget to do this, you can still login now, and copy and past the link shown in the output of the CLI command and it will retry authenticating.

If you are using the Amplify Studio username/password, you will get that dialog on the browser and you can fill it in and click Yes

![](images/Amplify_Studio%205.png)

It will then prompt you for a bunch of things to set up your amplify project in this repo

```
Opening link: https://us-west-2.admin.amplifyapp.com/admin/dgt42342sdv765la/staging/verify/
✔ Successfully received Amplify Studio tokens.
Amplify AppID found: dgtkqevv765la. Amplify App name is: rental-cljs
Backend environment staging found in Amplify Console app: rental-cljs
? Choose your default editor:
  Android Studio
  Xcode (Mac OS only)
  Atom Editor
  Sublime Text
  IntelliJ IDEA
  Vim (via Terminal, Mac OS only)
❯ Emacs (via Terminal, Mac OS only)
(Move up and down to reveal more choices)
```

Of course the only choice that makes sense is Emacs 🤓
(Note even though it says via terminal, it works fine with GUI Emacs)

```
? Choose the type of app that you're building (Use arrow keys)
  android
  flutter
  ios
❯ javascript
```

Keep javascript

```
? What javascript framework are you using (Use arrow keys)
  angular
  ember
  ionic
❯ react
  react-native
  vue
  none
```

Keep react

```
? Source Directory Path:  src/amplify
? Distribution Directory Path: public
? Build Command:  npm run-script build
? Start Command: npm run-script start
```

Enter `src/amplify`for `Source Directory Path`
Enter `public` for `Distribution Directory Path`
This build puts everything in `public` but other scaffolding or cljs projects may use some other path. It should be the same as the directory above `js` in the `output-dir` parameter in `shadow-cljs.edn`

You can keep the defaults for `Build Command` and `Start Command`

The rest of the config inputs and outputs:

```
✔ Synced UI components.
GraphQL schema compiled successfully.

Edit your schema at /Users/rberger/work/aws/amplifystudio-cljs-tutorial/amplify/backend/api/rentalcljs/schema.graphql or place .graphql files in a directory at /Users/rberger/work/aws/amplifystudio-cljs-tutorial/amplify/backend/api/rentalcljs/schema
Successfully generated models. Generated models can be found in /Users/rberger/work/aws/amplifystudio-cljs-tutorial/src/main
? Do you plan on modifying this backend? (Y/n) Y
```

Say `Y` for `Do you plan on modifying this backend? `

You might want to checkpoint your git repo again after this.

```bash
git add -A
git commit -m "After pulling Amplify Studio project"
```

You can make sure the basic reagent setup is still working by doing:

```bash
npm start
```

The first time you run this, it will take a while to download all the Clojurescript / Clojure dependencies.

And see that the app is running at `http://localhost:3000`
You will just see `Create Reagent App` on the page as a header.

## Update to support mixing webpack with shadow-cljs

Based on David Vujic’s work [Agile & Coding: Hey Webpack, Hey ClojureScript](https://davidvujic.blogspot.com/2021/08/hey-webpack-hey-clojurescript.html) we’re going to add mechanisms to build the javascript code using webpack and the clojurescript code with shadow-cljs. This is necessary when using more recent versions of the AWS Amplify libraries.

Add the following lines to shadow-cljs.edn between the `:asset-path` and `:modules` stanzas in the `:app` section

```clojure
   :js-options {:js-provider    :external
                :external-index "target/index.js"}
```

### Update `index.html` to load the libs from both shadow and webpack

Edit `public/index.html` to change the line

```html
<script src="/js/main.js"></script>
```

To

```html
<script defer src="/js/libs/bundle.js"></script>
<script defer src="/js/main.js"></script>
```

## Update the scaffold code to support Amplify

### Add the dependencies

Edit `src/main/amplify_rental_reagent_app/app/core.cljs`
Add the aws imports to the require

```clojure
(ns amplifystudio-cljs-tutorial.app.core
  (:require [reagent.dom :as rdom]
            ["/aws-exports" :default ^js aws-exports]
            ["aws-amplify" :default Amplify]))
```

Create the file `.babelrc` in the top level of the repo with the content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Create a file `webpack.config.js` also at the top level of the repo with the content:

```javascript
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlBeautifierPlugin = require("html-beautifier-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./target/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/libs/bundle.js",
    clean: false,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // docs: https://webpack.js.org/configuration/module/#resolvefullyspecified
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
          alias: {
            models: "../src/amplify/models/index.js",
            "ui-components": "../src/amplify/ui-components",
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html.tmpl",
      filename: "index.html",
    }),
    new HtmlBeautifierPlugin(),
  ],
};
```

Add the following line to the `”scripts”` section of `package.json`

```json
    "pack": "webpack --watch"
```

And the following to the `:devDependencies section (Use the latest versions available)

```json
    "webpack": "5.65.0",
    "webpack-cli": "^4.9.1"
```

Then do

```bash
npm start
```

And in another terminal window, also at the top of the repo run:

```
npm run pack
```

---

## General instructions from Scaffolding

### 1. Install Dependencies

Note: This step creates a `node_modules` folder with all the dependencies in your project folder. You can use either `yarn` or `npm` as your package manager.

```
npm install
```

Note: Creates a `package-lock.json` file in your project folder.

### 2. Start the App

- First start the shadow-cljs processes to run the main clojurescript

```
npm start
```

- Then start the webpack watcher to update the javascript libraries

```bash
npm run pack
```

### 3. Open Your Browser

Then open http://localhost:3000/ in your browser to see your app.

---

## Available Scripts

### Start App

This will compile the app in development mode, and watch for any changes in your code.
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

```
npm start
```

This operation creates a `.shadow-cljs` folder in your project folder.

### Build Release Version of App

This compiles the app in production mode, using `:advanced` compilation settings. The finished build (under `public/js`) will be in the `public` folder, which can be deployed.

```
npm run build
```

This operation creates a `.shadow-cljs` folder in your project folder.

### Debug Release Version of App

Sometimes you may run into some release issues due to `:advanced` compilation. The following command may help you track down the causes:

```
npm run debug-build
```

### Show Detailed Build Report of Release Version of App

A detailed build report will be shown in your CLI, and a `report.html` file will be created in your project folder.

```
npm run report
```

### Serve Your App Build Locally

This will serve your finished build (from doing a production build via `yarn build` or `npm run build`, or from doing a development build via `yarn devbuild` or `npm run devbuild`) on [http://localhost:5000](http://localhost:5000) in your browser.

```
npm run serve
```

### Build Development Version of App

This compiles the app in developent mode once and then exits. The finished build will be in the `public` folder. This command does _not_ watch your code for changes (use `yarn start` or `npm start` to build the app in development mode _and_ watch for changes).

```
npm run dev-build
```

This operation creates a `.shadow-cljs` folder in your project folder.

### Connect to a Build-specific Browser REPL

From a different Terminal, connect to a browser REPL for your specific build (only available while `yarn start` or `npm start` is running, that is, Shadow-CLJS is “watching” your code for changes). Note also that your build must be running in the browser (`localhost:3000`).

See [this section](https://shadow-cljs.github.io/docs/UsersGuide.html#build-repl) of the Shadow-CLJS documentation for more details.

```
npm run repl
```

### Connect to a Blank Browser REPL

This starts a blank CLJS REPL and will open an associated browser window where the code will execute. It is not connected to any specific build target. Since it is not connected to any build it does not do any automatic rebuilding of code when your files change and does not provide hot-reload. If you close the browser window the REPL will stop working.

See [this section](https://shadow-cljs.github.io/docs/UsersGuide.html#browser-repl) of the Shadow-CLJS documentation for more details.

```
npm run browser-repl
```

### Connect to a Clojure REPL

A Clojure REPL is also provided in addition to the provided ClojureScript REPLs. This is can be used to control the shadow-cljs process and run all other build commands through it. You can start with a Clojure REPL and then upgrade it to a CLJS REPL at any point (and switch back).

See [this section](https://shadow-cljs.github.io/docs/UsersGuide.html#_clojure_repl) of the Shadow-CLJS documentation for more details.

```
npm run clojure-repl
```

### Compile tests and watch for changes

(Run in a separate Terminal.) This runs the tests and watches them for changes, re-running when a change is detected.

```
npm test
```

Note: Creates an `out` folder in your project folder, containing a `node-tests.js` file.

### Compile tests and run them once

(Run in a separate Terminal.) This runs the tests once and then exits. This command does _not_ watch your tests for changes (use `npm test` to run tests _and_ watch for changes).

```
npm run test-once
```

Note: Creates an `out` folder in your project folder.

### Remove Generated JS Code (“Clean”)

Remove (“clean”) the `public/js` folder and contents generated during compilation.

```
npm run clean
```

### Remove All Generated Code and Dependencies (“Nuke”)

Remove all (“nuke”) of the following:

- `public/js` folder and contents
- `.shadow-cljs` folder and contents
- `node_modules` folder and contents
- `package-lock.json` file (or `yarn.lock` file, if you specified the `yarn` option for your package manager)
- `out` folder and contents (containing tests)
- `report.html` file showing release build details

```
npm run nuke
```

Note that after this operation you will need to run `npm install` again before starting the app, to re-install the dependencies.

### Run a Shadow-CLJS Server

Shadow-CLJS can be fairly slow to start. To improve this Shadow-CLJS can run in “server mode” which means that a dedicated process is started which all other commands can use to execute a lot faster since they won’t have to start a new JVM/Clojure instance.

You can run the process in the foreground in a dedicated Terminal. Use CTRL+C to terminate the server.

```
npm run shadow-cljs-server
```
