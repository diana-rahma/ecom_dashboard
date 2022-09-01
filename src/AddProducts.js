import Header from "./Header";
import { useState } from 'react';

function AddProducts() {
    const [name, setName]=useState("");
    const [price, setPrice]=useState("");
    const [description, setDescription]=useState("");
    const [file, setFile]=useState("");
    return(
        <div>
            <Header/>
            <h1>Add Products</h1>
            <div className="col-sm-6 offset-sm-3">
                <br/>
                <input type="text" className="form-control" placeholder="Name"></input>
                <br/>
                <input type="text" className="form-control" placeholder="Price"></input>
                <br/>
                <input type="text" className="form-control" placeholder="Description"></input>
                <br/>
                <input type="file" className="form-control" placeholder="File"></input>
                <br/>
                <button className="btn btn-primary">Add Product</button>
            </div>
        </div> 
    );
}

export default AddProducts;