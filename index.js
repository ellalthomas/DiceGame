//Dice game - version 1
//Ella Thomas
//27/07/21

//list of numbers ready to be rolled


console.log('Please roll the dice. First to 20 points wins!');

let point1 = 0
let point2 = 0


let player1Number = prompt('Player 1 what number did you get?')
let player2Number = prompt('Player 2 what number did you get?')

    while (player1Number >= 7){
      console.log('Sorry player1 number is invalid.');
      player1Number = prompt('Player 1 what number did you get?');
      }

    while (player2Number >= 7){
      console.log('Sorry player2 number is invalid.');
      player2Number = prompt('Player 2 what number did you get?');
      }


if (player1Number == player2Number) {
  console.log('You rolled the same number, No one gets a point')
}else if (player1Number < player2Number) {
  console.log('Player2 your number is bigger, You get a point!');
  point2 ++
  console.log('Your point now is ' + point2);
}else if (player1Number > player2Number) {
  console.log('Player1 your number is bigger, You get a point!')
  point1 ++
  console.log('Your point now is ' + point1);
}

