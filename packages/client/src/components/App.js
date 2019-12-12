import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from "./About";
import Home from '../containers/Home'

import '../css/home.css'
import Plots from './Plots';
import ErrorPage from './ErrorPage';

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        windowHeight : 0
      }
    }

    render() {
        const navbarElement=(
        <div>
          <nav className="navbar navbar-expand-lg navbar-padding" style={{paddingTop:'8px',paddingLeft:'12px'}}>
              <Link className="navbar-brand" to="/Home">
                <i className="fa fa-film"></i>Nineleaps
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon">
                  <i class="fa fa-navicon" style={{color:'white'}}></i>
                  </span>
              </button>
              <div class="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item nav-item-font" style={{fontSize: '11px'}}>
                      <Link className="nav-link color-maroon" to="/Home">Home</Link>
                  </li>
                  <li className="nav-item nav-item-font" style={{fontSize: '11px'}}>
                      <Link className="nav-link color-maroon" to="/About" >About</Link>
                  </li>
                  <li className="nav-item nav-item-font" style={{fontSize: '11px'}}>
                      <Link className="nav-link color-maroon" to="/Analysis" >Analysis</Link>
                  </li>
              </ul>
              </div>                   
        </nav>
      </div>)
        return ( 
            <div>
                <div className="home-page">
                <div className="home-main">
                {navbarElement}                
                <div className="justify-content-center">
                    <Switch>
                        <Route path="/Home" exact component={Home} />
                        <Route path="/" exact component={Home} />
                        <Route path="/About" exact component={About} />
                        <Route path="/Analysis" exact component={Plots} />
                        <Route path='*' exact component={ErrorPage} />
                    </Switch>
                </div>
            </div>
            </div>
            <div class="login-footer">
                <hr style={{paddingBottom: '20px'}}/>
                <div class="clearfix">
                    <button class="btn btn-link float-left btn-footer">&copy; 2019 Creative Sajan</button>
                    <button class="btn btn-link float-right btn-footer">Creative Sajan</button>
                    <a class="btn btn-link float-right btn-footer" href="/About">About</a>
                </div>
            </div>
            </div>
        );
    }
}

export default App;
