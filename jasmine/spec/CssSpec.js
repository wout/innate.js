afterAll( function() {
  $.hide( '#dom' )
})


describe( 'show()', function() {

  it( 'shows a hidden element', function() {
    var el = $.show( $.hide( '#dom' ) )
    expect( $.css( el, 'display' ) ).toBe( 'block' )
  })

  it( 'returns the found or given list of elements', function() {
    var el = $.hide( '#dom' )
    expect( Array.isArray( el ) ).toBeTruthy()
    expect( el[0].id ).toBe( 'dom' )
  })

})


describe( 'hide()', function() {

  it( 'hides an element', function() {
    var el = $.hide( '#dom' )
    expect( $.css( el, 'display' ) ).toBe( 'none' )
  })

  it( 'returns the found or given list of elements', function() {
    var el = $.hide( '#dom' )
    expect( Array.isArray( el ) ).toBeTruthy()
    expect( el[0].id ).toBe( 'dom' )
  })

})


describe( 'toggle()', function() {

  it( 'toggles the visibility of an element', function() {
    var el = $.show( '#dom' )
    $.toggle( el )
    expect( $.css( el, 'display' ) ).toBe( 'none' )
    $.toggle( el )
    expect( $.css( el, 'display' ) ).toBe( 'block' )
    $.toggle( el )
    expect( $.css( el, 'display' ) ).toBe( 'none' )
  })

  it( 'returns the found or given list of elements', function() {
    var el = $.toggle( '#dom' )
    expect( Array.isArray( el ) ).toBeTruthy()
    expect( el[0].id ).toBe( 'dom' )
  })

})


describe( 'css()', function() {

  it( 'sets multiple style properties on the given elements', function() {
    var el = $.css( '#dom div', {
      color: 'pink'
    , top: '300px'
    })
    expect( el[0].style.color ).toBe( 'pink' )
    expect( el[0].style.top ).toBe( '300px' )
    expect( el[3].style.color ).toBe( 'pink' )
    expect( el[3].style.top ).toBe( '300px' )
  })

  it( 'sets the style property on the given elements', function() {
    var el = $.css( '#dom div', 'top', '0' )
    expect( el[0].style.top ).toBe( '0px' )
  })

  it( 'returns the given list of elements', function() {
    var el = $.css( '#dom div', 'color', 'transparent' )
    expect( Array.isArray( el ) ).toBeTruthy()
  })

  it( 'returns a specific style property of the first element', function() {
    var el = $.css( '#dom div', 'color', 'red' )
    expect( $.css( '#dom div', 'color' ) ).toBe( 'rgb(255, 0, 0)' )
  })

  it( 'returns all style properties of the first element', function() {
    var css = $.css( '#dom div' )
    expect( typeof css === 'object' ).toBeTruthy()
  })

})







