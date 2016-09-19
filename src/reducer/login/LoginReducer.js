import {
    LOGIN_GET_USER_OBJ
} from '../../constant/IndexConstant.js';

let initState = {
    userObj: {},
};

export function LoginReducer(state = initState, action) {
    switch(action.type){
        //获取用户信息标识
        case LOGIN_GET_USER_OBJ:
            return Object.assign({}, state, {userObj: action.userObj});
        default:
            return Object.assign({}, state);
    }
};