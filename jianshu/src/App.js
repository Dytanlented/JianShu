import React, { Component } from 'react';
import Header from './common/header/index.js';
import { Provider } from 'react-redux';		
import store from './store/index.js';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>	
      		<div>
	      		<Header />
	      		<BrowserRouter>
	      			<div>
		      			<Route path='/' exact render={()=><div>home</div>}></Route>
		      			<Route path='/detail' exact render={()=><div>detail</div> }></Route>
	      			</div>
	      		</BrowserRouter>
      		</div>
      	</Provider>
    );
  }
}

export default App;
