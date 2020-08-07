import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

const App = () => (
	<div>
		<h2>My shopping Cart</h2>
		<hr />
		<ProductsContainer />
		<hr />
		<CartContainer />
	</div>
);

export default App;
