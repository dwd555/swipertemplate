function setSize(){
  var h=document.documentElement.clientHeight;
  $('.swiper-container').css('height',h);   
}
function init(){
  $('document').ready(function(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
  })
}
function addImages(){
  $('.swiper-image').each(function(k){
     $(this).css('backgroundImage','url(img/bg-'+(k+1)+'.jpg)');
  })
}
$(function(){
  init();
  setSize();
  $(window).resize(function(){
    init();
    setSize();
  })
  addImages();
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: false,
    onTouchStart:function(swiper,even){
      if(swiper.progress==0){
        swiper.lockSwipeToPrev()
      }else if(swiper.progress==1){
        swiper.lockSwipeToNext()
      }else{
        swiper.unlockSwipes()
      }
    },
  })
  $('.musicBtn').musicBtn({
    'imgonSrc': 'img/musicon.png',
    'imgoffSrc': 'img/musicoff.png',
  });
})

