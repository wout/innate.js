# dollar-sign.js

A micro library eliminating the need for jQuery for most common tasks.

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

## Usage

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

So where you are used to the following chain in jQuery:

```js
$( '[data-value]' )
  .addClass( 'highlighted' )
  .css({ color: 'pink' })
  .on( 'click', function( event ) {
    alert( event )
  })
```

In Dollar Sign the same will look like:

```js
var el = $.addClass( '[data-value]', 'highlighted' )
$.css( el, { color: 'pink' })
$.on( el, 'click', function( event ) {
  alert( event )
})
```


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
  console.log( 'Dollar Sign' )
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

`returns`: __`array`__ `as setter`
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











