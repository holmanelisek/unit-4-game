$(document).ready(function() {
    //establish variables
    var crystalvalues = [0,0,0,0];
    var goalNumber = 0;
    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    
    //randomly set goal number between 19 and 120
    goalNumber = Math.floor(Math.random() * 101) + 19;  
    $("#randnum").html(goalNumber);
    
    $("#redbutton").click(function(){
        crystalclick(0);
      })
    $("#whitebutton").click(function(){
        crystalclick(1);
    })
    $("#greenbutton").click(function(){
        crystalclick(2);
    })
    $("#bluebutton").click(function(){
        crystalclick(3);
    })
    //runs when a crystal is clicked, with a variable indexing which crystal is selected
    function crystalclick(x){
        if(crystalvalues[x]==0){
            crystalvalues[x]=Math.floor(Math.random() * 12) + 1;
        }
        //add crystal value to playerScore
        playerScore = playerScore + crystalvalues[x];
        //update player score display
        $("#score").html(playerScore);
        //if player reaches or goes over the goal, they're starting a new game
        if(playerScore>=goalNumber){
            playerScore = 0;
            $("#score").html(playerScore);
            crystalvalues = [0,0,0,0];
            goalNumber = Math.floor(Math.random() * 101) + 19;
            $("#randnum").html(goalNumber);
            //if player reaches goal number, win!
            if(playerScore==goalNumber){
                wins++;
                $("#winner").html("Wins:"+wins);
            }
            //if they went over, lose
            else {
                losses++;
                $("#loser").html("Losses:" + losses);
            }
        }
        //otherwise, just go ahead and click again!
    }
});

//game start
//variables: crystal1value crystal2value crystal3value crystal4value crystalset(bool) goalNumber playerScore wins losses
//pick random value for randomGoalNumber
//when user clicks on any of the crystal buttons (class crystal)
//if crystalset false, randomly generate numbers 1-12 for each crystal
//add specific crystal value to playerScore
//update playerScore display
//if playerScore == goalNumber
//  wins++
//  update wins display
//  playerScore = 0
//  update playerScore display
//  crystalset=false
//  new goal number
//  update goalnumber display
//else if playerScore > goalNumber
//  losses ++
//  update losses display
//  playerScore = 0
//  update playerScore display
//  crystalset=false
//  new goal number
//  update goal number display