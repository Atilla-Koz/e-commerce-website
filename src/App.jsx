import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './Components/HomePage/HomePage';
import ShopPage from './Components/ShopPage';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <>
      <Switch>
        <Route path="/Productdetail">
          <ProductDetails />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
