var container = $(window);
// var scrollPosition =  0;
container.scroll(function() {
//     scrollPosition =  $(document).scrollTop()
//         var menu = document.getElementById("menu");
//         menu.style.paddingTop = scrollPosition + 'px';

    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

// var menu = document.getElementById("menu-icon").addEventListener("click", function(e){
//     console.log(scrollPosition);
//      var content = document.getElementById("content");
//      var value = 'translateY('+-scrollPosition+'px)';
//     console.log(value);
//     content.style.transform = value;
//     
// //         console.log(content.style.transform);
// });