$(document).ready(function(){
    $('#magic_container').hide().fadeIn(3000, function(){
        $('p').text('Jquery worked');
        $('#magic_container').css("background-color","blue");
    });
});