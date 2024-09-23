import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { FavouritesProvider } from "./context/FavouritesContext";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Favourites from "./pages/Favourites/Favourites";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <ProductProvider>
        <UserProvider>
          <CartProvider>
            <FavouritesProvider>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:itemNumber" element={<Product />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/favourites" element={<Favourites />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </FavouritesProvider>
          </CartProvider>
        </UserProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
