$('.menu_box>ul>li').mouseenter(function(){
    $(this).children('.submenu').animate({ width: "show"}, 100, "linear");
});
$('.menu_box>ul>li').mouseleave(function(){
    $(this).children('.submenu').fadeOut('fast');
});

setInterval(function(){
    $(".slide_box>ul").delay("2500");
    $(".slide_box>ul").animate({marginLeft:"-760px"},"700");
    $(".slide_box>ul").delay("2500");
    $(".slide_box>ul").animate({marginLeft:"-1520px"},"700");
    $(".slide_box>ul").delay("2500").appendTo('.slide_box>ul');
    $(".slide_box>ul").animate({marginLeft:"0"},"700");
    $(".slide_box>ul").delay("2500");
})