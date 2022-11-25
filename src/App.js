import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalFonts from "./fonts/fonts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);
  const [homeData, setHomeData] = useState([]);

  const URLCollections = process.env.REACT_APP_API_COLLECTIONS;
  const URLProducts = process.env.REACT_APP_API_PRODUCTS;
  const URLHomeData = process.env.REACT_APP_API_HOMEDATA;

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
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id &&
          x.sizeSelected === product.sizeSelected &&
          x.colorSelected === product.colorSelected &&
          x.imageSelected === product.imageSelected
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
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
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id &&
          x.sizeSelected === product.sizeSelected &&
          x.colorSelected === product.colorSelected &&
          x.imageSelected === product.imageSelected
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
  };

  const subtotalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = subtotalPrice * 0.21;
  const totalPrice = subtotalPrice + taxPrice;

  useEffect(() => {
    getAPI();
  }, []);

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
        <Navigation countCartItems={cartItems.length} collections={collections} />
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
                <Admin
                  URLCollections={URLCollections}
                  URLProducts={URLProducts}
                  URLHomeData={URLHomeData}
                  homeData={homeData}
                  collections={collections}
                  getAPI={getAPI}
                />
              }
            />
            <Route
              path="/admin/create"
              element={
                <CollectionsCreate
                  URLCollections={URLCollections}
                  getAPI={getAPI}
                />
              }
            />
            <Route
              path="/admin/:id/create"
              element={
                <CollectionsProductCreate
                  URLCollections={URLCollections}
                  URLProducts={URLProducts}
                  getAPI={getAPI}
                />
              }
            />
            <Route
              path="/admin/create/homedata"
              element={
                <HomeDataCreate
                  collections={collections}
                  URLCollections={URLCollections}
                  URLHomeData={URLHomeData}
                  getAPI={getAPI}
                />
              }
            />
            <Route
              path="/admin/update/:id"
              element={
                <CollectionsUpdate
                  URLCollections={URLCollections}
                  getAPI={getAPI}
                />
              }
            />
            <Route
              path="/admin/update/products/:id"
              element={
                <CollectionsProductUpdate
                  URLProducts={URLProducts}
                  getAPI={getAPI}
                />
              }
            />
            <Route
              path="/admin/update/homedata/:id"
              element={
                <HomeDataUpdate
                  URLCollections={URLCollections}
                  URLHomeData={URLHomeData}
                  collections={collections}
                  getAPI={getAPI}
                />
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
