import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import Series from './components/Series';

import Video from './components/Video';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageObserved: true
    }
  }

  unobserve() {
    this.setState({pageObserved: false})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <Container>
            <div>
              <Link onClick={this.unobserve} className="link" to="/series"><h1>Series</h1></Link>
            </div>
          </Container>
          <Route exact path="/series" component={Series}></Route>
          <Route exact path="/series/video/:vidFile" component={Video} />
        </div>
      </Router>
    );
  }
}

export default App;