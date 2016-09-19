import React,{Component} from 'react';
import './List.scss';
import $ from 'jquery';
export default class List extends Component{
    render(){
        return(
            <div className="f-tac m-list">
               <p>list</p>
               <img src={require('../../../assets/images/index/Login/icon.png')} />
            </div>
        );
    }
}