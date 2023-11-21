import { useEffect } from "react"
import App from "../App"

const PokemonList = () => {
    
   const url = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`;
    
   useEffect (() => {
        const getPuppies = async () => {
            const response = await fetch (url);
            const data = await response.json()
            console.log(data.data.players);
        }
        getPuppies ();
        
  });                    

  

   return (
    <div>
    <h2> Click on your Pokemon</h2>
    </div>
   )
}

export default PokemonList


const person = {
    name: "Bill",
    age: 56,
}
console.log(person.age);