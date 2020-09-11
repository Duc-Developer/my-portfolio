import React, { useEffect } from 'react';
import './App.css';
import ProfileForm from './features/FormBuilding/ProfileForm';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { MyCVPrint } from './features/MyCV/MyCVPrint';
import Login from './auth/Login';
import firebase from 'firebase';
import { database } from './firebase'
import { useState } from 'react';
import Loading from './components/Loading';
import Portfolio from './features/Portfolio';

function App() {
  const [profile, setProfile] = useState(null);
  const [dataView, setDataView] = useState(null);

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
    database.ref("users/" + "OpoIipVtDJXWCe3TdtzKJDlClr62")
          .once("value")
          .then(snap => {
            if (snap.val()) {
              setDataView(snap.val());
            }
          })
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/portfolio-about">
            {
              !dataView ? <Loading
                height="calc(100vh)"
                widthIcon={10}
                heightIcon={10}
                color="primary" />
                : <Portfolio defaultValues={!profile ? dataView : profile} />
            }
          </Route>
          <Route exact path="/form-building">
            {
              !profile ? <Loading
                height="calc(100vh)"
                widthIcon={10}
                heightIcon={10}
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
