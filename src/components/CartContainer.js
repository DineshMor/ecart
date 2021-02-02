import React from "react";
import { connect } from 'react-redux';

import CartItem from './CartItem';
import { ActionTypes } from "../actions/actionTypes";

const CartContainer = (props) => {
console.log(props, 'carcontainer inside props');
  const { cart = [], amount = null, dispatch } = props;

  React.useEffect(() => {
    dispatch({ type: ActionTypes.GET_TOTALS })
  });

  const CartList = cart.map( item => {
      return(
          <CartItem key = { item.id } {...item} />
      )
  });

  if (cart.length === 0) {
    return (
        <div>Shopping cart is empty</div>
    )
  }

  return(
    <section className="cart">
        <header>
            <h2>your bag</h2>
        </header>
        <article>
            { CartList }
        </article>
        <footer>
            <hr />
            <div className="cart-total">
              <h4>
                total <span>{amount}</span>
              </h4>
            </div>
            <button 
              className="btn clear-btn" 
              onClick={()=> dispatch({ type: ActionTypes.CLEAR_CART })}
            >
              clear cart
            </button>
        </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { cart, amount } = state;
  return { cart, amount }
}

export default connect(mapStateToProps)(CartContainer);
