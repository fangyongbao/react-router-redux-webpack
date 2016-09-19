import React,{Component} from 'react';
import { Lifecycle } from 'react-router'
import './Login.scss';
import $ from 'jquery';
import { login } from '../../../action/IndexAction';
// 导入数据请求模块
import { ajax } from '../../../assets/js/Util'
// 导入webview与js交互模块
import { JsBridge } from '../../../assets/js/JsBridge'
export default class Login extends Component{
    constructor(props) {
        super(props)
        // 初始化state
        this.state = {}
    }
    
    mixins: [ Lifecycle ]

    // 只会在装载之前调用一次
	componentWillMount(){
		
	}
    
    // 组件渲染完成后调用
	componentDidMount(){
        console.log(this);
	}

    // 更新前调用
	componentWillUpdate(){
        
	}

    Login(){
        const { LoginReducer, dispatch } = this.props;
        var data = {
        	name: "abao"
        }
        dispatch(login(data));
    }

    render(){
    	const { LoginReducer } = this.props;
    	const userName = LoginReducer.userObj.userName || "";
        return(
            <div className="f-tac m-login">
               <p>login</p>
               <p>用户名:{userName}</p>
               <p>点击图片获取用户信息</p>
               <img src={require('../../../assets/images/index/Login/icon.png')} className="f-csp" onClick={this.Login.bind(this)} />
            </div>
        );
    }
}