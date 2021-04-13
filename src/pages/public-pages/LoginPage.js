import React, { Component } from 'react'
import LoginContainer from '../../containers/Login/LoginContainer'

export default class LoginPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <LoginContainer {...this.props}/>
            </>
        )
    }
}
