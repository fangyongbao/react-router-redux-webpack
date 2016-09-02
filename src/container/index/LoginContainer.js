import React,{Component} from 'react';
import {connect} from 'react-redux';
import Login from '../../Components/index/Login';

class LoginContainer extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        //console.log("LoginReducer:");
        //console.log(this.props);
    	const {RootReducer:{LoginReducer}, dispatch} = this.props;
        return(
            <div>
                <Login LoginReducer={LoginReducer} dispatch={dispatch}></Login>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        RootReducer:state
    }
}
export default connect(mapStateToProps)(LoginContainer);
