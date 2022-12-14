import React,{useState} from 'react';

const Form=(props) => {
    const parent={
        display:"flex",
        hight:"200px"
    }
     const [colors,setColors]=useState([])
     const [color,setColor]=useState("")
     const [width,setWidth]=useState("")
     const [height,setHeight]=useState("")
     
     const handlesubmit=(e)=>{
        e.preventDefault()
         setColors([...colors,{'width':width+'px','height':height+'px','color':color}])
         setColor("")
        console.log(colors)
        console.log(e);
}
  return (
    <div>
      <form onSubmit={ handlesubmit }>
        <label>color</label>
        <input value={color} type="text" onChange={(e)=> setColor(e.target.value)}/>
        <label>width</label>
        <input  type="text" onChange={(e)=> setWidth(e.target.value)}/>
        <label>hieght</label>
        <input  type="text" onChange={(e)=> setHeight(e.target.value)}/>
        
        <button type='submit'>insert</button>
      </form>
      
        <div style={parent}>
      {colors.map((item,i)=><div key={i} style={{backgroundColor:item.color,width:item.width,height:item.height,margin:"40px"}} >{item.color}</div>)}</div>
    </div>
  )
}
export default Form
