
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { navigate } from '@reach/router'

const Person = (props) => {
    const[people,setPeople]=useState("")
    const[planets,setPlanets]=useState("")

    useEffect(() =>{
          
        axios.get("https://swapi.dev/api/"+props.type+"/"+props.id)
          .then(response => {
                  if(props.type=="people"){
                  setPeople(response.data)
                  }
                  else{
                    setPlanets(response.data)}
            
           
        }).catch(()=>{
            navigate("/error")
        })},[props.id])
  return (
    <div>
        {props.type=="people"? <div> <h1>{people.name}</h1>
                <p>hight:{people.height}</p>
                <p>mass:{people.mass}</p>
                <p>hair color:{people.hair_color}</p>
                <p>skin color:{people.skin_color}</p></div>:props.type=="planets"?  <div>
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
