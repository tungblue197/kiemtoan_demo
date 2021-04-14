import React, { Component } from 'react'
import { Popup } from 'devextreme-react/popup';
import { Button } from 'devextreme-react/button';
import './Confirm.scss';


export default class Confirm extends Component {
    render() {
        
        return (
            <Popup 
                {...this.props}
                contentComponent={() => <div className="confirm">
                    <div className="confirm__header">
                        <span>Bạn có thực sự muốn xoá bản ghi</span>
                    </div>
                    <div className="confirm__control-btn">
                        <Button onClick={this.props.onOk} className="btn-yes" icon="check" type="success" text="Có"/>
                        <Button onClick={this.props.onCancel} className="btn-no" icon="close" type="danger" text="Không"/>
                    </div>
                </div>}
            />
        )
    }
}
