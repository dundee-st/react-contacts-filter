import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import ContactsContainer from './pages/contacts/ContactsContainer';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <div className='app__content'>
        <Header />
        <Switch>
          <Route exact path='/contacts' render={() => (< ContactsContainer />)} />
          <Route exact path='/' render={() => (<Home />)} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
