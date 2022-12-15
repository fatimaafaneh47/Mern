
    import React, { useEffect, useState } from "react";
    import axios from 'axios';

    const Person = (props) => {
        const[people,setPeople]=useState("")
        const[planets,setPlanets]=useState("")

        useEffect(() =>{
            
            axios.get("https://swapi.dev/api/"+props.search+"/"+props.id)
            .then(response => {
                    if(props.search=="people"){
                    setPeople(response.data)
                    }
                    else{
                        setPlanets(response.data)}
            })},[props.id])       
    return (
        <div>
            {props.search=="people"? <div> <h1>{people.name}</h1>
                    <p>hight:{people.height}</p>
                    <p>mass:{people.mass}</p>
                    <p>hair color:{people.hair_color}</p>
                    <p>skin color:{people.skin_color}</p></div>:props.search=="planets"?  <div>
                    <h1>{planets.name}</h1>
                    <p>climate:{planets.climate}</p>
                    <p>terrain:{planets.terrain}</p>
                    <p>surface_water:{planets.surface_water}</p>
                    <p>population:{planets.population}</p>
                    </div>:<></>}           
        </div>
    )
    }
    export default Person;
