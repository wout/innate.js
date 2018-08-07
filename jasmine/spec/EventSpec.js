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
    var el = $.live( document.body, 'click', '#dom div', mastaba )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

})


describe( 'trigger()', function() {

  it( 'returns the list of elements returned for the given selector', function() {
    var mastaba = function() {}
    var el = $.trigger( document.body, 'click' )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

})
