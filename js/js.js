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

var $grid = $('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    // options...
  });
});