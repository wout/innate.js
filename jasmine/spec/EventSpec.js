describe( 'on()', function() {

  it( 'returns the list of elements returned for the given selector', function() {
    var mastaba = function() {}
    var el = $.on( '#dom div', 'click', mastaba )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

})

describe( 'off()', function() {

  it( 'returns the list of elements returned for the given selector', function() {
    var mastaba = function() {}
    var el = $.off( '#dom div', 'click', mastaba )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

})

describe( 'live()', function() {

  it( 'returns the list of elements returned for the given selector', function() {
    var mastaba = function() {}
    var el = $.live( '#dom div', 'click', mastaba )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

  it( 'does not accept an array of elements', function() {
    var mastaba = function() {}
    var el = $.find( '#dom div' )
    expect( function() { return $.live( el, 'click', mastaba ) })
      .toThrow( 'Expected the selector on live() to be a string but it is not.' )
  })

})