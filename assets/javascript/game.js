
//assign global variable 
var wins=0;
var losses=0;
var totalScore=0;
var score=0;
var playersGuess="";
userTotal = 0;

//assign to html
$("#wins").html(wins);
$('#losses').html(losses);
$('#score').html(score);
$('#userTotal1').html(userTotal);

function reset()
{
    var randomeNumber = Math.floor(Math.random() * 101) + 19;
   // console.log (randomeNumber);
    $('#randomNumber').html(randomeNumber);

//The player will have to guess the answer. This time, though, the player will guess with numbers instead of letters. 
//Each crystal should have a random hidden value between 1 - 12.
    var cry1 = Math.floor(Math.random() * 11) + 1;
    var cry2 = Math.floor(Math.random() * 11) + 1;
    var cry3 = Math.floor(Math.random() * 11) + 1;
    var cry4 = Math.floor(Math.random() * 11) + 1;
    userTotal=0;
}


//The random number shown at the start of the game should be between 19 - 120.

    var randomeNumber = Math.floor(Math.random() * 101) + 19;
    //console.log (randomeNumber);
    $('#randomNumber').html(randomeNumber);

//The player will have to guess the answer. This time, though, the player will guess with numbers instead of letters. 
//Each crystal should have a random hidden value between 1 - 12.
    var cry1 = Math.floor(Math.random() * 11) + 1;
    var cry2 = Math.floor(Math.random() * 11) + 1;
    var cry3 = Math.floor(Math.random() * 11) + 1;
    var cry4 = Math.floor(Math.random() * 11) + 1;


    
//There will be four crystals displayed as buttons on the page.
$('#red').on ('click', function(){
    userTotal = userTotal + cry1;
    console.log("New userTotal= " + userTotal);
    $('#score').html(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomeNumber){
           
            wins++; 
            $('#wins').html(wins);
            reset();
        }
        else if ( userTotal > randomeNumber){
            losses++; 
            $('#losses').html(losses);
            reset();
        }   
  })  
  $('#blue').on ('click', function(){
    userTotal = userTotal + cry2;
    console.log("New userTotal= " + userTotal);
    $('#score').html(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomeNumber){
           
            wins++; 
            $('#wins').html(wins);
            reset();
        }
        else if ( userTotal > randomeNumber){
            losses++; 
            $('#losses').html(losses);
            reset();
        }   
  })  
  $('#yellow').on ('click', function(){
    userTotal = userTotal + cry3;
    console.log("New userTotal= " + userTotal);
    $('#score').html(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomeNumber){
          
          wins++; 
        $('#wins').html(wins);
        reset();

        }
        else if ( userTotal > randomeNumber){
         
          losses++; 
          $('#losses').html(losses);
          reset();
  
        }   
  })
  $('#green').on ('click', function(){
    userTotal = userTotal + cry4;
    console.log("New userTotal= " + userTotal);
    $('#score').html(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomeNumber){
           
            wins++; 
            $('#wins').html(wins);
            reset();
        }
        else if ( userTotal > randomeNumber){
            losses++; 
            $('#losses').html(losses);
            reset();
        }   
  })    


    
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


//Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.


//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

//The game restarts whenever the player wins or loses.


//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

