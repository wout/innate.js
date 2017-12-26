;( function() {

  var $ = {
    // Find many
    find: function( subject, context, singular ) {
      // return as is if given subject is aything other than a string (selector)
      if ( Array.isArray( subject ) ) {
        return subject
      } else if ( subject instanceof Element || subject instanceof HTMLDocument ) {
        return [ subject ] 
      } else if ( subject instanceof NodeList || subject instanceof HTMLCollection ) {
        return $.toArray( subject )
      }

      // find selector type
      var m, match = subject.match( regex.selector )

      // ensure text
      context = context || document

      if ( match ) {
        // by id
        if ( m = match[1] ) {
          return [ context.getElementById( m ) ]

        // by tag name
        } else if ( match[2] ) {
          return $.toArray( context.getElementsByTagName( subject ) )

        // by class name
        } else if ( m = match[3] ) {
          return $.toArray( context.getElementsByClassName( m ) )
        }
      } else {
        // find one element
        if ( singular ) {
          return [ context.querySelector( subject ) ]

        // find all
        } else {
          return $.toArray( context.querySelectorAll( subject ) )
        }
      }
    }


    // Find one
  , first: function( selector, context ) {
      return $.find( selector, context, true )[0]
    }


    // Append elements
  , appendTo: function( el, parent ) {
      parent = $.first( parent )

      return $.each( el, function( element ) {
        parent.appendChild( element )
      })
    }


    // Prepend elements
  , prependTo: function( el, parent ) {
      return $.insertAt( el, parent, 0 )
    }


    // Insert elements at a given position
  , insertAt: function( el, parent, i ) {
      parent = $.first( parent )
      
      // get position if an element is given
      if ( i instanceof Element ) {
        i = $.toArray( parent.children ).indexOf( i )
      }

      // make sure position is a positive number or zero
      i = typeof i !== 'number' || i < 0 ? 0 : i

      return $.each( el, function( element ) {
        parent.insertBefore( element, parent.children[i] )
        i++
      })
    }


    // Remove element
  , remove: function( el ) {
      return $.each( el, function( element ) {
        element.parentNode.removeChild( element )
      })
    }


    // Add event listener
  , on: function( el, type, handler, options ) {
      return $.each( el, function( element ) {
        element.addEventListener( type, handler, options )
      })
    }


    // Remove event listener
  , off: function( el, type, handler, options ) {
      return $.each( el, function( element ) {
        element.removeEventListener( type, handler, options )
      })
    }


    // Live event listener
  , live: function( el, type, selector, handler, options ) {
      return $.each( el, function( element ) {
        element.addEventListener( type, function( event ) {
          var found, e = event.target || event.srcElement

          while ( e && e.matches && e !== element && ! ( found = e.matches( selector ) ) ) {
            e = e.parentElement
          }

          if ( found ) {
            handler.call( e, event )
          }
        }, options )
      })
    }


    // Show elements
  , show: function( el ) {
      return $.each( el, function( element ) {
        showHide( element, true )
      })
    }


    // Hide elements
  , hide: function( el ) {
      return $.each( el, function( element ) {
        showHide( element )
      })
    }


    // Toggle visibility
  , toggle: function( el, show ) {
      return $.each( el, function( element ) {
        showHide( element, show === true || ( show == null && getStyle( element ).display == 'none' ) )
      })
    }


    // Access adn manipulate CSS on elements
  , css: function( el, key, value ) {
      // act as a setter with an object of properties
      if ( typeof key === 'object' ) {
        for ( var property in key ) $.css( el, property, key[property] )
        return $.find( el ) 

      // act as a setter with a single property
      } else if ( arguments.length == 3 ) {
        return $.each( el, function( element ) {
          element.style[key] = value
        })

      // act as a getter for a single property
      } else if ( arguments.length <= 2 ) {
        value = getStyle( $.first( el ) )
        return arguments.length == 1 ? value : value[key]
      }
    }


    // jQuery: $.attr()
  , attr: function( el, key, value ) {
      // act as a setter with an object of properties
      if ( typeof key === 'object' ) {
        for ( var property in key ) $.attr( el, property, key[property] )
        return $.find( el ) 

      // act as a setter with a single property
      } else if ( arguments.length == 3 ) {
        return $.each( el, function( element ) {
          element.setAttribute( key, value )
        })

      // act as a getter for a single property
      } else if ( arguments.length == 2 ) {
        return $.first( el ).getAttribute( key )

      // act as a getter for an object of properties
      } else if ( arguments.length == 1 ) {
        for ( var a, attr = {}, attrs = $.first( el ).attributes, i = attrs.length - 1; i >= 0; i-- ) {
          attr[attrs[i].nodeName] = attrs[i].nodeValue
        }

        return attr
      }
    }


    // jQuery: $.removeAttr()
  , removeAttr: function( el, key ) {
      return $.each( el, function( element ) {
        element.removeAttribute( key )
      })
    }


    // jQuery: $.data()
  , data: function( el, key, value ) {
      // act as a setter with an object of properties
      if ( typeof key === 'object' ) {
        for ( var property in key ) $.data( el, property, key[property] )
        return $.find( el )

      // act as a setter with a single property
      } else if ( arguments.length == 3 ) {
        return $.attr( el, 'data-' + key, value )

      // act as a getter for a single property
      } else if ( arguments.length == 2 ) {
        return $.attr( el, 'data-' + key )

      // act as a getter for an object of properties
      } else if ( arguments.length == 1 ) {
        var attributes = $.attr( el )
          , attr = {}
          , k

        for ( var key in attributes ) {
          if ( regex.data.test( key ) ) {
            k = key.replace( regex.data, '' )
            attr[k] = attributes[key]
          }
        }

        return attr
      }
    }


    // jQuery: $.removeData()
  , removeData: function( el, key ) {
      return $.removeAttr( el, 'data-' + key )
    }


    // Test the existance of a class
  , hasClass: function( el, name ) {
      return hasClass( $.first( el ), name )
    }


    // Add a given class
  , addClass: function( el, name ) {
      return $.each( el, function( element ) {
        addClass( element, name )
      })
    }


    // Remove a given class
  , removeClass: function( el, name ) {
      return $.each( el, function( element ) {
        removeClass( element, name )
      })
    }


    // Toggle a given class
  , toggleClass: function( el, name, force ) {
      return $.each( el, function( element ) {
        force === true || ( force == null && ! hasClass( element, name ) ) ?
          addClass( element, name ) : removeClass( element, name )
      })
    }


    // Perform a block on each element
  , each: function ( el, closure ) {
      // ensure element list
      el = $.find( el )

      // execute closure
      if ( typeof closure === 'function' ) {
        if ( el.length == 1 ) {
          closure( el[0], 0 )
        } else {
          for ( var i = 0, il = el.length; i < il; i++ ) {
            closure( el[i], i )
          }
        }
      }

      return el
    }


    // Convert any iterablelist to an array
  , toArray( list ) {
      for ( var a = [], i = list.length; i--; a.unshift( list[i] ) );
      return a
    }


    // Extend a given object
  , extend: function( obj, src ) {
      Object.keys( src ).forEach( function( key ) {
        obj[key] = src[key]
      })

      return obj
    }


    // Get the offset of an element
  , offset: function( el ) {
      var rect = $.first( el ).getBoundingClientRect()
        , scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        , scrollTop = window.pageYOffset || document.documentElement.scrollTop

      return {
        top: rect.top + scrollTop
      , left: rect.left + scrollLeft
      }
    }


    // Serialize form data
  , serialize: function( form, closure ) {
      var field, l, s = []

      // use query to find form
      if ( typeof form === 'string' ) {
        form = $.first( form )
      }

      if ( typeof form == 'object' && form.nodeName == 'FORM' ) {
        var len = form.elements.length

        for ( var i = 0; i < len; i++ ) {
          field = form.elements[i]

          if ( typeof closure !== 'function' || closure( field ) ) {
            if ( field.name && ! field.disabled && ! regex.field.test( field.type ) ) {
              if ( field.type == 'select-multiple' ) {
                l = form.elements[i].options.length

                for ( var j = 0; j < l; j++ ) {
                  if( field.options[j].selected ) {
                    s[s.length] = encodeURIComponent( field.name ) + '=' + encodeURIComponent( field.options[j].value )
                  }
                }
              } else if ( ( field.type != 'checkbox' && field.type != 'radio' ) || field.checked ) {
                s[s.length] = encodeURIComponent( field.name ) + '=' + encodeURIComponent( field.value )
              }
            }
          }
        }
      }

      return s.join( '&' ).replace( regex.space, '+' )
    }


    // jQuery-style ajax get
  , get: function( url, success ) {
      var settings = {}

      if ( typeof url === 'string' ) {
        settings.url = url
        settings.success = success
      } else if ( typeof url === 'object' ) {
        settings = url
      }

      settings.method = 'GET'

      return $.ajax( settings )
    }


    // jQuery-style ajax post
  , post: function( url, settings ) {
      var settings = settings || {}

      if ( typeof url === 'string' ) {
        settings.url = url
      } else {
        settings = url
      }

      return $.ajax( settings )
    }


    // jQuery-style ajax
  , ajax: function( url, settings ) {
      // default settings
      var defaults = {
        method: 'POST'
      }

      // ensure complete settings
      settings = typeof url === 'object' ? url : settings || {}
      if ( typeof url === 'string' ) settings.url = url
      settings = $.extend( defaults, settings )

      // convert post data from object to string
      if ( typeof settings.data === 'object' ) {
        settings.data = Object.keys( settings.data ).map(
          function( k ) {
            return encodeURIComponent( k ) + '=' + encodeURIComponent( data[k] )
          }
        ).join( '&' )
      }

      // accept type as an alias for method
      if ( settings.type ) settings.method = settings.type

      // open request
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' )
      xhr.open( settings.method.toUpperCase(), settings.url )

      // watch state changes
      xhr.onreadystatechange = function() {
        if ( xhr.readyState === XMLHttpRequest.DONE ) {
          // complete callback
          if ( typeof settings.complete === 'function' ) settings.complete( xhr, 'success' )

          // status code callback
          if ( typeof settings.statusCode === 'object' ) {
            if ( typeof settings.statusCode[xhr.status] === 'function' ) {
              settings.statusCode[xhr.status]( xhr )
            }
          }

          // success callback
          if ( xhr.status == 200 ) {
            if ( typeof settings.success === 'function' ) {
              var result

              try {
                result = JSON.parse( xhr.responseText )
                xhr.responseJSON = result
              } catch (e) {
                result = xhr.responseText
              }

              settings.success( result, xhr )
            }
          }
        }
      }

      // error callbacks
      xhr.onabort = function() {
        if ( typeof settings.error === 'function' ) settings.error( xhr, 'abort' )
      } 
      xhr.onerror = function() {
        if ( typeof settings.error === 'function' ) settings.error( xhr, 'error' )
      }

      // set headers
      xhr.setRequestHeader( 'X-Requested-With', 'XMLHttpRequest' )

      if ( settings.method.toUpperCase() != 'GET' ) {
        xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' )
      }

      if ( typeof headers === 'object' ) {
        for ( var key in headers ) xhr.setRequestHeader( key, headers[key] )
      }

      // perform request
      xhr.send( settings.data )

      return xhr
    }

  }


  //////////////////////////////
  // Polyfills /////////////////
  //////////////////////////////

  // Matches
  window.Element && function( ElementPrototype ) {
    ElementPrototype.matches = ElementPrototype.matches ||
      ElementPrototype.matchesSelector ||
      ElementPrototype.webkitMatchesSelector ||
      ElementPrototype.msMatchesSelector ||
      function( selector ) {
        var node = this, nodes = ( node.parentNode || node.document ).querySelectorAll( selector ), i = -1
        while( nodes[++i] && nodes[i] != node ) {
          return !! nodes[i]
        }
      }
  }( Element.prototype )


  // Closest
  window.Element && function( ElementPrototype ) {
    ElementPrototype.closest = ElementPrototype.closest ||
      function( selector ) {
        var el = this;
        while ( el.matches && ! el.matches( selector ) ) {
          el = el.parentNode
        }
        return el.matches ? el : null
      }
  }( Element.prototype )


  //////////////////////////////
  // Helpers ///////////////////
  //////////////////////////////

  // Get the default display style of an element
  function defaultDisplay( tag ) {
    var iframe = document.createElement( 'iframe' )
    iframe.setAttribute( 'frameborder', 0 )
    iframe.setAttribute( 'width', 0 )
    iframe.setAttribute( 'height', 0 )
    document.documentElement.appendChild( iframe )
  
    var doc = ( iframe.contentWindow || iframe.contentDocument ).document
  
    // IE support
    doc.write()
    doc.close()
  
    var testEl = doc.createElement( tag )
    doc.documentElement.appendChild( testEl )
    var display = getStyle( testEl ).display
    iframe.parentNode.removeChild( iframe )

    return display
  }


  // Actual show/hide function used by show() and hide()
  function showHide( el, show ) {
    var value = el.getAttribute( 'data-olddisplay' )
      , display = el.style.display
      , computedDisplay = getStyle( el ).display
  
    if ( show ) {
      if ( ! value && display === 'none' ) {
        el.style.display = ''
      }
      if ( el.style.display === '' && ( computedDisplay === 'none' ) ) {
        value = value || defaultDisplay(el.nodeName);
      }
    } else {
      if ( display && display !== 'none' || ! ( computedDisplay == 'none' ) ) {
        el.setAttribute( 'data-olddisplay', ( computedDisplay == 'none' ) ? display : computedDisplay )
      }
    }
    if ( ! show || el.style.display === 'none' || el.style.display === '' ) {
      el.style.display = show ? value || '' : 'none'
    }
  }


  // Get element style
  function getStyle( el ) {
    return window.getComputedStyle ? getComputedStyle( el, null ) : el.currentStyle
  }


  // Class manipulations
  if ( 'classList' in document.documentElement ) {
    function hasClass( el, name ) {
      return el.classList.contains( name )
    }
    function addClass( el, name ) {
      name = name.split( ' ' )

      for ( var i = name.length - 1; i >= 0; i-- ) {
        el.classList.add( name[i] )
      }
    }
    function removeClass( el, name ) {
      name = name.split( ' ' )

      for ( var i = name.length - 1; i >= 0; i-- ) {
        el.classList.remove( name[i] )
      }
    }
  } else {
    function hasClass( el, name ) {
      return new RegExp( '\\b' + name + '\\b' ).test( el.className )
    }
    function addClass( el, name ) {
      name = name.split( ' ' )

      for ( var i = name.length - 1; i >= 0; i-- ) {
        if ( ! hasClass( el, name[i] ) ) {
          el.className = ( el.className + ' ' + name[i] ).trim()
        }
      }
    }
    function removeClass( el, name ) {
      name = name.split( ' ' )

      for ( var i = name.length - 1; i >= 0; i-- ) {
        el.className = el.className.replace( new RegExp( '\\b' + name[i] + '\\b', 'g' ), '' )
      }
    }
  }


  //////////////////////////////
  // Regexes ///////////////////
  //////////////////////////////

  // parse and cache regexes
  var regex = {
    // ID, TAG, CLASS
    selector: /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/

    // tag names of form fields to ignore on form serialization
  , field: /^(file|reset|submit|button)$/

    // data attribute prefix
  , data: /^data-/

    // escaped space
  , space: /%20/g

  }


  // Use AMD or CommonJS, fall back on global scope if both are not present.
  if ( typeof define === 'function' && define.amd ) {
    define( function() { return $ })
  } else if ( typeof exports !== 'undefined' ) {
    exports.$ = $
  } else {
    this.$ = $
  }

}).call( this )