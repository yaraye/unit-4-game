
//assign global variable 
var wins=0;
var losses=0;
var totalScore=0;
var score=0;
var playersGuess="";
var userTotal = 0;



$( document ).ready(function()
{

var randomeNumber = Math.floor(Math.random() * 101 + 19);
//console.log (randomeNumber);
$('#randomNumber').html(randomeNumber);

//The player will have to guess the answer. This time, though, the player will guess with numbers instead of letters. 
//Each crystal should have a random hidden value between 1 - 12.
    var cry1 = Math.floor(Math.random() * 11 + 1);
    var cry2 = Math.floor(Math.random() * 11 + 1);
    var cry3 = Math.floor(Math.random() * 11 + 1);
    var cry4 = Math.floor(Math.random() * 11 + 1);

    function reset()
    {
        randomeNumber = Math.floor(Math.random() * 101 + 19);
       // console.log (randomeNumber);
        $('#randomNumber').html(randomeNumber);
    
    //The player will have to guess the answer. This time, though, the player will guess with numbers instead of letters. 
    //Each crystal should have a random hidden value between 1 - 12.
        cry1 = Math.floor(Math.random() * 11 + 1);
        cry2 = Math.floor(Math.random() * 11 + 1);
        cry3 = Math.floor(Math.random() * 11 + 1);
        cry4 = Math.floor(Math.random() * 11 + 1);
         userTotal= 0; 
         $('#score').html(userTotal);
    
    }  

//The random number shown at the start of the game should be between 19 - 120.

function CalculateGame(userTotal)
{
    $('#score').html(userTotal); 
    //sets win/lose conditions
  if (userTotal ==randomeNumber){
     
      wins++; 
      $('#wins').html(wins);
      reset();
  }
  else if ( userTotal > randomeNumber){
      losses++; 
      $('#losses').html(losses);
      reset();
  }

}

    
//There will be four crystals displayed as buttons on the page.
$('#red').on ('click', function(){
    userTotal = userTotal + cry1;
   CalculateGame(userTotal);
         
  })  
  $('#blue').on ('click', function(){
    userTotal = userTotal + cry2;
    console.log(cry2);
    CalculateGame(userTotal);
         
  })  
  $('#yellow').on ('click', function(){
    userTotal = userTotal + cry3;
    CalculateGame(userTotal);
         
  })
  $('#green').on ('click', function(){
    userTotal = userTotal + cry4;
    CalculateGame(userTotal);
         
  })    

})
