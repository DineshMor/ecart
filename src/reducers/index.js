import { ActionTypes } from '../actions/actionTypes';

const Reducer = (state, action) => {
	switch(action.type){
		case ActionTypes.CLEAR_CART:
			return { ...state, cart: [] };

		case ActionTypes.DECREASE:
			let cartArrayDec = [];

			if(action.payload.qty === 1) {
				cartArrayDec = state.cart.filter(cartItem => cartItem.id !== action.payload.id)
			} else {
				cartArrayDec = state.cart.map(cartItem => {
					if(action.payload.id === cartItem.id) {
						return { ...cartItem, qty: action.payload.qty - 1 }
					}
					return cartItem;
				});
			}
			
			return {
				...state,
				cart: cartArrayDec
			}

		case ActionTypes.INCREASE:
			console.log('in increase reducer state', state);
			const cartArrayInc = state.cart.map( cartItem => {
				if(cartItem.id === action.payload.id) {
					return { ...cartItem, qty: action.payload.qty + 1 }
				}
				return cartItem;
			});
			return {
				...state,
				cart: cartArrayInc
				}

		case ActionTypes.REMOVE:
			return {
				...state, 
				cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
			};

		case ActionTypes.GET_TOTALS:
			console.log('get total reducers');
			const { count, amount } = state.cart.reduce((cartCalc, cartItem) => {
				const { price, qty } = cartItem;
				cartCalc.amount += price*qty;
				cartCalc.count += qty;
				return cartCalc;
			},{
				count: 0,
				amount: 0
			});
			return { ...state, count, amount }
		default:
			return state;
	}
}

export default Reducer;
