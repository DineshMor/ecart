import React from 'react';

const CartFooter = ({amount}) => {
	return(
		<footer>
	        <hr />
	        <div className="cart-total">
	          <h4>
	            total <span>{amount}</span>
	          </h4>
	        </div>
	        <button className="btn clear-btn">clear cart</button>
	    </footer>
	);
}
export default CartFooter;