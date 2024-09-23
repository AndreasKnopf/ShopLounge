import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Vavorites from "./pages/Vavorites/Vavorites";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <ProductProvider>
        <UserProvider>
          <CartProvider>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:itemNumber" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/vavorites" element={<Vavorites />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </CartProvider>
        </UserProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
