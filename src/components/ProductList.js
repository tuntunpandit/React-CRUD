import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import "./product.css";
import AddEditProduct from "./AddEditProduct";
// import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [action, setAction] = useState("add");
  // const navigate = useNavigate();
  useEffect(() => {
    getAllProducts();
  }, []);
  function getAllProducts() {
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        setProducts(res.data.reverse());
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  function addProduct() {
    setModalStatus(true);
    setAction("add");
    setSelectedProduct([]);
  }

  function updateProduct(productId) {
    setModalStatus(true);
    setAction("edit");
    const selected = products.filter((product) => product.id === productId);
    setSelectedProduct(selected);
  }

  function deleteProduct(productId) {
    const permission = window.confirm("Are you sure?");
    if (permission) {
      axios
        .delete(`http://localhost:8000/products/${productId}`)
        .then((response) => {
          if (response.status === 200) {
            const newProductLists = products.filter(
              (product) => product.id !== productId
            );
            setProducts(newProductLists);
          }
        })
        .catch((err) => console.error(err));
    }
  }

  function updateProductsList(product, prodAction) {
    prodAction === "add"
      ? setProducts(...products, product)
      : updateSelectedProduct(product);
  }

  function updateSelectedProduct(product) {
    const index = products.findIndex((item) => item.id === product.id);
    console.log("index", index);
    products[index] = product;
    setProducts({ ...products });
  }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 mt-5">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Latest Products</h2>
              <span>Total : {products?.length}</span>
              <button className="btn btn-secondary" onClick={addProduct}>
                Add Product
              </button>
            </div>
            {products?.map((product) => (
              <Product
                key={product.id}
                product={product}
                updateProduct={updateProduct}
                deleteProduct={deleteProduct}
              />
            ))}
          </div>
          {modalStatus ? (
            <div className="col-md-4 ps-5 mt-5">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="text-capitalize">{action} Product</h2>
                <span className="cross" onClick={() => setModalStatus(false)}>
                  X
                </span>
              </div>
              <AddEditProduct
                action={action}
                product={selectedProduct}
                updateProductsList={updateProductsList}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductList;
