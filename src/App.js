import React, { useEffect } from 'react';
import './App.css';
import ProfileForm from './features/FormBuilding/ProfileForm';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import { MyCVPrint } from './features/MyCV/MyCVPrint';
import Login from './auth/Login';
import firebase from 'firebase';
import { database } from './firebase'
import { useState } from 'react';
import Loading from './components/Loading';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        database.ref("users/" + user.uid)
          .once("value")
          .then(snap => {
            if (snap.val()) {
              setProfile(snap.val());
            }
          })
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
      <Link to="/login">login</Link>
        <Switch>
          <Route exact path="/form-building">
            {
              !profile ? <Loading 
              height="calc(100vh)"
              widthIcon="10rem"
              heightIcon="10rem"
              color="primary" /> 
              : <ProfileForm defaultValues={profile} />
            }
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
