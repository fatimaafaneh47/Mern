import axios from 'axios';
import React,{useState} from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const getPokemon = (e) => {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0%22")
                .then((response) => {
                    setPokemon(response.data.results);
                })
                
}
    return (
        <div>
            <button onClick = {getPokemon} >Fetch Pokemon</button>
            {pokemon.map ((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
        </div>
    )
}

export default Pokemon;