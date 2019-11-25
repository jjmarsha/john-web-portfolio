import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Links from './Links';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {Links.map((value, key) => {
            return (
              <React.Suspense fallback={<div></div>}>
                <Route path={value.route} component={value.component}/>
              </React.Suspense>
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
