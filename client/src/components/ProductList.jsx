import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
const ProductList = (props) => {

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                props.onNewFormSubmit()
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="text-center container">

            {/* {props.products&& 
            props.products.map( (product, i) =>
                <div className="d-flex align-items-center justify-content-center">
                    <p key={i}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </p>
                    <button className="btn btn-dark ms-3" onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </div>

            )} */}
        <div className="d-flex align-items-center justify-content-center">
            <table>
                <thead>
                <tr>
                    <th className="me-2"> Product</th>
                    <th colSpan={2}> Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.products &&
                    props.products.map((product, i)=>(
                        <tr key={i}>
                        <td> <Link to={`/products/${product._id}`}>{product.title}</Link></td>
                        <td> <button className="btn btn-sm btn-dark" onClick={()=>deleteProduct(product._id)}>Delete</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>




        </div>
    )
}
    
export default ProductList;
