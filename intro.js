$(document).ready(function(){
    $('#magic_container').hide().fadeIn(3000, function(){
        $('p').hide().fadeIn(1000).text('Jquery worked');
        $('#magic_container').hide().fadeIn(1000).css("background-color","blue");
    });
});