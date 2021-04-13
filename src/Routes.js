import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import AppPage from './pages/private-pages/AppPage';
import LoginPage from './pages/public-pages/LoginPage';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact render={(props) =>{
                    if(!localStorage.getItem('token')) return  <LoginPage {...props} />
                    return <Redirect to='kt' />
                }} />
                <Route path='/kt' exact render={(props) => {
                    if(!localStorage.getItem('token')) return <Redirect to='/' exact />
                    return  <AppPage {...props}/>
                }} />
            </Switch>
        )
    }
}
