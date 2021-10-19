import logo from './logo.svg';
import './App.css';
import Store from './Store'
import Cart from './Cart'
import Fidget from './Fidget'
import FriendList from './FriendList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Store
        <FriendList />
        <Fidget />
      </header>
      <Store />
      <Cart />
    </div>
  );
}

export default App;
