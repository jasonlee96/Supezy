import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStateProvider } from './context/Context';
import {NotFound, MainNav, Footer, AdminPage, AdminLogin, Product, HomePage, AboutUs, ContactUs, FAQ} from './components';
import {AuthRoute} from './components/common';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import './i18n.js';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <MainNav />
      <Router basename="/react">
        <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/product/peachnut">
              <Product />
            </Route>
            <AuthRoute path="/adminpage">
              <AdminPage />
            </AuthRoute>
            <Route path="/adminlogin">
              <AdminLogin />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </Router>
      <Footer />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
