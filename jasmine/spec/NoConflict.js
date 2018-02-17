describe( 'noConflict()', function() {

  it( 'restores the original $ user', function() {
    var original = $
    innate.noConflict()
    expect( innate ).toBe( original )
    window.$ = original
  })

  it( 'allows a custom namespace', function() {
    var original = $
    expect( window.blubber ).toBeUndefined()
    innate.noConflict( 'blubber' )
    expect( blubber ).toBe( original )
    window.$ = original
    delete window.blubber
  })

})