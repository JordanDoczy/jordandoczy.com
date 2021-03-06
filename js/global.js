$(window).scroll(function() {
    if ($(document).scrollTop() > 20) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

$( document ).ready(function() {
    
    var menu_open = document.getElementById("menu-open");
    menu_open.addEventListener("click", function(e){
        var content = document.getElementById("content");
        content.style.position = "fixed";
        var menu = document.getElementById("menu");
        menu.style.opacity = "0.98";
        menu.style.zIndex = "100";
    });
    
    var menu_close = document.getElementById("menu-close");
    menu_close.addEventListener("click", function(e){
        var content = document.getElementById("content");
        content.style.position = "";
        content.style.transform = "";
        
        var menu = document.getElementById("menu");
        menu.style.opacity = "0";
        menu.style.zIndex = "-1";
    });
    
    window.onhashchange = function() {
        window.scrollTo(0,0);
        location.reload();
    }
});

function isIE() {
  return window.navigator.userAgent.indexOf('MSIE') > 0;
}
function isTrident() {
  return window.navigator.userAgent.indexOf('Trident') > 0;
}
function isEdge() {
  return window.navigator.userAgent.indexOf('Edge') > 0;
}
