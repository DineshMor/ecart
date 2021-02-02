import React from "react";
import { Provider } from 'react-redux';

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import CartItemsJson from './cart-items';
import configureStore from './store/configureStore';

//initial store
const initialStore = {
	count: 13,
	cart: CartItemsJson,
	amount: 100
}

const App = () => {
	return (
    	<Provider store={configureStore(initialStore)}>
      		<Navbar />
      		<CartContainer />
    	</Provider>
  	);
}

export default App;
