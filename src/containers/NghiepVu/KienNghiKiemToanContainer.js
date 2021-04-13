import React, { Component } from 'react'
import AppControl from '../../components/app-control/AppControl'

export default class KienNghiKiemToanContainer extends Component {
    render() {
        return (
            <>
                <AppControl />
                <div className="page-container">
                <div className="page-header">
                    <span className="page-header-title">
                         Lập kiến nghị kiểm toán
                    </span>
                    <div className="page-header-search">
                        <input type="text" placeholder="Tìm kiếm..." />
                        <button className="page-header-search-btn">
                             <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="page-content">

                </div>
              </div>
            </>
        )
    }
}
