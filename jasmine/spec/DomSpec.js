describe( 'appendTo()', function() {

  it( 'it appends elements to the given element', function() {
    var element = document.createElement( 'div' )
    $.attr( element, 'id', 'appendee' )
    $.appendTo( element, '#dom' )
    expect( $.first( '#dom' ).lastChild ).toBe( element )
  })

  it( 'it appends a html string to the given element', function() {
    var element = '<p id="appendee">Apendee</p>'
    $.appendTo( element, '#dom' )
    expect( $.first( '#dom' ).lastChild.id ).toBe( 'appendee' )
  })

  it( 'returns the appended list of elements', function() {
    var div = document.createElement( 'div' )
    var appended = $.appendTo( div, '#dom' )
    expect( Array.isArray( appended ) ).toBeTruthy()
    expect( appended.length ).toBe( 1 )
  })

})


describe( 'prependTo()', function() {

  it( 'it prepends an element to the given element', function() {
    var element = document.createElement( 'div' )
    $.attr( element, 'id', 'prependee' )
    $.prependTo( element, '#prepend' )
    expect( $.first( '#prepend' ).children[0] ).toBe( element )
  })

  it( 'it prepends a html string to the given element', function() {
    var element = '<p class="prependee">Prependee</p>'
    $.prependTo( element, '#prepend' )
    expect( $.first( '#prepend' ).children[0].classList ).toContain( 'prependee' )
  })

  it( 'returns the prepended list of elements', function() {
    var div = document.createElement( 'div' )
    var prepended = $.prependTo( div, '#dom' )
    expect( Array.isArray( prepended ) ).toBeTruthy()
    expect( prepended.length ).toBe( 1 )
  })

})


describe( 'insertAt()', function() {

  it( 'it inserts an element in the given element at a certain position', function() {
    var element = document.createElement( 'div' )
    $.attr( element, 'id', 'insertee' )
    $.insertAt( element, '#insert', 2 )
    expect( $.first( '#insert' ).children[2] ).toBe( element )
  })

  it( 'it inserts an element list in the given element at a certain position', function() {
    var one = document.createElement( 'article' )
      , two = document.createElement( 'aside' )
      , three = document.createElement( 'bdi' )
      , parent = $.first( '#insert_many' )

    $.insertAt( [ one, two, three ], parent, 2 )

    expect( parent.children[2] ).toBe( one )
    expect( parent.children[3] ).toBe( two )
    expect( parent.children[4] ).toBe( three )
    expect( parent.children[5].innerText ).toBe( 'last' )
  })

  it( 'returns the prepended list of elements', function() {
    var div = document.createElement( 'div' )
    var prepended = $.insertAt( div, '#dom', 2 )
    expect( Array.isArray( prepended ) ).toBeTruthy()
    expect( prepended.length ).toBe( 1 )
  })

})


describe( 'remove()', function() {

  it( 'it removes elements from the dom', function() {
    var div = document.createElement( 'div' )
    $.appendTo( div, '#remove' )
    expect( $.first( '#remove' ).lastElementChild ).toBe( div )
    $.remove( div )
    expect( $.first( '#remove' ).lastElementChild.innerText ).toBe( 'last' )
  })

  it( 'returns the removed list of elements', function() {
    var div = document.createElement( 'div' )
    $.appendTo( div, '#remove' )
    var removed = $.remove( div )
    expect( Array.isArray( removed ) ).toBeTruthy()
    expect( removed.length ).toBe( 1 )
    expect( removed[0] ).toBe( div )
  })

})