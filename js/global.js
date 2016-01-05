var container = $(window);
var scrollPosition =  0;
container.scroll(function() {
    scrollPosition =  $(document).scrollTop()
        var menu = document.getElementById("menu");
        menu.style.paddingTop = scrollPosition + 'px';

    if ($(document).scrollTop() > 50) {
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
        location.reload();
    }

    
});

