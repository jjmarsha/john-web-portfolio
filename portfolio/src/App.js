import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Links from './Links';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {Links.map((value, key) => {
            return (
              <Route path={value.route} component={value.component}/>
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
