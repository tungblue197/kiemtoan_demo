import React, { Component } from 'react'

export default class AppHeader extends Component {
    render() {
        return (
            <header className="app__header">
                <div className="app__header-left">
                    <button className="btn-toogle-side-bar" onClick={this.props.toogleOpen}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="app__header-right">
                    <div className="user-info">
                        <span className="user-name">
                            Đơn vị : Sở tài chính hà nội
                        </span>
                        <div className="user-icon">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="back-2-home">
                        <i className="fas fa-home"></i>
                    </div>
                </div>
            </header>
        )
    }
}
