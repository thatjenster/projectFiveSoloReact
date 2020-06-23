import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Components/layout/Nav';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import TravelDiary from './Components/project/TravelDiary';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Header />
        <Footer />
        <Switch>
          <Route path='/' component={TravelDiary} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
