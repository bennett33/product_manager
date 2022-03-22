import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div className="text-center">
            {
                product&&
                <div>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            }
        </div>
    )
}
    
export default Detail;

