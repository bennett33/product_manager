import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';



const Main =(props) => {

    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(true);
    
    function refreshAfterFormSubmit() {
        setRefresh(!refresh);
        console.log("refresh");
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>setProducts(res.data))
            .catch(err=>console.log(err))
    }, [refresh]);

    
    return (
        <>
            <ProductForm onNewFormSubmit={refreshAfterFormSubmit}/>
            <ProductList onNewFormSubmit={refreshAfterFormSubmit} products={products}/>
        </>
    )
}

export default Main;