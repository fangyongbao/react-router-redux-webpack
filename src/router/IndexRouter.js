import React,{Component} from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from '../components/index/App';
import LoginContainer from '../container/index/LoginContainer';
import ListContainer from '../container/index/ListContainer';
export default class IndexRouter extends Component{
    render(){
        return((
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/login" />
                    <Route path="/login" component={LoginContainer}></Route>
                    <Route path="/list" component={ListContainer}></Route>
                </Route>
            </Router>)
        );
    }
}
