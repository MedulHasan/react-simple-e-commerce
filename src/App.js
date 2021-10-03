import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import ShopIndex from './components/Shop';
import NotFound from './components/NotFound/NotFound'
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <ShopIndex />
          </Route>
          <Route path="/shop">
            <ShopIndex />
          </Route>
          <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/place-order">
            <PlaceOrder />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
