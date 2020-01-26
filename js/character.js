$(document).ready(function(){
    var gallImg = [];
    $('#character-images img').each(function(){
        var imgSrc = $(this).attr('src');
        gallImg.push(imgSrc);
    });
    $('#character-images img').click(function(){
        var counter;
        var image = $(this).attr('src');
        $('#loader').css({display:'block',background:'rgb(103,188,214,.75)'});
        var gallery = $('<div class="gallery"><img src="' + image + '" /><div id="left" class="arrow"></div><div id="right" class="arrow"></div><div id="close">x</div></div>');
        $('#loader').html(gallery);
        for (i = 0; i < gallImg.length; i++) {
            if (gallImg[i] == image) {
                counter = i;
            }
        }
        $('.arrow').on('click', function(){
            if ($(this).attr('id') === 'right') {
                counter = increase(counter);
            } else if ($(this).attr('id') === 'left') {
                counter = decrease(counter);
            }
            $('.gallery img').attr('src',gallImg[counter]);
        });
        $('#close').on('click', function(){
            $('#loader').css('display','none');
        });
        function increase(num) {
            num++;
            if (num > gallImg.length - 1) {
                num = 0;
            }
            return num;
        }
        function decrease(num) {
            num--;
            if (num == -1) {
                num = gallImg.length - 1;
            }
            return num;
        }
    });
});