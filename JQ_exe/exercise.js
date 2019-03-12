$(document).ready(function(){

    $("#ex").fadeIn(4000);


     $('#first').on('click',function(){
        $('#ex>h1').fadeOut(); //演習じゃない
        $('#ex>p').html('かきくけこ');
        $('#ex').css('background-color','black');
        $('#ex').css('color','white');
    });

    $('#second').on('click',function(){
        $("#ex").prepend('<p>あいうえお</p>');
        $("#ex").append('<p>さしすせそ</p>');
    });

    $('#third').on('click',function(){
        $('#ex p:odd').css('background-color','white');
        $("#btn").fadeOut();
    });
    

 });