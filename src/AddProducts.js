import Header from "./Header";
import { useState } from 'react';

function AddProducts() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

    async function addProduct() {
        console.warn(name, price, description, file);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append('description', description);
        formData.append("file", file);
        let result = await fetch("http://localhost:8000/api/addProduct",
            {
                method: 'POST',
                body: formData,
            });
        alert("Product added!");
    }

    return (
        <div>
            <Header />
            <h1>Add Products</h1>
            <div className="col-sm-6 offset-sm-3">
                <br />
                <input type="text" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                <br />
                <input type="text" className="form-control" placeholder="Price" onChange={(e) => setPrice(e.target.value)}></input>
                <br />
                <textarea className="form-control" placeholder="Description" onChange={(e) => setDescription(e.target.value)}>
                </textarea>
                <br />
                <input type="file" className="form-control" placeholder="File" onChange={(e) => setFile(e.target.value)}></input>
                <br />
                <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
            </div>
        </div>
    );
}

export default AddProducts;