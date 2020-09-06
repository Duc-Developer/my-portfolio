import React from 'react';
import './App.css';
import ProfileForm from './features/FormBuilding/ProfileForm';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { MyCVPrint } from './features/MyCV/MyCVPrint';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/form-building">
            <ProfileForm />
          </Route>
          <Route exact path="/print-and-preview">
            <MyCVPrint />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
