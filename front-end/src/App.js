import React, { useEffect, useState } from 'react'
import {
  BrowserRouter, Route, Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Home from './views/Home';
import Footer from './components/Footer';
import Qui from './views/Qui';
import Programmes from './views/Programmes';
import Participer from './views/Participer';
import ContactPage from './views/Contact';
import ConnexionPage from './views/Connexion';
import Signup from './views/Signup';
import Login from './views/Login';
import LoginAdmin from './views/LoginAdmin';
import QuestionPage from './views/formulaire/Formulaire';
import Modification from './views/formulaire/Modification';
import Navbar from './components/Navbar';
import Professionnel from './views/Professionnel';
import EditTeam from './views/team/EditTeam';
import ChiffresCles from './views/chiffresCles/ChiffresCles';
import EditMission from './views/mission-civique/EditMission';
import Partenaires from './views/partenaires/Partenaires';

// import './assets/styles/Home.css';


function App() {

  const [userConnected, setUserConnected] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token") || false

    if (token) {
      setUserConnected(true)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setUserConnected(false)
  }


  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/qui-sommes-nous" exact component={Qui} />
        <Route path="/nos-programmes" exact component={Programmes} />
        <Route path="/participer" exact component={Participer} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/connexion" exact component={ConnexionPage} />
        <Route path="/connexion/signup" exact component={Signup} />
        <Route path="/connexion/loginadmin">
          <LoginAdmin connectUser={() => setUserConnected(true)} />
        </Route>
        <Route path="/logged/formulaire" exact component={QuestionPage} />
        <Route path="/connexion/login">
        <Route path="/modification" exact component={Modification} />
          <Login connectUser={() => setUserConnected(true)} />
        </Route>
        <Route path="/EP" exact component={Professionnel} />
        <Route path="/edit-team" exact component={EditTeam} />
        <Route path="/chiffres-cles" exact component={ChiffresCles} />
        <Route path="/mission-civique" exact component={EditMission} />
        <Route path="/partenaires" exact component={Partenaires} />


        {/* <Route path="/signup" component={} />
          <Route path="/admin">
            <Admin disconnectUser={} />
          </Route> */}
      </Switch>

      <Navbar logout={logout} userConnected={userConnected} />
      <Footer />
    </BrowserRouter>

  );
}

export default App;

