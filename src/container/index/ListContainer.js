import React,{Component} from 'react';
import {connect} from 'react-redux';
import List from '../../Components/index/List';

class ListContainer extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        //console.log("ListContainer:");
        //console.log(this.props);
    	const {RootReducer:{ListReducer}, dispatch} = this.props;
        return(
            <div>
                <List ListReducer={ListReducer} dispatch={dispatch}></List>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        RootReducer:state
    }
}
export default connect(mapStateToProps)(ListContainer);
