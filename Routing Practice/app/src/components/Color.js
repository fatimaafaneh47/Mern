import React from 'react'

const Color = (props) => {
    
  return (
    <div>
      <p style={{color:(props.variable1),backgroundColor:(props.variable2)}}>the world is {props.variable}</p>
    </div>
  )
}

export default Color;