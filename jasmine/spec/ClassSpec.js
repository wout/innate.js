describe( 'hasClass()', function() {

  afterAll( function() {
    $.removeClass( '#dom div', 'mastaba' )
  })

  it( 'tests the existance of a class on the first element', function() {
    var el = $.addClass( '#dom div', 'mastaba' )
    expect( $.hasClass( el, 'mastaba' ) ).toBeTruthy()
  })

  it( 'tests the absense of a class on the first element', function() {
    expect( $.hasClass( '#dom div', 'falumba' ) ).toBeFalsy()
  })

})


describe( 'addClass()', function() {

  afterEach( function() {
    $.removeClass( '#dom div', 'rinosta mantra lastra' )
  })

  it( 'adds a class to the elements', function() {
    var el = $.addClass( '#dom div', 'rinosta' )
    expect( el[3].getAttribute( 'class' ) ).toBe( 'rinosta' )
  })

  it( 'adds multiple classes to the elements', function() {
    var el = $.addClass( '#dom div', 'mantra lastra' )
    expect( el[2].getAttribute( 'class' ) ).toContain( 'mantra' )
    expect( el[2].getAttribute( 'class' ) ).toContain( 'lastra' )
  })

  it( 'returns the given list of elements', function() {
    var el = $.addClass( '#dom div', 'lastra' )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

})


describe( 'removeClass()', function() {

  it( 'removes a class from the elements', function() {
    var el = $.addClass( '#dom div', 'rinosta' )
    el = $.removeClass( el, 'rinosta' )
    expect( el[1].getAttribute( 'class' ) ).not.toContain( 'rinosta' )
  })

  it( 'removes multiple classes to the elements', function() {
    var el = $.addClass( '#dom div', 'mantra lastra' )
    el = $.removeClass( el, 'mantra lastra' )
    expect( el[2].getAttribute( 'class' ) ).not.toContain( 'mantra' )
    expect( el[2].getAttribute( 'class' ) ).not.toContain( 'lastra' )
  })

  it( 'returns the given list of elements', function() {
    var el = $.removeClass( '#dom div', 'lastra' )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

})


describe( 'toggleClass()', function() {

  it( 'toggles a class on the elements', function() {
    var el = $.toggleClass( '#dom div', 'rinosta' )
    expect( el[1].getAttribute( 'class' ) ).toContain( 'rinosta' )
    el = $.toggleClass( el, 'rinosta' )
    expect( el[1].getAttribute( 'class' ) ).not.toContain( 'rinosta' )
  })

  it( 'returns the given list of elements', function() {
    var el = $.toggleClass( '#dom div', 'lastra' )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

})