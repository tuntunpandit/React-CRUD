import "./product.css";
const Product = ({ product, updateProduct, deleteProduct }) => {
  return (
    <>
      <div className="card my-4">
        <div className="card-body row d-flex align-items-center justify-content-center">
          <div className="prod-image col-md-2">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="description col-md-7 d-flex flex-column justify-content-start gap-1">
            <h5>{product.title}</h5>
            <p>{product.rating.rate}</p>
            <p title={product.description}>
              {product.description.substring(0, 100) + " ..."}
            </p>
          </div>
          <div className="actions col-md-3 d-flex flex-column gap-3">
            <h3>₹ {product.price}</h3>
            <button
              className="btn btn-warning"
              onClick={() => updateProduct(product.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
