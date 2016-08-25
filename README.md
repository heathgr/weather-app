# Overview

Setting up new JavaScript projects can be tedious.  Configuring build processes, linters, test suites, etc. can be time consuming.  This repository contains a very simple React-Redux project that can be used as a starting point for your next project.  With any luck, you will be up and running quickly.  Focusing your attention on app code and not Webpack configurations.

# Feature List

This project was built using the following tools and libraries:

- **[React](https://facebook.github.io/react/)**: Framework for building user interfaces.
- **[Redux](http://redux.js.org/)**: Predictable state container for JavaScript apps.  An elegant and simple alternative to Flux.
- **[Radium](http://stack.formidable.com/radium/)**: Tool for managing styles on React components.
- **[Webpack](https://webpack.github.io/)**: JavaScript bundler and build tool.  Provides support for ES2015.  Also supports a development server with hot reloading.
- **[Flowtype](https://flowtype.org/)**: Static type checker for JavaScript.
- **[ESLint](http://eslint.org/)**: Linting tool for JavaScript.
- **[Mocha](https://mochajs.org)**: Test framework that utilizes Chai, Sinon, Babel-Rewire, and Enzyme.  Test coverage reports are generated by using Babel-Istanbul.

# Getting Started

### Clone the reposity.

Open a terminal.  Go to the directory your project will be located in and type the following:
```
git clone https://github.com/heathgr/react-redux-flow-starter-kit.git
```
### Rename the project.

Chances are that you don't want your project's directory to be named "react-redux-flow-starter-kit".  Type the following to rename it:
```
mv react-redux-flow-starter-kit [your project name]
```

### Install Project Dependencies.

Make sure your node modules are installed:

```
cd [your proect name]
npm install
```

### Update package.json.

Update the following values in the project's package.json file so that they represent your project:

- name
- description
- author
- keywords

### Update README.md.

Delete README.md and start fresh.  You should document your project and not this one.

```
rm README.md
touch README.md
```

### Reinitialize GIT

Reinitialize your project's GIT repo.  Here is how:
```
rm -r .git
git init
git add .
git commit -m 'initial commit'
```

If you are pushing to a remote server, set up your project's remotes:
```
git remote add origin [your project's url]
git push --force --set-upstream origin master
```
### Make sure local node modules are in the system path.

For the project's development scripts to work, make sure the following line is in your ~/.bash_profile or ~/.profile file:
```
export PATH="./node_modules/.bin/:$PATH"
```
This will make it possible to run local node binaries from the terminal.
### Setup is complete.

Congrats, your project is setup.  Modify this sample app to fit your needs.

# Project Structure

This project has the following directory structure:

```
[your-project]/
├── coverage            # Test coverage reports. May not be present if you haven't generated any coverage reports yet.
├── node_modules        # Your node modules.
├── scripts             # Bash scripts used for development.   See the "Development Scripts" scripts section for more details.
├── spec                # Contains your test files.
│   ├── actions         # Tests for your Redux actions.
│   ├── components      # Tests for your React components.
│   └── reducers        # Tests for your Redux reducers.
├── src
│   ├── actions         # Your Redux actions.
│   ├── components      # Your React components.
│   ├── constants       # JavaScript constants.
│   ├── reducers        # React reducers.
│   └── types           # Flow types.
└── static              # HTML, CSS, image files, bundled JavaScript, etc.
```

# Development Scripts

Here is a list of terminal/command-line commands that will make your development experience a lot easier:

### Create a Devlopment Build and Launch a Devlopment Server

```
npm start
```
Starts a development server.  Open http://localhost:3000/ to preview your project.  This server supports hot reloading aka hot module replacement.  So, your project will update automatically while you are writing your code.  No need to constantly reload the browser.

### Run ESLint

```
npm run lint
```
Generates a report of any errors ESLint finds in your code.  This project uses the popular [Airbnb rules](https://www.npmjs.com/package/eslint-config-airbnb).

### Run a Flow Check

```
npm run flow
```
If you are using flowtype notations, this command will check your code for errors and generate a report.

### Run Tests

```
npm test
```
Launches Mocha and runs all the tests in the "spec" directory with the extension of ".spec.js".

### Coverage Reports

```
npm run test:coverage
```

Runs the project's tests and creates a code coverage report.  Coverage reports will be in the project's "coverage" directory.

### Run ESLInt, Flow Check, and Tests

```
npm run checkup
```

Runs ESLInt, Flow Check, and the project's tests with one command.

### Create a Production Build

```
npm run build
```

This will run a checkup.  If no errors are found, a production bundle is generated at static/bundle.js

# Recommended Atom Packages

If you write your code in [Atom](https://atom.io), the following packages are a nice complement to this project:

- ***[autocomplete-flow](https://atom.io/packages/autocomplete-flow)***:  Flow powered autocomplete.  Much more useful than standard autocomplete.
- ***[linter-eslint](https://atom.io/packages/linter-eslint)***:  This package runs ESLint on the fly while you are typing your code.
- ***[linter-flow](https://atom.io/packages/linter-flow)***:  A linter that help identify errors made in flowtype annotations.
- ***[react](https://atom.io/packages/react)***:  Adds JSX support to Atom.  Very useful for writing React components.

# Recommended Chrome Extensions

The following Chrome Extensions will make inspecting and debugging your project a lot easier:

- ***[React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)***: Allows you to inspect React components and monitor their properties and state.

- ***[Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)***:  Dev tools for redux.  Let's you inspect application state and action payloads.  Has support for "time travel" by letting you cancel, modify, and replay actions.  Extremely useful for debugging redux applications.

# Known Issues

### Flowtype and Babel Rewire Plugin.

When writing tests, Flowtype will generate an error when used with Babel-Rewire.  Babel-Rewire is a Babel Plugins and will not be run on your code until Mocha launches.  As a result, when Flow analyzes your code it sees these functions as undefined.

# Roadmap

- Update dev scripts so that it isn't necessary to modify ~/.profile or ~/.bash_profile.

- Convert this project into a code generator.  It would be more useful as a yeoman generator, or something similar.
