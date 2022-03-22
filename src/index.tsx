import React, { Suspense } from 'react';
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
import i18n from './i18n.js';
import { useTranslation, I18nextProvider } from 'react-i18next';

const basename = "/lianghao";

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <Suspense fallback={<div>Loading ... </div>}>
    <GlobalStateProvider>
      <MainNav />
      <Router basename={basename}>
        <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/contact">
              <ContactUs />
            </Route>
            <Route exact path="/faq">
              <FAQ />
            </Route>
            <Route exact path="/product/peachnut">
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
    </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
