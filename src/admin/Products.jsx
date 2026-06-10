import { useState, useEffect } from "react";

import {
  saveProduct,
  getProducts,
  deleteProduct,
  updateProduct
} from "../axios";

function Products() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });

  const [products, setProducts] = useState([]);

  const [editId, setEditId] = useState(null);

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts = async () => {

    try {

      const data =
        await getProducts();

      setProducts(data);

    }
    catch(error){

      console.log(error);

    }

  };

  const handleSave = async () => {

    try {

      if(editId){

        await updateProduct(
          editId,
          product
        );

        alert("Product Updated");

        setEditId(null);

      }
      else{

        await saveProduct(product);

        alert("Product Saved");

      }

      setProduct({
        name: "",
        price: "",
        category: "",
        image: ""
      });

      loadProducts();

    }
    catch(error){

      console.log(error);

    }

  };

  const handleEdit = (item) => {

    setProduct({
      name: item.name,
      price: item.price,
      category: item.category,
      image: item.image
    });

    setEditId(item._id);

  };

  const handleDelete = async(id) => {

    try {

      await deleteProduct(id);

      alert("Product Deleted");

      loadProducts();

    }
    catch(error){

      console.log(error);

    }

  };

  return (

    <div>

      <h2>Products</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e)=>
          setProduct({
            ...product,
            name:e.target.value
          })
        }
      />

      <br /><br />

      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e)=>
          setProduct({
            ...product,
            price:e.target.value
          })
        }
      />

      <br /><br />

      <select
        value={product.category}
        onChange={(e)=>
          setProduct({
            ...product,
            category:e.target.value
          })
        }
      >

        <option value="">
          Select Category
        </option>

        <option value="Veg">
          Veg
        </option>

        <option value="NonVeg">
          NonVeg
        </option>

      </select>

      <br /><br />

      <input
        type="text"
        placeholder="Image"
        value={product.image}
        onChange={(e)=>
          setProduct({
            ...product,
            image:e.target.value
          })
        }
      />

      <br /><br />

      <button onClick={handleSave}>
        {editId
          ? "Update Product"
          : "Save Product"}
      </button>

      <hr />

      <h3>Product List</h3>

      {
        products.map((item) => (

          <div
            key={item._id}
            style={{
              border:"1px solid #ddd",
              padding:"10px",
              marginBottom:"10px",
              borderRadius:"8px"
            }}
          >

            <h4>{item.name}</h4>

            <p>
              Price : ₹{item.price}
            </p>

            <p>
              Category : {item.category}
            </p>

            <p>
              Image : {item.image}
            </p>

            <button
              onClick={() =>
                handleDelete(item._id)
              }
            >
              Delete
            </button>

            <button
              onClick={() =>
                handleEdit(item)
              }
              style={{
                marginLeft:"10px"
              }}
            >
              Edit
            </button>

          </div>

        ))
      }

    </div>

  );
}

export default Products;