$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
});

$('.container').imagesLoaded( function() {
  // images have loaded
});

// options
$('.container').imagesLoaded( {
  // options...
  },
  function() {
    // images have loaded
  }
);
