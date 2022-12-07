import React from 'react'

function PersonCard(props) {
  return (
    <div>
        <h1>{props.fname},{props.lname}</h1>
        <p>Age:{props.age}</p>
        <p>Hair Color:{props.haircolor}</p>
    </div>
  )
}

export default PersonCard