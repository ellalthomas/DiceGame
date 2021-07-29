//Dice game - version 1
//Ella Thomas
//27/07/21


//set number of points for both players
let point1 = 0
let point2 = 0
let player1Rolls6 = 0
let player2Rolls6 = 0

//ask players what number they rolled
do{

console.log('Please roll the dice. First to 5 points wins!');

let player1Number = prompt('Player 1 what number did you get?')
let player2Number = prompt('Player 2 what number did you get?')

//check if input is invalid
    while (player1Number >= 7){
      console.log('Sorry player1 number is invalid.');
      player1Number = prompt('Player 1 what number did you get?');
      }

    while (player2Number >= 7){
      console.log('Sorry player2 number is invalid.');
      player2Number = prompt('Player 2 what number did you get?');
      }

//comparing numbers
if (player1Number == player2Number) {
  console.log('You rolled the same number, No one gets a point')
}else if (player1Number < player2Number) {
  console.log('Player2 your number is bigger, You get a point!');
  point2 ++
  console.log('Player2 now has ' + point2 + ' points!');
  
}else if (player1Number > player2Number) {
  console.log('Player1 your number is bigger, You get a point!')
  point1 ++
  console.log('Player1 now has ' + point1 + ' points!');
}

if (player1Number == 2) {
  console.log('Player1 you get double points because you rolled a 2!')
  point1 ++
  point1 ++
  console.log('Player1 now has ' + point1 + ' points!');

} else if (player2Number == 2) {
  console.log('Player2 you get double points because you rolled a 2!')
  point2 ++
  point2 ++
  console.log('Player2 now has ' + point2 + ' points!');
}

} while (point1 < 5) {
}

//counting numer of 6's rolled for each player
if (player1Number == 6) {
  player1Rolls6 ++

} else if (player2Number == 6) {
  player2Rolls6 ++
} 

//adding 2 points for player who rolled the most 6's
if (player1Rolls6 > player2Rolls6) {
  point1 ++
  point1 ++
  console.log('Player1 you rolled the number 6 more so you get 2 extra points');
  console.log('Player1 now has ' + point1 + ' points!');

} else if (player1Rolls6 < player2Rolls6) {
  point2 ++
  point2 ++
  console.log('Player2 you rolled the number 6 more so you get 2 extra points');
  console.log('Player2 now has ' + point2 + ' points!');
}

//telling the players who won
if (point1 > point2){
  console.log('Player2 you only have ' + point2 + ' points');
  console.log('Player1 you have ' + point1 + ' points! You win!');

} else if (point1 < point2) {
  console.log('Player1 you only have ' + point2 + ' points');
  console.log('Player2 you have ' + point2 + ' points! You win!');
}
