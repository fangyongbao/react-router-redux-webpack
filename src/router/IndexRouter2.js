import React,{Component} from 'react';
import { Router, Route, IndexRedirect, hashHistory, browserHistory, useRouterHistory } from 'react-router';
import App from '../components/index/App';
import LoginContainer from '../container/index/LoginContainer';
import ListContainer from '../container/index/ListContainer';

//去除hash ?_k=111111
const createHashHistory = require('react-router/node_modules/history').createHashHistory;  
const appHistory = useRouterHistory(createHashHistory)({queryKey:false});  


/***
* 非动态路由
***/
export default class IndexRouter extends Component{
    render(){
        return((
            <Router history={appHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/login" />
                    <Route path="/login" component={LoginContainer}></Route>
                    <Route path="/list" component={ListContainer}></Route>
                </Route>
            </Router>)
        );
    }
}