import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalFonts from "./fonts/fonts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/navigation/Navigation";
import Cart from "./components/views/cart/Cart";
import Home from "./components/views/home/Home";
import Admin from "./components/views/admin/Admin";
import Error404 from "./components/views/error404/Error404";
import CollectionsCreate from "./components/views/admin/collectionsCreate/CollectionsCreate";
import CollectionsUpdate from "./components/views/admin/collectionsUpdate/CollectionsUpdate";
import CollectionsProductCreate from "./components/views/admin/collectionsProductCreate/CollectionsProductCreate";
import CollectionsProductUpdate from "./components/views/admin/collectionsProductUpdate/CollectionsProductUpdate";
import HomeDataUpdate from "./components/views/admin/homeDataUpdate/HomeDataUpdate";
import HomeDataCreate from "./components/views/admin/homeDataCreate/HomeDataCreate";
import AllCollections from "./components/views/collections/AllCollections/AllCollections";
import Collection from "./components/views/collections/Collection/Collection";
import Product from "./components/views/product/Product";
import Login from "./components/views/auth/login/Login";
import ResetPassword from "./components/views/auth/resetPassword/ResetPassword";
import Signup from "./components/views/auth/signup/Signup";
import Account from "./components/views/account/Account";
import { useAuthContext } from "./context/useAuthContext";
import Footer from "./components/layout/footer/Footer";
import ShippingPolicy from "./components/views/footer/shippingPolicy/ShippingPolicy";
import Contact from "./components/views/footer/contact/Contact";
import PurchaseConditions from "./components/views/footer/purchaseConditions/PurchaseConditions";
import TermsOfService from "./components/views/footer/termsOfService/TermsOfService";
import PrivacyPolicy from "./components/views/footer/privacyPolicy/PrivacyPolicy";
import CookiePolicy from "./components/views/footer/cookiesPolicy/CookiesPolicy";
import Legal from "./components/views/footer/legal/Legal";
import Sizes from "./components/views/footer/sizes/Sizes";
import CareRecommendations from "./components/views/footer/careRecommendations/CareRecommendations";

function App() {
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);
  const [homeData, setHomeData] = useState([]);

  const URLCollections = process.env.REACT_APP_API_COLLECTIONS;
  const URLProducts = process.env.REACT_APP_API_PRODUCTS;
  const URLHomeData = process.env.REACT_APP_API_HOMEDATA;

  const AdminUser = process.env.REACT_APP_ADMIN;

  const { user } = useAuthContext();

  const [adminStatus, setAdminStatus] = useState(false);

  console.log(adminStatus);

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(
      (x) =>
        x._id === product._id &&
        x.sizeSelected === product.sizeSelected &&
        x.colorSelected === product.colorSelected &&
        x.imageSelected === product.imageSelected
    );
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x._id === product._id &&
        x.sizeSelected === product.sizeSelected &&
        x.colorSelected === product.colorSelected &&
        x.imageSelected === product.imageSelected
          ? { ...exist, qty: exist.qty + 1 }
          : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
    console.log(cartItems);
  };

  const onRemove = (product) => {
    const exist = cartItems.find(
      (x) =>
        x._id === product._id &&
        x.sizeSelected === product.sizeSelected &&
        x.colorSelected === product.colorSelected &&
        x.imageSelected === product.imageSelected
    );
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter(
        (x) => x.indexInternal !== product.indexInternal
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x._id === product._id &&
        x.sizeSelected === product.sizeSelected &&
        x.colorSelected === product.colorSelected &&
        x.imageSelected === product.imageSelected
          ? { ...exist, qty: exist.qty - 1 }
          : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const subtotalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = subtotalPrice * 0.21;
  const totalPrice = subtotalPrice + taxPrice;

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
    getAPI();

    if (user !== null && user.email === AdminUser) {
      setAdminStatus(true);
    } else {
      setAdminStatus(false);
    }
  }, [user]);

  const getAPI = async () => {
    try {
      const resCollections = await fetch(URLCollections);
      const collectionsAPI = await resCollections.json();
      console.log(collectionsAPI);
      setCollections(collectionsAPI);
      const resProducts = await fetch(URLProducts);
      const productsAPI = await resProducts.json();
      console.log(productsAPI);
      setProducts(productsAPI);
      const resHomeData = await fetch(URLHomeData);
      const homeDataAPI = await resHomeData.json();
      console.log(homeDataAPI);
      setHomeData(homeDataAPI);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <GlobalFonts />
      <BrowserRouter>
        <Navigation
          countCartItems={cartItems.length}
          collections={collections}
          adminStatus={adminStatus}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home homeData={homeData} />} />
            <Route
              path="/shop/cart"
              element={
                <Cart
                  subtotalPrice={subtotalPrice}
                  taxPrice={taxPrice}
                  totalPrice={totalPrice}
                  cartItems={cartItems}
                  onRemove={onRemove}
                  countCartItems={cartItems.length}
                />
              }
            />
            <Route
              path="/collections"
              element={<AllCollections products={products} />}
            />
            <Route
              path="/collections/:id"
              element={
                <Collection
                  URLProducts={URLProducts}
                  URLCollections={URLCollections}
                />
              }
            />
            <Route
              path="/collections/:id/:id"
              element={
                <Product
                  subtotalPrice={subtotalPrice}
                  taxPrice={taxPrice}
                  totalPrice={totalPrice}
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  URLProducts={URLProducts}
                />
              }
            />
            <Route
              path="/admin"
              element={
                adminStatus === true ? (
                  <Admin
                    URLCollections={URLCollections}
                    URLProducts={URLProducts}
                    URLHomeData={URLHomeData}
                    homeData={homeData}
                    collections={collections}
                    getAPI={getAPI}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/admin/create"
              element={
                adminStatus === true ? (
                  <CollectionsCreate
                    URLCollections={URLCollections}
                    getAPI={getAPI}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/admin/:id/create"
              element={
                adminStatus === true ? (
                  <CollectionsProductCreate
                    URLCollections={URLCollections}
                    URLProducts={URLProducts}
                    getAPI={getAPI}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/admin/create/homedata"
              element={
                adminStatus === true ? (
                  <HomeDataCreate
                    collections={collections}
                    URLCollections={URLCollections}
                    URLHomeData={URLHomeData}
                    getAPI={getAPI}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/admin/update/:id"
              element={
                adminStatus === true ? (
                  <CollectionsUpdate
                    URLCollections={URLCollections}
                    getAPI={getAPI}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/admin/update/products/:id"
              element={
                adminStatus === true ? (
                  <CollectionsProductUpdate
                    URLProducts={URLProducts}
                    getAPI={getAPI}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/admin/update/homedata/:id"
              element={
                adminStatus === true ? (
                  <HomeDataUpdate
                    URLCollections={URLCollections}
                    URLHomeData={URLHomeData}
                    collections={collections}
                    getAPI={getAPI}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="/shippingPolicy" element={<ShippingPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/purchaseConditions" element={<PurchaseConditions />} />
            <Route path="/termsOfService" element={<TermsOfService />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/cookiesPolicy" element={<CookiePolicy />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/sizes" element={<Sizes />} />
            <Route path="/careRecommendations" element={<CareRecommendations />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
