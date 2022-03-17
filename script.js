$("nav>ul>li").mouseenter(function () { 
    $(".sub_menu").stop().slideDown('slow'); 
    $(".menu_bg").stop().slideDown('slow'); 
}); 

$("nav>ul>li").mouseleave(function () { 
    $(".sub_menu").stop().slideUp('slow'); 
    $(".menu_bg").stop().slideUp('slow'); 
});

setInterval(function () { 
    $("#slide_wrap").delay('2500'); 
    $("#slide_wrap").animate({ marginTop: "-300px" }, '700'); 
    $("#slide_wrap").delay('2500'); 
    $("#slide_wrap").animate({ marginTop: "-600px" }, '700'); 
    $("#slide_wrap").delay('2500'); 
    $("#slide_wrap").animate({ marginTop: "0" }, '700'); 
});

alert("hello javascript");