import Product from "./pages/Product";
import Home from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CheckoutPage from "./pages/CheckoutPage";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  let user = useSelector((state) => state.user.currentUser);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={ <Register /> }/>
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<CheckoutPage />} /> {/* New Checkout Page Route */}
      </Routes>
    </Router>
  );
};

export default App;


