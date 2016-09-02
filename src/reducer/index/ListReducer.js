import {
    LIST_OBJ
} from '../../constant/IndexConstant.js';

let initState = {
    listObj: {},
};

export function ListReducer(state = initState, action) {
    switch(action.type){
        //更新列表
        case LIST_OBJ:
            return Object.assign({}, state, {userObj: action.listObj});
        default:
            return Object.assign({}, state);
    }
};