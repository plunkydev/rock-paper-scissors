//crear funcion de opcion que devolvera la computadora.
const getComputerChoice = () => {
   if(Math.floor(Math.random() * 3) === 1){
      return "piedra";
    } else if(Math.floor(Math.random() * 3) === 2) {
      return "papel";
    } else {
      return "tijeras";
    }
};
// crear variables para llevar la puntuacion del jugador y la cumputadora
let player = 0;
let computer = 0;
// Crear funcion playRound para comparar la desicion de player contra computer y asignar puntuacion al ganador
const playRound = (playerSelection, computerSelection) => {
playerSelection.toLowerCase();
  if(playerSelection === "piedra" && computerSelection === "tijeras") {
    player++;
    return "You win";
  } else if(playerSelection === "tijeras" && computerSelection === "papel") {
    player++;
      return "You win";
  } else if(playerSelection === "papel" && computerSelection === "piedra") {
    player++;
    return "You win";
  } else if(playerSelection === computerSelection) {
    return "Equal"
  } else {
    computer++;
    return "You loose"
  }
}
   //crear una funcion play para jugar 5 rondas y asignar pintuacion a player o a computer segun quien gane.

const game = (play) => {for(let i = 0;i<5;i++) {
playRound(play, getComputerChoice());}if(player > computer) {
    return "You win"
  } else {return "You lose"}
    
}
/*Test para comprobar si la aplicacion cunciona, se llamo
a la funcion play y se le paso como parametro la funcion getComputerChoice
para que la computadora juegue contra si misma
*/
console.log(game(getComputerChoice()));
console.log(game(getComputerChoice()));
console.log(game(getComputerChoice()));