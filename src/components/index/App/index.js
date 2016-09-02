import React, {Component} from 'react';
import Hearder from '../../common/Header';

export default class App extends Component{
    render(){
        return(
            <div>
                <Hearder/>
                {this.props.children}
            </div>
        );
    }
}