$(window).on('load', function() {
    $('#loader').fadeOut('slow');
  });

$(document).ready(function(){
  var path = $('#loader path');
  var totalPaths = path.length;
  var y = 1;
  for (var i = 0; i < totalPaths; i++) {
      var length = path[i].getTotalLength();
      $('#loader path:nth-of-type(' + y + ')').css('fill','rgb(238, 206, 238)');
      $('#loader path:nth-of-type(' + y + ')').css('stroke','rgb(68, 67, 67)');
      $('#loader path:nth-of-type(' + y + ')').css('stroke-dasharray',length);
      $('#loader path:nth-of-type(' + y + ')').css('stroke-dashoffset',length);
      y++;
  }
  setTimeout(function(){
      $('#loader path').css('transition','4s');
      $('#loader path').css('stroke-dashoffset', 0);
  }, 1);
});