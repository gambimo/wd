$('nav>ul>li').hover(function(){
    $('.submenu').stop().slideToggle();
});

setInterval(function () { 
    $("#slide>ul").delay('2500'); 
    $("#slide>ul").animate({marginTop: '-300px'}, '500'); 
    $("#slide>ul").delay('2500'); 
    $("#slide>ul").animate({marginTop: '-600px'}, '500'); 
    $("#slide>ul").delay('2500'); 
    $("#slide>ul").animate({marginTop: '0'}, '500'); 
});