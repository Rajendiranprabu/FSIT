import './App.css';
import React, { Component } from 'react';
import Courses from './Courses';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import Students from './Students';
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {

  render() {
    return <Router>

      <div className="container">

        <Navbar></Navbar>

        <Route exact path="/" component={Courses}></Route>
        <Route path="/students" render={props => (
          <React.Fragment>
            <Students studentName="Akshay"></Students>
            {/* <Fees fess="5500"></Fees> */}
          </React.Fragment>
        )}></Route>

      </div>

    </Router>
  }

}


export default App;
