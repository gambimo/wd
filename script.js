    //메뉴네비게이션 
    $("nav>ul>li").mouseenter(function () { 
        $(".submenu").stop().slideDown('slow'); 
        $(".menu_bg").stop().slideDown('slow'); }); 
    $("nav>ul>li").mouseleave(function () { 
        $(".submenu").stop().slideUp('slow'); 
        $(".menu_bg").stop().slideUp('slow'); });

    //좌우롤링배너 
    start(); 
    var imgs = $('#slide_img_wrap img').length; 
    var now = 0; var width = 1200; 
    function start(){ $('#slide_img_wrap>img') .eq(0).siblings().css('margin-left',-width*now+"px"); 
    setInterval(function(){slide();},2000); }; 
    function slide(){ now = now == imgs ? 0 : now += 1; 
        $('#slide_img_wrap>img:first-child') .eq(now-1).animate({marginLeft:-width*now+"px"},300); 
        $('#slide_img_wrap>img:first-child') .eq(now-2).animate({marginLeft:-width*now+"px"},300); 
        $('#slide_img_wrap>img:first-child') .eq(now).css('margin-left','0px'); };

    //탭메뉴 
    $('#tab_menu>ul>li:first-child').click(function () { 
        $('.notice').show(); //notice나타나기 
        $('.gallery').css('display', 'none'); //gallery 숨기기 

    $('#tab_menu>ul>li:first-child>a').css({ 
        'background': 'white', 'text-decoration': 'underline', 'color' : '#E66B27' }); 
        
    $('#tab_menu>ul>li:last-child>a').css({ 
        'background': 'silver', 'text-decoration': 'none', 'color' : '#333333' }); }); 
        
    $('#tab_menu>ul>li:last-child').click(function () { 
        $('.notice').css('display', 'none'); 
        $('.gallery').show(); 
        
        $('#tab_menu>ul>li:last-child>a').css({ 
            'background': 'white', 'text-decoration': 'underline', 'color' : '#E66B27' }); 
        $('#tab_menu>ul>li:first-child>a').css({ 
            'background': 'silver', 'text-decoration': 'none', 'color' : '#333333' }); 
    });
