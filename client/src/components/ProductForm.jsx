import React, {useState} from 'react';

import axios from 'axios';

export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res=>{ 
                console.log("Response: ", res)
                setTitle("")
                setPrice("")
                setDescription("")
                props.onNewFormSubmit()
            })
            .catch(err=>console.log("Error: ", err))
    }
    return (
        <div className="container w-50 shadow p-3 my-5 bg-body rounded">
            <h3>Add Product</h3>
            <form onSubmit={onSubmitHandler}>
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

