describe( 'attr()', function() {

  afterAll( function() {
    $.removeClass( '#dom div', 'lol' )
  })

  it( 'sets multiple attributes on the given elements', function() {
    var el = $.attr( '#dom div', {
      'data-red': 'pink'
    , 'data-blue': 'green'
    })
    expect( el[0].getAttribute( 'data-red' ) ).toBe( 'pink' )
    expect( el[0].getAttribute( 'data-blue' ) ).toBe( 'green' )
  })

  it( 'sets an attribute on the given elements', function() {
    var el = $.attr( '#dom div', 'disabled', 'disabled' )
    expect( el[1].getAttribute( 'disabled' ) ).toBe( 'disabled' )
  })

  it( 'returns the given list of elements', function() {
    var el = $.attr( '#dom div', 'class', 'with-out' )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

  it( 'returns a specific attribute of the first element', function() {
    var el = $.attr( '#dom div', 'class', 'lol' )
    expect( $.attr( '#dom div', 'class' ) ).toBe( 'lol' )
  })

  it( 'returns all attributes of the first element', function() {
    var attr = $.attr( '#dom div' )
    expect( typeof attr === 'object' ).toBeTruthy()
  })

})


describe( 'removeAttr()', function() {

  it( 'removes a given attribute', function() {
    var el = $.attr( '#dom div', 'disabled', 'disabled' )
    el = $.removeAttr( el, 'disabled' )
    expect( el[2].getAttribute( 'disabled' ) ).toBe( null )
  })

  it( 'returns the given list of elements', function() {
    var el = $.removeAttr( '#dom div', 'disabled' )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

})


describe( 'data()', function() {

  it( 'sets multiple data attributes on the given elements', function() {
    var el = $.data( '#dom div', {
      'pink': 'blue'
    , 'green': 'orange'
    })
    expect( el[1].getAttribute( 'data-pink' ) ).toBe( 'blue' )
    expect( el[1].getAttribute( 'data-green' ) ).toBe( 'orange' )
  })

  it( 'sets a data attribute on the given elements', function() {
    var el = $.data( '#dom div', 'disabled', 'disabled' )
    expect( el[1].getAttribute( 'data-disabled' ) ).toBe( 'disabled' )
  })

  it( 'returns the given list of elements', function() {
    var el = $.data( '#dom div', 'class', 'with-out' )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

  it( 'returns a specific data attribute of the first element', function() {
    var el = $.data( '#dom div', 'class', 'lol' )
    expect( $.data( '#dom div', 'class' ) ).toBe( 'lol' )
  })

  it( 'returns all data attributes of the first element', function() {
    var attr = $.data( '#dom div' )
    expect( typeof attr === 'object' ).toBeTruthy()
  })

})


describe( 'removeAttr()', function() {

  it( 'removes a given attribute', function() {
    var el = $.data( '#dom div', 'disabled', 'disabled' )
    el = $.removeData( el, 'disabled' )
    expect( el[2].getAttribute( 'data-disabled' ) ).toBe( null )
  })

  it( 'returns the given list of elements', function() {
    var el = $.removeData( '#dom div', 'disabled' )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

})