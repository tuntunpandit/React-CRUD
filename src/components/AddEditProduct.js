import { useState } from "react";
import axios from "axios";

const AddEditProduct = ({ product, action, updateProductsList }) => {
  console.log("Product", product);
  console.log("Action", action);
  function setInitalData(fieldName) {
    if (action === "add") {
      return "";
    }
    if (action === "edit") {
      console.log(`${fieldName}`, product[0][fieldName]);
      return product[0][fieldName];
    }
  }
  const [title, setTitle] = useState(setInitalData("title"));
  const [rating, setRating] = useState(setInitalData("rating"));
  const [description, setDescription] = useState(setInitalData("description"));
  const [price, setPrice] = useState(setInitalData("price"));
  function handleProduct(e) {
    e.preventDefault();
    const prodData = {
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating: {
        rate: rating,
      },
      title,
      description,
      price,
    };
    axios
      .post("http://localhost:8000/products", { ...prodData })
      .then((response) => {
        setTitle("");
        setRating("");
        setDescription("");
        setPrice("");
        // update product list in parent component
        updateProductsList(response.data, action);
      })
      .catch((err) => console.error(err));
  }
  return (
    <div className="container my-4">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            min={1}
            max={5}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success w-100"
          onClick={handleProduct}
        >
          {action === "add" ? "Submit" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default AddEditProduct;
