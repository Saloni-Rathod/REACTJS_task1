import React from 'react';
import Button from '../containers/Button';
import OrderList from '../containers/OrderList'
import Loading from '../containers/Loading'


let App = () => (
  <div>
    <Button />
    <Loading />
    <OrderList />
  </div>
);


export default App;
