import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
// import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div id="main">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          {/* <Route path="/add-product" element={<AddProduct />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
