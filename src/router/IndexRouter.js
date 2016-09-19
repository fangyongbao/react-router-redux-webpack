import React,{Component} from 'react';
import { Router, Route, IndexRedirect, hashHistory, browserHistory, useRouterHistory } from 'react-router';
import App from '../components/index/App';
import withExampleBasename from '../../withExampleBasename'

/***
* 动态路由
***/
const rootRoute = {
    path: '/',
    component: App,
    childRoutes: [
        { 
            path: '/list',
            getComponent: (location, cb) => {
                console.log(location);
              require.ensure([], (require) => {
                const ListContainer = require('../container/index/ListContainer')
                cb(null, ListContainer.default)
              }, 'list')
            }
        },
        { 
            path: '/login',
            getComponent: (location, cb) => {
              require.ensure([], (require) => {
                const LoginContainer = require('../container/index/LoginContainer')
                cb(null, LoginContainer.default)
              }, 'login')
            }
        }
    ]
}

export default class IndexRouter extends Component{
    render(){
        return((
            <Router
                history={browserHistory}
                routes={rootRoute}
            />
        ));
    }
}
