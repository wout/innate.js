# Dollar-sign.js

A micro library (3Kb) eliminating the need for jQuery for most common tasks.

Dollar-sign.js does not have any dependencies and is licensed under the terms of the MIT License.

## Why?

In many scenarios we need only a few of jQuery's functionality, but nontheless we load the whole library even though we need only 10% of it. dollar-sign.js aims to eliminate the need of jQuery and endorses the use of vanilla JS.

dollar-sign.js provides:
- DOM querying
- easy class manipulation
- working with collections of elements to perform a single task
- ajax functions
- attribute and data manipulation
- event binding
- CSS accessor and manipulator
- form serializer
- ...

Admittedly, a lot of code is borrowed form plainjs.com, but dollar-sign.js provides the ease of use of jQuery when working with a collection of elements or even starting from CSS selectors.

## Usage

The `$` global carries all the available methods. To query the DOM for example, the `find()` method can be used:

```js
// get elements by CSS selector
var elements = $.find( '.my-selector' )
```

Note that most methods accepting a selector as the first argument will return an array with the result of the DOM query.

In dollar-sign.js, methods can't be chained like in jQuery. But instead of a selector, dollar-sign.js also accepts an existing array of elements:

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

So where you are used to the following chain in jQuery:

```js
$( '[data-value]' )
  .addClass( 'highlighted' )
  .css({ color: 'pink' })
  .on( 'click', function( event ) {
    alert( event )
  })
```

In dollar-sign.js the same will look like:

```js
var el = $.addClass( '[data-value]', 'highlighted' )
$.css( el, { color: 'pink' })
$.on( el, 'click', function( event ) {
  alert( event )
})
```

This syntax allows you to easily mix dollar-sign.js with vanilla JS and jump between the two whenever nedded. Because with jQuery you will always have to unwrap the object first to access its native properties.


### DOM querying

#### `$.find()`

`returns`: __`array`__

Get an element list for the given selector.

```js
var el = $.find( 'div' )
```

Optionally, it allows a context to be passed as the second parameter (defaults to `document`):

```js
$.find( 'a.social', $.first( '#main_content' ) )
```

#### `$.first()`

`returns`: __`Element`__

Get a single element for the given selector.

```js
var element = $.first( 'header' )
```

Optionally, it allows a context to be passed as the second parameter (defaults to `document`):

```js
$.first( 'nav', document.querySelector( 'header' ) )
```

### Events

#### `$.on()`

`returns`: __`array`__

Bind an event to the given element list.

```js
$.on( 'a', 'click', function() {
  console.log( 'dollar-sign.js' )
})
```

The fourth parameter will take an object with options:

```js
$.on( 'a', 'click', handler, options )
```

#### `$.off()`

`returns`: __`array`__

Unbind an event to the given element list. This works exactly the same as `$.on()`:

```js
$.off( 'a', 'mousemove', handler )
```

#### `$.live()`

`returns`: __`array`__

Attach an event handler for all elements which match the current selector, now and in the future:

```js
$.live( 'a', 'click', handler )
```

The fourth parameter defines the context:

```js
$.live( 'a', 'click', handler, context )
```

### CSS

#### `$.show()`

`returns`: __`array`__

Shows all elements.

```js
$.show( 'div.tucked-away' )
```

#### `$.hide()`

`returns`: __`array`__

Hides all elements.

```js
$.hide( 'div.in-the-way' )
```

#### `$.toggle()`

`returns`: __`array`__

Toggles visibility of all elements.

```js
$.toggle( 'div.toggle-away' )
```

Optionally, a second parameter can be passed to toggle based on a boolean value:

```js
$.toggle( 'div.toggle-away', true )
```

#### `$.css()`

`returns`: __`array`__ `as setter` <br>
`returns`: __`value`__ `as getter`

Sets a single CSS property:

```js
$.css( 'div > p', 'color', 'pink' )
```

Sets multiple CSS properties:

```js
$.css( 'div > p', {
  color: 'pink'
, display: 'inline'
})
```

Gets a CSS property of the first element found:

```js
var color = $.css( 'div > p', 'color' )
```

Gets an object with all CSS properties of the first element found:

```js
var properties = $.css( 'div > p' )
```


### Attributes

#### `$.attr()`

`returns`: __`array`__ `as setter` <br>
`returns`: __`value`__ `as getter`

Sets a single attribute on all elements:

```js
$.attr( 'input', 'style', 'color:pink' )
```

Sets multiple attributes:

```js
$.attr( 'input', {
  style: 'color:pink'
, disabled: 'disabled'
})
```

Gets an attribute of the first element found:

```js
var disabled = $.attr( 'input', 'disabled' )
```

Gets an object with all attributes of the first element found:

```js
var attributes = $.attr( 'form' )
```

#### `$.removeAttr()`

`returns`: __`array`__

Removes an attribute:

```js
$.removeAttr( 'input[type=submit]', 'disabled' )
```

#### `$.data()`

`returns`: __`array`__ `as setter` <br>
`returns`: __`value`__ `as getter`

Sets a single data attribute on all elements:

```js
$.data( '#mydiv', 'color', 'pink' )
```

Sets multiple data attributes:

```js
$.data( '#mydiv', {
  color: 'pink'
, size: 'XXS'
})
```

Gets a data attribute of the first element found:

```js
var color = $.data( '#mydiv', 'color' )
```

Gets an object with all data attributes of the first element found:

```js
var data = $.data( '#mydiv' )
```

#### `$.removeData()`

`returns`: __`array`__

Removes an data attribute:

```js
$.removeData( '#mydiv', 'color' )
```

### Classes

#### `$.hasClass()`

`returns`: __`boolean`__

Tests the existance of a class on the first element found:

```js
$.hasClass( '#mydiv', 'fabulous' )
```

#### `$.addClass()`

`returns`: __`array`__

Adds a class to all elements:

```js
$.addClass( '.menu-items', 'fabulous' )
```

#### `$.removeClass()`

`returns`: __`array`__

Removes a class from all elements:

```js
$.removeClass( '.menu-items', 'fabulous' )
```

#### `$.toggleClass()`

`returns`: __`array`__

Toggles a class on all elements:

```js
$.toggleClass( '.menu-items', 'fabulous' )
```

Optionally, a second parameter can be passed to toggle the class based on a boolean value:

```js
$.toggleClass( '.menu-items', 'fabulous', true )
```

### Utilities



