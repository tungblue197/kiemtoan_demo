import { PureComponent } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './comon/global-style/drawer-theme.scss';
import Routes from './Routes';
class App extends PureComponent{
  render(){
    return (
          <>
            <Routes />
          </>)
  }
}

export default App;
