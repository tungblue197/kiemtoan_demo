import React, { Component } from 'react'
import './Tabs.scss';

export default class Tabs extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let selectedComponent = this.props.dataSource.find(i => i.key === this.props.selectedTab).component;
        return (
            <div className="tabs">
                <div className="tab-header">
                    {
                        this.props.dataSource && this.props.dataSource.map(item => <button onClick={() => this.props.selectedTabsChanged(item.key)} style={{ background: this.props.selectedTab == item.key ? '#484F53': '#343a40'}} key={item.key}>{item.title}</button>)
                    }
                </div>
                <div className="tab-body">
                    {
                         selectedComponent ? selectedComponent(): null 
                    }
                </div>
            </div>
        )
    }
}
