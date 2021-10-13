import logo from './logo.svg';
import './App.css';
import Store from './Store'
import Cart from './Cart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Store
      </header>
      <Store />
      <Cart />
    </div>
  );
}

export default App;
