import React,{Component} from 'react';
import { Link } from 'react-router';
import './Header.scss';
export default class Header extends Component{
    render(){
        return(
            <div className="m-header">
                <Link to='/login' activeClassName="active">登录页</Link>
                <Link to='/list' activeClassName="active">列表页</Link>
            </div>
        );
    }
}