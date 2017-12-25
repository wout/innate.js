describe( 'each()', function() {

  afterAll( function() {
    $.removeAttr( '#dom div', 'disabled' )
  })

  it( 'iterates a list of elements', function() {
    var el = $.each( '#dom div', function( element ) {
      element.setAttribute( 'disabled', 'disabled' )
    })
    expect( el[0].getAttribute( 'disabled' ) ).toBe( 'disabled' )
    expect( el[1].getAttribute( 'disabled' ) ).toBe( 'disabled' )
    expect( el[2].getAttribute( 'disabled' ) ).toBe( 'disabled' )
  })

  it( 'iterates any array', function() {
    var array = [ 1, 'a', 2, 'b', 3, 'c' ]
      , string = ''

    $.each( array, function( item ) {
      string += item
    })

    expect( string ).toBe( '1a2b3c' )
  })

  it( 'supplies an index as the second argument of the closure', function() {
    var array = [ 1, 'a', 2, 'b', 3, 'c' ]
      , string = ''

    $.each( array, function( item, index ) {
      string += index + '.' + item
    })

    expect( string ).toBe( '0.11.a2.23.b4.35.c' )
  })

  it( 'returns the given array', function() {
    var array = [ 1, 'a', 2, 'b', 3, 'c' ]
    expect( $.each( array ) ).toBe( array )
  })

})


describe( 'toArray()', function() {

  it( 'converts a node list to an array', function() {
    var array = $.toArray( document.getElementsByTagName( 'li' ) )
    expect( Array.isArray( array ) ).toBeTruthy()
  })

  it( 'converts a html collection to an array', function() {
    var array = $.toArray( document.getElementsByClassName( '.menu' ) )
    expect( Array.isArray( array ) ).toBeTruthy()
  })

  it( 'clones an array', function() {
    var array = [ 1, 'a', 2, 'b', 3, 'c' ]
    expect( $.toArray( array ) ).not.toBe( array )
  })

})


describe( 'extend()', function() {

  it( 'extends a given object', function() {
    var object = {}
      , result = $.extend( object, { a: 1, b: 2, c: 3 } )
    expect( result.a ).toBe( 1 )
    expect( result.b ).toBe( 2 )
    expect( result.c ).toBe( 3 )
  })

})


describe( 'offset()', function() {

  it( 'calculates the cumulative offset of an element within the dom', function() {
    var offset = $.offset( '#dom footer' )
    expect( offset.left ).toBeGreaterThanOrEqual( window.innerWidth )
    expect( offset.top ).toBeGreaterThan( window.innerHeight )
  })

})


describe( 'serialize()', function() {

  it( 'serializes a form', function() {
    var data = $.serialize( document.querySelector( '#dom form' ) )
    expect( typeof data ).toBe( 'string' )
    expect( data ).toContain( 'comment%5Bname%5D=Me' )
  })

  it( 'serializes a form from selector', function() {
    var data = $.serialize( '#dom form' )
    expect( typeof data ).toBe( 'string' )
    expect( data ).toContain( 'comment%5Bname%5D=Me' )
  })

  it( 'serializes a for with a closure', function() {
    var data = $.serialize( '#dom form', function( input ) {
      return input.nodeName == 'INPUT'
    })
    expect( data ).toContain( 'comment%5Bname%5D=Me' )
    expect( data ).toContain( 'comment%5Bemail%5D=me%40you.he' )
    expect( data ).not.toContain( 'comment%5Bbody%5D' )
    expect( data ).not.toContain( 'verify' )
  })

})


