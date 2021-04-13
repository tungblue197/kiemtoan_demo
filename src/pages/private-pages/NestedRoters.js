import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom';

export default class NestedRoters extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
                <Route exact path={`kt/dm_donvi`}>
                    <h1>hello</h1>
                </Route>
        )
    }
}
