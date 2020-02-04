$(document).ready(function() {
    $("p").hide();

    $("h1").click(function(){
        var temp = $(this).next();
        $(this).next().fadeIn("slow");

        $("p").not(temp).fadeOut();
    })

});


