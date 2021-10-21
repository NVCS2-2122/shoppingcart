import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Store from './Store'
import Cart from './Cart'
import Fidget from './Fidget'
import FriendList from './FriendList'

function App() {
  const [inCart,setCart] = useState([])
  const [total,setTotal] = useState(0)
  const addToCart = (itemData) => {
    const newCart = [...inCart,itemData]
    const newTotal = newCart.reduce((p,c) => p+c.price,0)
    setTotal(newTotal)
    setCart(newCart)
}

  return (
    <div className="App">
      <header className="App-header">
        My Store
        <FriendList />
        <Fidget />
      </header>
      <Store addToCart={addToCart} />
      <Cart inCart={inCart} total={total}/>
    </div>
  );
}

export default App;
