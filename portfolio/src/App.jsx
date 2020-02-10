import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Routes from './routes';
import Navbar from "./components/Navbar/navbar";
import { Row, Col } from "reactstrap";
import LogoHeader from "./components/LogoHeader";
import Loading from "pages/loading";


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
          <React.Suspense fallback={Loading}>
            <Switch>
              {Routes.map((value, key) => {
                return (
                  <Route key={key} exact={value.exact} path={value.route} component={value.component}/>
                )
              })}
            </Switch>
          </React.Suspense>
          </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
