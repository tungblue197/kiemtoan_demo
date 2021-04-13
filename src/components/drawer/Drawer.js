import { PureComponent } from 'react';
import AppHeader from '../app-header/AppHeader';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

class Drawer extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            open: true,
            closeNavBar: true
        }
    }
    
    render() {
        return (
            <div className="app-container">
                <div className={`app__left-side ${classnames({'close': !this.state.open})}`}>
                    <div className="app__drawer">
                        <nav className="app__side-bar">
                            <li className="app__side-bar-item">
                                <span onClick={() => {this.setState({ closeNavBar: !this.state.closeNavBar})}}  className="app__side-bar-link"><i className="fas fa-tachometer-alt"></i> Danh mục  <span className="open"><i className="fas fa-chevron-right"></i></span></span>
                                <ul className={`sub-side-bar ${classnames({'close': this.state.closeNavBar})}`}>
                                    <li className="app__side-bar-item">
                                        <NavLink to='/kt/dm_donvi' className="app__side-bar-link">
                                            <i className="fas fa-tachometer-alt"></i>Đơn vị
                                        </NavLink>
                                    </li>
                                    <li className="app__side-bar-item">
                                        <a href="#" className="app__side-bar-link"><i className="fas fa-tachometer-alt"></i>Danh mục</a>
                                    </li>
                                    <li className="app__side-bar-item">
                                        <a href="#" className="app__side-bar-link"><i className="fas fa-tachometer-alt"></i>Nghiệp vụ</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="app__side-bar-item">
                                <a href="#" className="app__side-bar-link"><i className="fas fa-tachometer-alt"></i>Danh mục <span className="open"><i className="fas fa-chevron-right"></i></span></a>
                            </li>
                            <li className="app__side-bar-item">
                                <a href="#" className="app__side-bar-link"><i className="fas fa-tachometer-alt"></i>Nghiệp vụ <span className="open"><i className="fas fa-chevron-right"></i></span></a>
                            </li>
                            <li className="app__side-bar-item">
                                <a href="#" className="app__side-bar-link"><i className="fas fa-tachometer-alt"></i>Danh mục <span className="open"><i className="fas fa-chevron-right"></i></span></a>
                            </li>
                            <li className="app__side-bar-item">
                                <a href="#" className="app__side-bar-link"><i className="fas fa-tachometer-alt"></i>Nghiệp vụ <span className="open"><i className="fas fa-chevron-right"></i></span></a>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className="app__right-side">
                    {
                        <AppHeader toogleOpen={() => this.setState({open: !this.state.open})} /> || null
                    }
                    <section className="app__content">
                        {this.props.children}
                    </section>
                </div>
            </div>
        )
    }
}

export default Drawer;