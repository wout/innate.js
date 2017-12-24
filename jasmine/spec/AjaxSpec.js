describe( 'get()', function() {

  it( 'performs a get request', function() {
    spyOn( $, 'get' )
    $.get( '/laster/123' )
    expect( $.get.calls.mostRecent().args[0] ).toBe( '/laster/123' )
  })

  it( 'returns an xhr object', function() {
    expect( $.get( '/laster/123' ) instanceof XMLHttpRequest ).toBeTruthy()
  })

})


describe( 'post()', function() {

  it( 'performs a post request', function() {
    spyOn( $, 'post' )
    $.post( '/laster/123' )
    expect( $.post.calls.mostRecent().args[0] ).toBe( '/laster/123' )
  })

  it( 'returns an xhr object', function() {
    expect( $.post( '/laster/123' ) instanceof XMLHttpRequest ).toBeTruthy()
  })

})


describe( 'ajax()', function() {

  it( 'performs an ajax request', function() {
    spyOn( $, 'ajax' )
    $.ajax( '/laster/123' )
    expect( $.ajax.calls.mostRecent().args[0] ).toBe( '/laster/123' )
  })

  it( 'performs an ajax request and triggers the error callback', function() {
    var success = jasmine.createSpy( 'success' )
      , error = jasmine.createSpy( 'error' )
    
    success.and.callFake( function( content ) {
      expect( success ).not.toHaveBeenCalled()
    })

    error.and.callFake( function( content ) {
      expect( error ).toHaveBeenCalled()
    })

    var xhr = $.ajax( '/laster/123', {
      success: success
    , error: error
    })

    expect( xhr instanceof XMLHttpRequest ).toBeTruthy()
  })


  it( 'performs an ajax request and triggers the success callback', function() {
    var success = jasmine.createSpy( 'success' )
      , error = jasmine.createSpy( 'error' )
    
    success.and.callFake( function( content ) {
      expect( success ).toHaveBeenCalled()
    })

    error.and.callFake( function( content ) {
      expect( error ).not.toHaveBeenCalled()
    })

    var xhr = $.ajax( 'success.json', {
      method: 'GET'
    , success: success
    , error: error
    })

    expect( xhr instanceof XMLHttpRequest ).toBeTruthy()
  })


  it( 'returns an xhr object', function() {
    expect( $.ajax( '/laster/123' ) instanceof XMLHttpRequest ).toBeTruthy()
  })

})