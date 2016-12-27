var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});

imagesLoaded( elem, callback )
// options
imagesLoaded( elem, options, callback )
// you can use `new` if you like
new imagesLoaded( elem, callback )