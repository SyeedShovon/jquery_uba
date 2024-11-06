// $(document).ready(function(){
//     $('#magic_container').hide().fadeIn(3000, function(){
//         $('p').hide().fadeIn(1000).text('Jquery worked');
//         $('#magic_container').hide().fadeIn(1000).css("background-color","blue");
//     });
// });


// $(document).ready(function(){
//     $('#animate_btn').click(function(){
//         $('.box').animate({
//             opacity: 0.7,
//             marginTop: '50px',
//             fontSize: '50px'
//         },1000);
//     });
// });


// $('ul li:selected').css('color','red');

// $('hover_btn').mouseenter(function(){
//     $('p').text('Hovered');
// });

// $(document).ready(function(){
//     $('#animate_btn').click(function(){
            // $('p').show(1000);
            // $('p').hide(1000);
            // $('p').slideDown(1000);
            // $('p').slideUp(1000);
//     });
// });

// $(document).ready(function(){
//     $('#box').hover(function(){
//         $(this).fadeIn(500).animate({
//             width: '+=50px'
//         });
//     });
// });


// $(document).ready(function(){
//     $('#box').click(function(){
//         $(this).fadeOut(500, function(){
//             $(this).animate({
//                 width: '+=50px',
//                 height: '+=50px'
//             },500, function(){
//                 $(this).fadeIn(500);
//             });
//         });
//     });
// });

//check hover

// $(document).ready(function(){
//     let headingText = $("h2").text();
//     console.log("Heading Text: ", headingText);

//     let imageUrl = $("#sampleImage").attr('src');
//     console.log("Image URL: ", imageUrl);

//     $("h2").prepend("<em>Updated <em>");
//     $("h5").html("<em>HTML added<em>");

// })


$(document).ready(function(){
    var newItemArray = ['Item A','Item B','Item C'];
    $.each(newItemArray, function(index,value){
        console.log("Index-"+index+" Val-"+value);
        $("#itemList").append("<li>"+value+"</>")
    });
});