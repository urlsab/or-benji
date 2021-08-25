import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import sass בעזה"י בלנ"ד

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Types from './components/Types/Types';
import Method from './components/Method/Method';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* <main> */} 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/method" component={Method} />
            <Route path="/types" component={Types} />
            <Route path="/contact" component={Contact} />
          </Switch>
      {/* </main> */}
    </React.Fragment>
  );
};

export default App;