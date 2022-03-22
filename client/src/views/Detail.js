import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
    
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
                    <h4>Product: {product.title}</h4>
                    <p>Desription: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <button className="btn btn-warning">
                        <Link to={"/products/" + product._id + "/edit"}>
                            Edit
                        </Link>
                    </button>
                </div>
            }
        </div>
    )
}
    
export default Detail;

