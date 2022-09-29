import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.warn("result", data);

  async function getData() {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <Header />
      <h1>Product Lists</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table solid bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>

          {data.map((item) => (
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    style={{ width: 100 }}
                    src={"http://localhost:8000/" + item.file_path}
                    alt="foto_produk"
                  ></img>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default ProductList;