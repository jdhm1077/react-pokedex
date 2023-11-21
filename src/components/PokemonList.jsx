import { useEffect, useState } from 'react';

const PokemonList = () => {
   const [allPokemonList, setAllPokemonList] = useState([]);
   
    useEffect ( () => {
     const getPokemon = async () => {
       const response = await fetch(`https://pokeapi.co/api/v2/ability/`);
       const responseJson = await response.json();
       const allPokemon = responseJson.results;
        setAllPokemonList(allPokemon);
        

     }       
     getPokemon (); 

    }, []);



    return (
        <>
             <h1>PokemonList</h1>
             {
                allPokemonList.map((singlePokemon) => {
                    return (
                   <li key={singlePokemon.name}>{singlePokemon.name}</li>
                    )
                } )
             }
        </>
    )

    }


export default PokemonList;
