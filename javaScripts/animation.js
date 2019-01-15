
  var img = $('.avatar');
  var pop = $('.popup');

img.on('mouseenter', function(img) {
  $(this).next().css("display", "block")
});

img.on('mouseleave', function(){
  $(this).next().css("display", "none")
});
