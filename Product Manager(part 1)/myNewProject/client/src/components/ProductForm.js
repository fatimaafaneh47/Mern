import React ,{useState} from 'react';
import axios from 'axios';
export default props =>{
    const [title,setTitle]= useState("");
    const[price,setPrice]=useState();
    const[description,setDescription]=useState("");
    const onSubmitHandler= e=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

return (
    <form onSubmit={onSubmitHandler}>
        <h1>Product Manager</h1>
        <p>
            <label>Title</label>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title}></input>
        </p>
        <p>
            <label>Price</label>
            <input type="number" onChange={e=>setPrice(e.target.value)} value={price}></input>
        </p>
        <p>
            <label>Description</label>
            <input type="text" onChange={e=>setDescription(e.target.value)} value={description}></input>
        </p>
        <input type="submit"/>
    </form>
)
}
