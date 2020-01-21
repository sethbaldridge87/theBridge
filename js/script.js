$(window).on('load', function() {
    // $('#loader').fadeOut('slow');
  });

$(document).ready(function(){
  var path = document.querySelectorAll('path');
  var totalPaths = path.length;
  var y = 1;
  for (var i = 0; i < totalPaths; i++) {
      var length = path[i].getTotalLength();
      $('path:nth-of-type(' + y + ')').css('fill','rgb(238, 206, 238)');
      $('path:nth-of-type(' + y + ')').css('stroke','#000');
      $('path:nth-of-type(' + y + ')').css('stroke-dasharray',length);
      $('path:nth-of-type(' + y + ')').css('stroke-dashoffset',length);
      y++;
  }
  setTimeout(function(){
      $('path').css('transition','4s');
      $('path').css('stroke-dashoffset', 0);
  }, 1);
});