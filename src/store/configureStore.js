import { createStore } from 'redux';
import Reducers from '../reducers';

export default  initialState => {
    return createStore(Reducers, initialState);
}