import React from 'react'

const ListofComponents =(props) =>{
    
    
  return (
    
    <div>{isNaN(props.variable)? <p >The word is: {props.variable}</p>: <p>The number is: {props.variable}</p>} </div>
    

  )
}

export default ListofComponents ;