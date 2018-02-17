# innate.js

A micro library (3Kb) eliminating the need for jQuery for most common tasks.

innate.js does not have any dependencies and is licensed under the terms of the MIT License.

## Why?

In many scenarios we need only a small part of jQuery's functionality, but nontheless we load the whole library even though we need only 10% of it. innate.js aims to eliminate the need of jQuery and endorses the use of vanilla JS.

innate.js provides:
- DOM querying
- easy class manipulation
- working with collections of elements to perform a single task
- ajax functions
- attribute and data manipulation
- event binding
- CSS accessor and manipulator
- form serializer
- ...

Admittedly, a lot of code is borrowed form plainjs.com, but innate.js provides the ease of use of jQuery when working with a collection of elements or even starting from CSS selectors.

## Usage

The `$` global carries all the available methods. To query the DOM for example, the `find()` method can be used:

```js
// get elements by CSS selector
var elements = $.find( '.my-selector' )
```

Note that most methods accepting a selector as the first argument will return an array with the result of the DOM query.

In innate.js, methods can't be chained like in jQuery. But instead of a selector, innate.js also accepts an existing array of elements:

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

So where you are used to the following method chain in jQuery:

```js
$( '[data-value]' )
  .addClass( 'highlighted' )
  .css({ color: 'pink' })
  .on( 'click', function( event ) {
    alert( event )
  })
```

In innate.js the same will look like:

```js
var el = $.addClass( '[data-value]', 'highlighted' )
$.css( el, { color: 'pink' })
$.on( el, 'click', function( event ) {
  alert( event )
})
```

This syntax allows you to easily mix innate.js with vanilla JS and jump between the two whenever needed. Because with jQuery you will always have to unwrap the object first to access its native properties.

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

### DOM manipulation

#### `$.appendTo()`

`returns`: __`array`__

Appends a given element or list of elements to the given parent in the second parameter, which can be a selector or an element.

```js
$.appendTo( document.createElement( 'div' ), 'body' )
```

#### `$.prependTo()`

`returns`: __`array`__

Appends a given element or list of elements to the given parent in the second parameter, which can be a selector or an element.

```js
$.prependTo( document.createElement( 'div' ), 'body' )
```

#### `$.insertAt()`

`returns`: __`array`__

Inserts one or more elements to the given parent at a given position.

```js
$.insertAt( document.createElement( 'div' ), 'body', 3 )
```

The position parameter can also be another child element of the parent.

```js
var header = $.first( 'header' )
$.insertAt( document.createElement( 'div' ), header, header.children[5] )
```

Note that if the element passed as the position parameter is not a child of the parent, the elements will be inserted starting at position 0.

#### `$.remove()`

`returns`: __`array`__

Remove one or more elements from the DOM.

```js
$.remove( '.removable' )
```

### Events

#### `$.on()`

`returns`: __`array`__

Bind an event to the given element list.

```js
$.on( 'a', 'click', function() {
  console.log( 'innate.js' )
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
$.live( 'body', 'click', 'a', handler )
```

The fifth parameter will take an object with options:

```js
$.live( document, 'click', 'a', handler, options )
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

Optionally, a third parameter can be passed to toggle the class based on a boolean value:

```js
$.toggleClass( '.menu-items', 'fabulous', true )
```

### Ajax

#### `$.get()`

`returns`: __`XMLHttpRequest`__

Perform a simple AJAX GET request:

```js
$.get( '/api/item/1.json', function( xhr ) {
  console.log( xhr )
})
```


#### `$.post()`

`returns`: __`XMLHttpRequest`__

Perform a simple AJAX POST request:

```js
$.post( '/api/item/1.json', function( xhr ) {
  console.log( xhr )
})
```


#### `$.ajax()`

`returns`: __`XMLHttpRequest`__

Perform an extended AJAX POST request:

```js
$.ajax( '/api/item/1.json', {
  // method (or type works too)
  method: 'PUT'

  // data (object will be serialized)
, data: {}

  // callbacks
, success: function() {}
, complete: function() {}
, error: function() {}
, abort: function() {}
  
  // headers
, headers: {}
})
```


### Utilities

#### `$.each()`

`returns`: __`array`__

Iterates a the matching elements:

```js
$.each( 'form input[]', function( element, index ) {
  element.id = 'input_' + index
})
```

But it also works for arrays:

```js
$.each( [ 1, 2, 3 ], function( item, index ) {
  console.log( item )
})
```

#### `$.toArray()`

`returns`: __`array`__

Converts an a `NodeList` or `HTMLCollection` to an array:

```js
var array = $.toArray( document.getElementsByTagName( 'li' ) )
```

But it can also be used to clone a given array:

```js
var clone = $.toArray( [ 1, 2, 3 ] )
```

#### `$.extend()`

`returns`: __`object`__

Extends the first given object with the second one and returns the first:

```js
var object = { a: 1, b: 2 }
$.extend( object, { c: 3 })
```

#### `$.offset()`

`returns`: __`object`__

Get the cumulative offset of an element:

```js
var offset = $.offset( '#mydiv' )
var left = offset.left
var top = offset.top
```

#### `$.serialize()`

`returns`: __`string`__

Serializes and escapes the key/value pairs in a form:

```js
var data_string = $.serialize( form )
```

This also works with a selector:

```js
var data_string = $.serialize( '.main-form' )
```

__Note:__ an empty string will be returned if the first matched element is not a `<form>`.

Finally, a closure can be provided as the second argument to filter out element values:

```js
var data_string = $.serialize( '.main-form', function( input ) {
  return input.nodeName === 'INPUT'
})
```


## Sugarless

Some things in jQuery are nice to have. Like creating elements with class names and ids in one go:

```js
$( '<div id='myDiv' class='class1 class2'>' )
```

innate.js endorses the use of vanilla JS. So the same can be achieved with:

```js
$.attr( document.createElement( 'div' ), { id: 'myDiv', class: 'class1 class2' })
```

A bit less concise, but does the same thing and it is faster.




