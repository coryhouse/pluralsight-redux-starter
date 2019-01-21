# Starter Kit for [Building Applications in React and Redux](http://www.pluralsight.com/author/cory-house) on Pluralsight

## Get Started

1. **Install [Node 8](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/coryhouse/pluralsight-redux-starter.git` or [download the zip](https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd pluralsight-redux-starter`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
   This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
7. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**   | **Use**                                                |
| ---------------- | ------------------------------------------------------ |
| bootstrap        | CSS Framework                                          |
| react            | React library                                          |
| react-dom        | React library for DOM rendering                        |
| react-redux      | Redux library for connecting React components to Redux |
| react-router-dom | React library for routing                              |
| redux            | Library for unidirectional data flows                  |
| redux-thunk      | Async redux library                                    |
| react-toastify   | Display messages to the user                           |

### Development Dependencies

| **Dependency**                  | **Use**                                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| babel-cli                       | Babel Command line interface                                                                              |
| babel-core                      | Babel Core for transpiling the new JavaScript to old                                                      |
| babel-loader                    | Adds Babel support to Webpack                                                                             |
| babel-plugin-react-display-name | Add displayName to React.createClass calls                                                                |
| babel-preset-react-app          | Babel preset for working in React. Used by create-react-app too.                                          |
| babel-register                  | Register Babel to transpile our Mocha tests                                                               |
| cheerio                         | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation |
| colors                          | Adds color support to terminal                                                                            |
| compression                     | Add gzip support to Express                                                                               |
| cross-env                       | Cross-environment friendly way to handle environment variables                                            |
| css-loader                      | Add CSS support to Webpack                                                                                |
| enzyme                          | Simplified JavaScript Testing utilities for React                                                         |
| eslint                          | Lints JavaScript                                                                                          |
| eslint-plugin-import            | Advanced linting of ES6 imports                                                                           |
| eslint-plugin-react             | Adds additional React-related rules to ESLint                                                             |
| eslint-watch                    | Add watch functionality to ESLint                                                                         |
| eventsource-polyfill            | Polyfill to support hot reloading in IE                                                                   |
| expect                          | Assertion library for use with Mocha                                                                      |
| express                         | Serves development and production builds                                                                  |
| extract-text-webpack-plugin     | Extracts CSS into separate file for production build                                                      |
| file-loader                     | Adds file loading support to Webpack                                                                      |
| jsdom                           | In-memory DOM for testing                                                                                 |
| mocha                           | JavaScript testing library                                                                                |
| nock                            | Mock HTTP requests for testing                                                                            |
| npm-run-all                     | Display results of multiple commands on single command line                                               |
| open                            | Open app in default browser                                                                               |
| react-addons-test-utils         | Adds React TestUtils                                                                                      |
| redux-immutable-state-invariant | Warn when Redux state is mutated                                                                          |
| redux-mock-store                | Mock Redux store for testing                                                                              |
| rimraf                          | Delete files                                                                                              |
| style-loader                    | Add Style support to Webpack                                                                              |
| url-loader                      | Add url loading support to Webpack                                                                        |
| webpack                         | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware          | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware          | Adds hot reloading to webpack                                                                             |
