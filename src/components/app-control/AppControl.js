import React, { Component } from 'react'

export default class AppControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            textSearch: ''
        }
    }
    onTextSearchChanged = (e) => {
        const {value} = e.target;
        this.setState({textSearch: value});
        this.props.onSearch(value);
    }
    render() {
        return (
            <>
                <div className="app__controlbar">
                    <button><i className="fas fa-plus"></i> Thêm</button>
                    <button><i className="fas fa-edit"></i> Sửa</button>
                    <button onClick={this.props.onDelete}><i className="far fa-trash-alt"></i> Xóa</button>
                    <button> <i className="fas fa-eye"></i>Xem chi tiết</button>
                </div>
                <div className="page-container">
                    <div className="page-header">
                        <span className="page-header-title">
                            Lập kiến nghị kiểm toán
                        </span>
                        <div className="page-header-search">
                            <input type="text" placeholder="Tìm kiếm..." onChange={this.onTextSearchChanged} />
                            <button
                                onClick={() => this.props.onSearch(this.state.textSearch)}
                                className="page-header-search-btn" >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </div>
            </>
        )
    }
}
