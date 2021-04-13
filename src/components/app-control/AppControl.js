import React, { Component } from 'react'

export default class AppControl extends Component {
    render() {
        return (
            <>
                <div className="app__controlbar">
                    <button><i className="fas fa-plus"></i> Thêm</button>
                    <button><i className="fas fa-edit"></i> Sửa</button>
                    <button><i className="far fa-trash-alt"></i> Xóa</button>
                    <button> <i className="fas fa-eye"></i>Xem chi tiết</button>
                </div>
                <div className="page-container">
                    <div className="page-header">
                        <span className="page-header-title">
                            Lập kiến nghị kiểm toán
                        </span>
                        <div className="page-header-search">
                            <input type="text" placeholder="Tìm kiếm..." />
                            <button className="page-header-search-btn" >
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
