import React from 'react';


import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from 'Views';
import configureStore from 'Store/configureStore';
import 'react-toastify/dist/ReactToastify.css';
import "react-toggle/style.css"
import "react-mde/lib/styles/css/react-mde-all.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'; 

 
library.add(fas, fab);


let store = configureStore();

const MainApp = () => (
  <Provider store={store}>
    <Router>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
    </Router>
  </Provider>
);


export default MainApp;


