import React,{useState} from 'react'


const List = () => {
    const [pokemon, setPokemon] = useState([]);
    const fetchPokemon = () => { 
            fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0%22")
                .then(response => response.json())
                .then(response => setPokemon(response.results))
                .catch(error=>console.error(error));
}
    return (
        <div>
            <button onClick = {fetchPokemon} >Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
        </div>
    )
}

export default List;