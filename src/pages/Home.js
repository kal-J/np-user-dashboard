import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Transactions from './Transactions';
import Customers from './Customers';
import Balance from './Balance';
import Transfers from './Transfers';
import Subaccounts from './Subaccounts';
import Cards from './Cards';
import Store from './Store';
import PaymentLinks from './PaymentLinks';
import PaymentPlans from './PaymentPlans';
import Invoices from './Invoices';
import Settings from './Settings';

const Home = () => {
  return (
    <div style={{margin: '0 auto', position: 'absolute', zIndex: 10000, left: '250px'}}>
      <Switch>
        <Route exact path="/" render={
            () => {
                return(
                    <h1>Overview will go here. </h1>
                );
            }
        } />
        <Route path="/transactions" component={Transactions} />
        <Route path="/customers" component={Customers} />
        <Route path="/balance" component={Balance} />
        <Route path="/transfers" component={Transfers} />
        <Route path="/subaccounts" component={Subaccounts} />
        <Route path="/cards" component={Cards} />
        <Route path="/store" component={Store} />
        <Route path="/payment-links" component={PaymentLinks} />
        <Route path="/payment-plans" component={PaymentPlans} />
        <Route path="/invoices" component={Invoices} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  );
};

export default Home;
