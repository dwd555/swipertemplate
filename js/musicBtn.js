(function ($) {
    $.fn.musicBtn = function (options) {
        var settings = $.extend({
            'imgonSrc': 'null',
            'imgoffSrc': 'null',
            'audioId':'null'
        }, options);
        var img=this.children('img')
        var music;
        if(settings.audioId!=='null'){
        	music=document.getElementById(settings.audioId);
        }else{
        	music=this.children('audio')[0]||this.children('video')[0];
        }
        if(!img.hasClass('rotateOn')){
        	img.addClass('rotateOn');
        }   
        this.click(function(){
        	if(music.paused){
	        img.addClass('rotateOn');
	        if(settings.imgoffSrc!=='null'){
	        	img[0].src=settings.imgonSrc;
	    	}
	        music.play();
	    }else{
	        img.removeClass('rotateOn');
	        if(settings.imgoffSrc!=='null'){
	        	img[0].src=settings.imgoffSrc;
	    	}
	        music.pause();
      	}
        })
    };
})(jQuery);