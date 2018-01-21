import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from '../components/HomePage';
import Header from '../components/Header';
import CoinInfoPage from '../components/CoinInfoPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/coins/" component={CoinInfoPage} exact={true}/>
                <Route path="/coins/:id" component={CoinInfoPage} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter;