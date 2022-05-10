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

function App() {
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
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
