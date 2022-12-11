import React ,{useState} from 'react'

const btnStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'black', 
    color: 'white',
    border: 'none',
};
const text={
    width:"400px",
    height:"80px",
    border:"1px solid black",
    textAlign:'center',
    margin:'200px 400px 200px 700px',
    fontSize:'20px',
    fontFamily: 'Arial, sans-serif',
    textAlign:'center',
    padding:'50px 15px',
    
};


const manytabs = ["tab1","tab2","tab3"];


const Tabs = (props) => {
    const[tabData,setTabData]=useState("");
    const onClickHandler = (e, value) => {
       setTabData(value+" "+"content is showing here")
    }
 
    return(
        <div>

            { manytabs.map( (item, index) => {
        return <button style={ btnStyle } onClick={ (e) => onClickHandler(e, item) }>{ item }</button>
    })}
    
    <div style={text}>
    {tabData}
    </div>
    </div>
       
    )
}
export default Tabs
