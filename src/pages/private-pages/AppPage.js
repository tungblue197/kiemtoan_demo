import React, { Component } from 'react'
import Drawer from '../../components/drawer/Drawer'
import KienNghiKiemToanPage from './KienNghiKiemToanPage'
import NestedRoters from './NestedRoters'

export default class AppPage extends Component {
    render() {
        return (
            <>
                <Drawer>
                    <KienNghiKiemToanPage />
                </Drawer>
            </>
        )
    }
}
