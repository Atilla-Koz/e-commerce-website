import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
