import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './Components/HomePage/HomePage';
import ShopPage from './Components/ShopPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
