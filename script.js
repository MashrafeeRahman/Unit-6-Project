$(".start-button").click(function() {
    $(".firstImage").hide();
    $(".title").hide();
    $(".button").hide();
    $(".act2").show();
});
 $(".message-2").dblclick(function(){
     $(".act2").hide(); 
     $(".Totodile").show();
});
$(".message-3").dblclick(function(){
     $(".act2").hide();
    $(".Torchic").show();
});
$(".message-4").dblclick(function(){
     $(".act2").hide();
    $(".Turtwig").show();
});
$(".Red3").mouseenter(function(){
    $(".Totodile").hide();
    $(".Battle").show();      
});
$(".Red").click(function(){
    $(".Turtwig").hide();
    $(".Battle-Turtwig").show();
});
$(".Red2").mouseleave(function(){
    $(".Torchic").hide();
    $(".Battle-Torchic").show();
});
$(".Energy-Ball").click(function(){
    $(".Battle-Turtwig").hide();
    $(".Lose").show();
    $(".Final-Battle-Lose").show();
});
$(".Water-Gun").click(function(){
    $(".Battle").hide();
    $(".Lose").show();
    $(".Final-Battle-Lose").show();
});
$(".Flamethrower").click(function(){
    $(".Battle-Torchic").hide();
    $(".Lose").show();
    $(".Final-Battle-Lose").show();
});
$(".Taunt").click(function(){
    $(".Battle-Torchic").hide();
    $(".Win").show();
    $(".Final-Battle-Win").show();
});
$(".Growl").click(function(){
    $(".Battle").hide();
    $(".Win").show();
    $(".Final-Battle-Win").show();
});
$(".Sleep").click(function(){
    $(".Battle-Turtwig").hide();
    $(".Win").show();
    $(".Final-Battle-Win").show();
});