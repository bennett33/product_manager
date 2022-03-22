import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                history.push('/products/')
            console.log(res)})
            .catch(err => console.error(err));
    }
    
    return (
        <div className="container w-50 shadow p-3 my-5 bg-body rounded">
            <h3>Update Product</h3>
            <form onSubmit={updateProduct}>
                <p>
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label className="form-label">Price</label>
                    <input className="form-control" type="text" name="price" value={price} onChange={e=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label className="form-label">Description</label>
                    <input className="form-control" type="text" name="description" value={description} onChange={e=>setDescription(e.target.value)}/>
                </p>
                <button className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}
    
export default Update;

