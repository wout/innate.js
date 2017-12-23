# dollar-sign.js

A micro library to ease development with vanilla JS.

dollar-sign.js does not have any dependencies and is licensed under the terms of the MIT License.

## Why?

In many scenarios we need only a few of jQuery's functionality, but nontheless we load the whole library. Dollar Sign aims to eliminate the need of jQuery and endorses the use of vanilla JS.

Dollar Sign provides:
- DOM querying
- easy class manipulation
- working with collections of elements to perform a single task
- ajax functions
- attribute and data manipulation
- event binding
- CSS accessor and manipulator
- form serializer
- ...

Admittedly, a lot of code is borrowed form plainjs.com, but Dollar Sign provides the ease of use of jQuery when working with a collection of elements or even starting from CSS selectors.

## Usage

The `$` global carries all the available methods. To query the DOM for example, the `find()` method can be used:

```js
// get elements by CSS selector
var elements = $.find( '.my-selector' )
```

This will always return an array of elements.