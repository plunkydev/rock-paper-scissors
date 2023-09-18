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

 
 
 
