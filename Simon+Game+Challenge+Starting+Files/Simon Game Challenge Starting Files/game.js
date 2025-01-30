//alert("welcome home");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;



$(document).keypress(function(){
   if(started === false){
      $("#level-title").text("Level  " + level);
      nextSequence();

      started = true;
   }
});




$(".btn").click(function() {

   var userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   //console.log(userClickedPattern);

   playSound(userChosenColour);
});

function nextSequence() {

   level++;

   $("#level-title").text("Level  " + level);

   var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);  

   playSound(userChosenColour);
}


function playSound(name){
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
}




//adding animatoin  to th ebtn clicked and removing that:
$(".btn").click(function() {
   var userChosenColour = $(this).attr("id");
   animatePress(userChosenColour);
 });
 //Now it should work when you use:
 
 function animatePress(currentColour) {
   $("#" + currentColour).addClass("pressed");
 
   //how you can use Javascript to remove the pressed class after a 100 milliseconds.
   setTimeout(function(){
      $("#" + currentColour).removeClass("pressed");
 }, 100);
}