import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Store from './Store'
import Cart from './Cart'
import Fidget from './Fidget'
import FriendList from './FriendList'

function App() {
  const [inCart,setCart] = useState([])
  const addToCart = (itemData) => {
    setCart([...inCart,itemData])
}

  return (
    <div className="App">
      <header className="App-header">
        My Store
        <FriendList />
        <Fidget />
      </header>
      <Store addToCart={addToCart} />
      <Cart inCart={inCart} />
    </div>
  );
}

export default App;
