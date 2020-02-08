import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Routes from './routes';
import Navbar from "./components/Navbar/navbar";
import { Container, Row, Col } from "reactstrap";
import LogoHeader from "./components/LogoHeader";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <Row>
            <Col>
              <LogoHeader/>
            </Col>
          </Row>
          <Row>
            <Navbar/>
          </Row>
          <Row>
          <Switch>
            {Routes.map((value, key) => {
              return (
                <React.Suspense fallback={<div></div>}>
                    <Route path={value.route} component={value.component}/>
                </React.Suspense>
              )
            })}
          </Switch>
          </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
