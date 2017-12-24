# dollar-sign.js

A micro library to that eliminates the need for jQuery for most common tasks.

dollar-sign.js does not have any dependencies and is licensed under the terms of the MIT License.

## Why?

In many scenarios we need only a few of jQuery's functionality, but nontheless we load the whole library even though we need only 10% of it. Dollar Sign aims to eliminate the need of jQuery and endorses the use of vanilla JS.

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

# Usage

The `$` global carries all the available methods. To query the DOM for example, the `find()` method can be used:

```js
// get elements by CSS selector
var elements = $.find( '.my-selector' )
```

Note that most methods accepting a selector as the first argument will return an array with the result of the DOM query.

In Dollar Sign, methods can't be chained like in jQuery. But instead of a selector, Dollar Sign also accepts an existing array of elements:

```js
var el = $.addClass( 'section.my-class', 'active' )
el = $.css( el, {
  color: 'pink'
, 'font-size': '2em'
})
```

Or even a `NodeList` or `HTMLCollection` instance:

```js
var elements = document.getElementsByClassName( 'my-class' )
var el = $.attr( elements, 'disabled', 'disabled' )
```

## DOM querying

### `$.find()`

`returns`: __`array`__

```js
// Get an element list for the given selector.
var el = $.find( 'div' )
```

### `$.first()`

`returns`: __`Element`__

```js
// Get a single element for the given selector.
var element = $.first( 'header' )
```

## Events

### `$.on()`

`returns`: __`array`__














