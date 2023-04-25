import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
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
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  function addProduct() {
    setModalStatus(true);
    setAction("add");
  }

  function updateProduct(productId) {
    setModalStatus(true);
    setAction("edit");
    const selected = products.filter((product) => product.id === productId);
    setSelectedProduct(selected);
  }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 mt-5">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Latest Products</h2>
              <span>Total : {products.length}</span>
              <button className="btn btn-secondary" onClick={addProduct}>
                Add Product
              </button>
            </div>
            {products?.map((product) => (
              <Product
                key={product.id}
                product={product}
                updateProduct={updateProduct}
              />
            ))}
          </div>
          {modalStatus ? (
            <div className="col-md-4 ps-5 mt-5">
              <h2 className="text-capitalize">{action} Product</h2>
              <AddEditProduct action={action} product={selectedProduct} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductList;
