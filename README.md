# webpack-project
A boilerplate project using webpack, with some friendly reminders.

`npm start` starts the node server
`npm run-script build` compiles the server script, client script and css
<br/>
<br/>
<br/>

## Index
- [Reference](#reference)
  - [Webpack](#webpack)
  - [Javascript](#javascript)
  - [Packages](#packages)
    - [Server](#server)
    - [Dev](#dev)
- [Notes](#notes)
  - [Javascript](#javascript-1)
  - [SCSS](#scss)
  - [Other](#other)
- [TODO](#todo)
<br/>
<br/>
<br/>

## Reference

### Webpack
[Getting started with Webpack](http://tooling.github.io/book-of-modern-frontend-tooling/dependency-management/webpack/getting-started.html)
<br/>
<br/>

### Javascript
[Classes](https://javascript.info/class)

[Imports & exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

[ES6](http://es6-features.org/#Constants)
<br/>
<br/>

### Packages

#### Server

[Express](https://expressjs.com/)

#### Dev

[Babel](https://babeljs.io/)

[PostCSS](https://github.com/postcss)

[Autoprefixer](https://github.com/postcss/autoprefixer)

[Circular Dependency Plugin](https://github.com/aackerman/circular-dependency-plugin)

[CSS Loader](https://github.com/webpack-contrib/css-loader)

[CSSnano](http://cssnano.co/)

[Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

[PostCSS Initial](https://github.com/maximkoretskiy/postcss-initial)

[PostCSS Preset Env](https://github.com/csstools/postcss-preset-env)

[PostCSS Utility Library](https://github.com/ismamz/postcss-utilities)

[Font Magician](https://github.com/jonathantneal/postcss-font-magician)

[LostGrid](http://lostgrid.org/)
<br/>
<br/>
<br/>

## Notes

### Javascript

#### Import/export

Imports are done in app.js with
```
import {[class or function]} from './js/[my file].js';
```
<br/>
<br/>

The structure of an export should be
```
export class MyClass {
    ...
}
```
for classes, and 
```
export function MyFunction() {
    ...
}
```
for functions. 

[Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
<br/>
<br/>
<br/>

#### ES6

A reminder of some useful ES6 functionality.
<br/>
<br/>

Use `let` instead of `var` to scope varables. 

[Read more.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
<br/>
<br/>

Function definitions can be done with `() => {}`, `(variable) => {}` or `() => returnValue`. 

[Read more](http://es6-features.org/#ExpressionBodies)
<br/>
<br/>

Default values for function parameters are defined like
```
foo(x, y = 2) => {
    return x + y;
}
foo(1); // returns 3
```
[Read more](http://es6-features.org/#DefaultParameterValues)
<br/>
<br/>

Rest parameters are used to aggregate remaining arguments into a single parameter, like so
```
foo(a, ...b) => {
    return a * b.length
}
foo(2, 1, 3, 'hello'); // Evaluates as 2 * 3 because variable b has 3 values
```
[Read more](http://es6-features.org/#RestParameter)
<br/>
<br/>
<br/>

### SCSS
<br/>
<br/>
<br/>

### Other
<br/>
<br/>
<br/>

### TODO:
- Setup a yeoman project generator