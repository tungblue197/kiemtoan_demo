import React, { Component } from 'react';
import './Login.scss';

export default class LoginContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    loginSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        if(username === 'admin' && password === '123456'){
            localStorage.setItem('token', this.state.username);
            this.props.history.replace('/kt');
        }
    }
    handleInputChagne = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <form className="form-signin" onSubmit={this.loginSubmit}>
                        <h2 className="form-signin-heading">Đăng nhập</h2>
                        <input type="text" className="form-control" onChange={this.handleInputChagne} value={this.state.username} name="username" placeholder="Tên tài khoản" required=""  />
                        <input type="password" className="form-control" onChange={this.handleInputChagne} value={this.state.password} name="password" placeholder="Mật khẩu" required="" />
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Nhớ mật khẩu
                    </label>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Đăng nhập</button>
                    </form>
                </div>
            </div>
        )
    }
}
