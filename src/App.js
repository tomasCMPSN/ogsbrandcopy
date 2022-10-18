import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalFonts from "./fonts/fonts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/navigation/Navigation";
import Cart from "./components/views/cart/Cart";
import Accessories from "./components/views/collections/accesories/Accessories";
import BasadoCollection from "./components/views/collections/basadoCollection/BasadoCollection";
import TheBrotherhoodCollection from "./components/views/collections/theBrotherhoodCollection/TheBrotherhoodCollection";
import Gold from "./components/views/collections/gold/Gold";
import Ogs from "./components/views/collections/ogs/Ogs";
import OriginalGangstersCollection from "./components/views/collections/originalGangstersCollection/OriginalGangstersCollection";
import Home from "./components/views/home/Home";
import Admin from "./components/views/admin/Admin";
import Error404 from "./components/views/error404/Error404";
import CollectionsCreate from "./components/views/collectionsCreate/CollectionsCreate";
import CollectionsUpdate from "./components/views/collectionsUpdate/CollectionsUpdate";
import CollectionsProductCreate from "./components/views/collectionsProductCreate/CollectionsProductCreate";
import CollectionsProductUpdate from "./components/views/collectionsProductUpdate/CollectionsProductUpdate";

function App() {
  const [collections, setCollections] = useState([]);
  const URLCollections = process.env.REACT_APP_API_COLLECTIONS;
  const URLProducts = process.env.REACT_APP_API_PRODUCTS;

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    try {
      const resCollections = await fetch(URLCollections);
      const collectionsAPI = await resCollections.json();
      console.log(collectionsAPI);
      setCollections(collectionsAPI);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <GlobalFonts />
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/collections/original-gangsters-collection"
              element={<OriginalGangstersCollection />}
            />
            <Route
              exact
              path="/collections/basado-collection"
              element={<BasadoCollection />}
            />
            <Route exact path="/collections/ogs" element={<Gold />} />
            <Route exact path="/collections/originals" element={<Ogs />} />
            <Route
              exact
              path="/collections/the-brotherhood-collection"
              element={<TheBrotherhoodCollection />}
            />
            <Route
              exact
              path="/collections/accessories"
              element={<Accessories />}
            />
            <Route exact path="/shop/cart" element={<Cart />} />
            <Route
              exact
              path="/admin"
              element={<Admin URLCollections={URLCollections} URLProducts={URLProducts} collections={collections} getAPI={getAPI} />}
            />
            <Route exact path="/admin/create" element={<CollectionsCreate URLCollections={URLCollections} getAPI={getAPI} />} />
            <Route exact path="/admin/:id/create" element={ <CollectionsProductCreate  URLCollections={URLCollections} URLProducts={URLProducts} getAPI={getAPI} /> } />
            <Route exact path="/admin/update/:id" element={ <CollectionsUpdate URLCollections={URLCollections} getAPI={getAPI} /> } />
            <Route exact path="/admin/update/products/:id" element={ <CollectionsProductUpdate URLProducts={URLProducts} getAPI={getAPI} /> } />
            <Route exact path="*" element={<Error404 />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
