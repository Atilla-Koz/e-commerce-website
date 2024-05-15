import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './Components/HomePage/HomePage';
import ShopPage from './Components/ShopPage';
import ProductDetails from './Components/ProductDetails';
import Contact from './Components/Contact';
import Team from './Components/Team';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <>
      <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
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
