//crear funcion de opcion que devolvera la computadora.
 const getComputerChoice = () => {
   if(Math.floor(Math.random() * 3) === 1){
      return "piedra";
    } else if(Math.floor(Math.random() * 3) === 2) {
      return "papel";
    } else {
      return "tijeras";
    }
     }
 console.log(getComputerChoice());
 
 
 
