import {combineReducers} from 'redux';
import {LoginReducer} from './LoginReducer';
import {ListReducer} from './ListReducer';
let initState = {
	homePageData: {}
};
export function IndexReducer(state = initState, action) {
    switch(action.type){
        default:
            return Object.assign({},state);
    }
};
const RootReducer = combineReducers({
	IndexReducer,
    LoginReducer,
    ListReducer
})
export default RootReducer;

