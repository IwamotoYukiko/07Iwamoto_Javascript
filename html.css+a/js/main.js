// javascriptを書く方はここから下に記述していってください
$(document).ready(function(){

    $(".titleText").fadeIn(4000);

    $(".slideSet").slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $(".button").on("click",function(){
        alert("申し込みありがとうございます。");
    });

    

 });
