require('../app');
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import Registration from '../components/Registration'
import '../variables'
import backgroundImg from '../../../public/assets/images/illustration/bg_image.jpg';

class App extends Component {
  
  render() {
    const divStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover'
    };

    return (
      <div>
        <div className="cComponent" style={divStyle} >
        <BrowserRouter>
          <div className="container-scroller">
              <div className="container-fluid page-body-wrapper full-page-wrapper">
              
                  <div className="content-wrapper d-flex align-items-center auth">
                      <div className="row flex-grow">
                      <div className="cComponent" style={divStyle} >
                          <div className="col-lg-4 mx-auto">
                              <div style={{ marginTop: '30%', marginBottom: '30%'}}>
                                <Switch>
                                  <Route exact path='/login' component={Login} />
                                  <Route path='/registration' component={Registration} />
                                </Switch>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </BrowserRouter>
      </div></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))