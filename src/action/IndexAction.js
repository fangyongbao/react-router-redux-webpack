import { ajax } from '../assets/js/Ajax'
import { JsBridge } from '../assets/js/JsBridge'
import { LOGIN_GET_USER_OBJ, LIST_OBJ } from '../constant/IndexConstant';

/**
 * login组件 begin
 **/
export function login(data) {
	return (dispatch, getState) => {
		var userObj = {
			userId: 12,
			userName: "abao"
		};
		dispatch(login_init_user_info(userObj))

		// ajax("?m=user&c=account&a=login", data, () => {

		// }, (d) => {
			
		// }, () => {

		// }, () => {

		// })
	}
}

function login_init_user_info(userObj) {
	return {
		type: LOGIN_GET_USER_OBJ,
		userObj
	}
}
/**
 * login组件 end
 **/


/**
 * list组件 begin
 **/

export function getList(listObj) {
	return {
		type: LIST_OBJ,
		listObj
	}
}
/**
 * list组件 end
 **/