import React, { Component } from 'react';
import Header from './common/header/index.js';
import { Provider } from 'react-redux';		
import store from './store/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Write from './pages/write'; 
import Login from './pages/login';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>	      		
       <BrowserRouter>
          <div>
            <Header />
      			<div>
        			<Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
        			<Route path='/detail/:id' exact component={Detail}></Route>
      			</div>
          </div>
    		</BrowserRouter>
      </Provider>
    );
  }
}

export default App;
