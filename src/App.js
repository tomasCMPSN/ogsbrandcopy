import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/layout/navigation/Navigation';
import Cart from './components/views/cart/Cart';
import BasadoCollection from './components/views/collections/basadoCollection/BasadoCollection';
import BrowseAll from './components/views/collections/browseAll/BrowseAll';
import Gold from './components/views/collections/gold/Gold';
import LastDays from './components/views/collections/lastDays/LastDays';
import Ogs from './components/views/collections/ogs/Ogs';
import OriginalGangstersCollection from './components/views/collections/originalGangstersCollection/OriginalGangstersCollection';
import Home from './components/views/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/collections/original-gangsters-collection" element={<OriginalGangstersCollection />}/>
          <Route exact path="/collections/basado-collection" element={<BasadoCollection />}/>
          <Route exact path="/collections/ogs" element={<Gold />}/>
          <Route exact path="/collections/originals" element={<Ogs />}/>
          <Route exact path="/collections/last-days" element={<LastDays />}/>
          <Route exact path="/collections/browse-all" element={<BrowseAll />}/>
          <Route exact path="/shop/cart" element={<Cart />}/>
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
