import {createStore,compose,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import RooterReducer from '../reducer/index/RooterReducer.js';

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware
)(compose()(createStore))

const IndexStore = createStoreWithMiddleware(RooterReducer);
export default IndexStore;
