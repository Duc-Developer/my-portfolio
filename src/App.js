import React from 'react';
import './App.css';
import ProfileForm from './features/FormBuilding/ProfileForm';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { MyCVPrint } from './features/MyCV/MyCVPrint';
import Login from './auth/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/form-building">
            <ProfileForm />
          </Route>
          <Route exact path="/form-building/print-and-preview">
            <MyCVPrint />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
