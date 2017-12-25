describe( 'find()', function() {

  describe( 'accepts', function() {

    it( 'a dom selector and returns it as an array of elements', function() {
      var result = $.find( 'header' )
      expect( result[0] instanceof Element ).toBeTruthy()
      expect( Array.isArray( result ) ).toBeTruthy()
    })

    it( 'an array and returns it as it is', function() {
      var array = []
      expect( $.find( array ) ).toBe( array )
    })

    it( 'a HTML element and returns it in an array', function() {
      var result = $.find( document.getElementById( 'dom' ) )
      expect( result[0] instanceof Element ).toBeTruthy()
      expect( Array.isArray( result ) ).toBeTruthy()
    })

    it( 'a HTML document and returns it in an array', function() {
      var result = $.find( document )
      expect( result[0] instanceof HTMLDocument ).toBeTruthy()
      expect( Array.isArray( result ) ).toBeTruthy()
    })

    it( 'a node list and returns it as an array', function() {
      var list = $.find( document.getElementsByTagName( 'li' ) )
      expect( Array.isArray( list ) ).toBeTruthy()
    })

    it( 'a HTML collection and returns it as an array', function() {
      var list = $.find( document.getElementsByClassName( '.menu' ) )
      expect( Array.isArray( list ) ).toBeTruthy()
    })

  })

  describe( 'context', function() {

    it( 'defaults to the document', function() {
      expect( $.first( '#dom div' ).className ).toBe( 'logo' )
    })

    it( 'can be defined as the second argument', function() {
      var context = document.querySelector( 'section.content' )
      expect( $.first( '#dom div', context ).className ).toBe( 'text' )
    })

  })

  describe( 'singular', function() {

    it( 'as the third argument returns an array with just the first element found', function() {
      expect( $.find( '#dom div', document, true ).length ).toBe( 1 )
    })

  })

})

describe( 'first()', function() {

  it( 'returns the first element found form a selector', function() {
    var result = $.first( '#dom div' )
    expect( result instanceof Element ).toBeTruthy()
  })

  it( 'returns the first element found form an array', function() {
    expect( $.first([ 1, 2, 3 ]) ).toBe( 1 )
  })

})