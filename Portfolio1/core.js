
$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 50000); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
/* parallax*/
$(window).on('mousemove', function(e){
	var w = $ (window).width();
	var h = $ (window).height();
	var offsetX =0.5 - e.pageX / w;
	var offsetY = 0.5 - e.pageY / h;
	$(".parallax").each(function(i,el){
		var offset = parseInt ($(el).data('offset'));
		var translate = "translate3d(" + Math.round( offsetX * offset)
		+"px," + Math.round (offsetY * offset) + "px, 0px";
		$(el).css({
			'transform':translate
		}) 
	})
})

/*preloader*/

/*jQuery(document).ready(function($) {
  $(window).load(function() {
    setTimeout(function() {
      $('#preloader').fadeOut('slow', function() {});
    }, 2000);

  });
});

/* slider*/
$(document).ready(function(){
	$('.next').click(function(){
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.img').eq(nextImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass('curry')

		if(nextImageIndex == ($('.img:last').index()+1)){
		$('.img').eq(0).fadeIn(1000);
		$('.img').eq(0).addClass('curry');
	}else{
		nextImage.fadeIn(1000);
		nextImage.addClass('curry');
	}
	});
});

$('.prev').click(function(){
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.img').eq(prevImageIndex);

		currentImage. fadeOut(1000);
		currentImage.removeClass('curry')
		prevImage.fadeIn(1000);
		prevImage.addClass('curry');
	});

/*--------------------------------*/
/*-----textarea--------------*/

/*-----------------------------*/
