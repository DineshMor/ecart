import React from 'react';
import { connect } from 'react-redux';

import { ActionTypes } from '../actions/actionTypes';

const CartItem = ({ qty, img, title, price, remove, increase, decrease }) => {
	return(
		<div className="cart-item">
            <img src={img} alt="Samsung Galaxy S7" />
            <div>
                <h4>{ title }</h4>
                <h4 className="item-price">{ price }</h4>
                <button className="remove-btn" onClick={ () => remove() }>remove</button>
            </div>
            <div>
                <button className="amount-btn" onClick={ () =>  increase() } >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path>
                    </svg>
                </button>
                <p className="amount">{ qty }</p>
                <button className="amount-btn" onClick={ () => decrease()} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    	<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                </button>
            </div>
        </div>
	);
}

const mapDispatchToProps = (dispatch, ownprops) => {
	console.log(ownprops, 'ownprops is in mapDispatchToProps');
	const { id, qty } = ownprops;
	return {
		remove: () => dispatch({ type: ActionTypes.REMOVE, payload: { id } }),
		increase: () => dispatch({ type: ActionTypes.INCREASE, payload: {id, qty} }),
		decrease: () => dispatch({ type: ActionTypes.DECREASE, payload: {id, qty} })
	} 
}

export default connect(null, mapDispatchToProps)(CartItem);