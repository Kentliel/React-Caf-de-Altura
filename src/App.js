import './App.css';
import { Context } from './context/ContextCoffees';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import ContextCarCoffees  from './context/ContextCarCoffees'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Context>
        <ContextCarCoffees>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/Tienda' element={<Tienda />} ></Route>
          <Route path='/Cart' element={<Cart />} ></Route>
          <Route path='/Checkout' element={<Checkout />} ></Route>
          <Route path='/Success' element={<Success />} ></Route>
        </Routes>
        </ContextCarCoffees>
      </Context>

    </div>
  );
}

export default App;
