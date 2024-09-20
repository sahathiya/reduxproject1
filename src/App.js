

import './App.css';
import Product from './component/Product';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Routes,Route } from 'react-router-dom';
import Cart from './component/Cart';
import Header from './component/Navbar';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/products' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
