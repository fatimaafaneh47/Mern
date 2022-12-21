import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const Update = (props) => {
const { id } = useParams();
const [product, setProduct] = useState();
const [loaded, setLoaded] = useState(false);
const navigate =useNavigate();

useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        }).catch(err=>console.log(err))
}, [ ]) 
const updateProduct = product => {
    axios.put('http://localhost:8000/api/products/'+id, product)
        .then(res => console.log(res))
        .catch(err => console.error(err));
        navigate("/products/"+id);
}
return (
    <div>
        <h2>Edit a Product</h2>
        {loaded && (<>
            <ProductForm handelSubmit={updateProduct}
             initialTitle={product.title} 
             initialPrice={product.price}
            initialDescription={product.description}/>
        </>
        )}
    </div>
)
}
export default Update;
