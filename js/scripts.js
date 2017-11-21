$(document).ready(function(){

  // hide #back-top first
  $("#gotop").hide();
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {
        $('#gotop').fadeIn('fast');
      } else {
        $('#gotop').fadeOut('fast');
      }
    });
	
  });
  
  $('#galeria-slider').after('<ul id="galeria-nav">').cycle({ 
    fx:     'scrollHorz', 
    speed:  'fast', 
    timeout: 0, 
    pager:  '#galeria-nav', 
    next:   '#galeria-next',  
    prev:   '#galeria-prev',

    // callback fn that creates a thumbnail to use as pager anchor 
    pagerAnchorBuilder: function(idx, slide) { 
      return '<li><a href="#"><img src="' + slide.src + '" width="178" height="100" /></a></li>'; 
    } 
  });
  
  $('#artists-carrousel').cycle({ 
    fx:     'scrollHorz', 
    speed:  'fast', 
    timeout: 0,  
    next:   '#artists-carrousel-controls .next',  
    prev:   '#artists-carrousel-controls .prev'
  });

  // tabs - especificaciones
  $(function() {
    $( "#tabs" ).tabs();
  });
      

});