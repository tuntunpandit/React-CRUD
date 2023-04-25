const AddEditProduct = ({ product, action }) => {
  console.log("Product", product);
  console.log("Action", action);
  return (
    <div className="container my-4">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input type="number" className="form-control" id="rating" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="description" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input type="number" className="form-control" id="price" />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEditProduct;
