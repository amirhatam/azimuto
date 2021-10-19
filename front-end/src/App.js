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
import PartenairesEP from './views/partenaires/PartenairesEP';
import RapportageEP from './views/rapportage/RapportageEP';
import LesEtudiants from './views/etudiants/LesEtudiants';
import Parcour from './views/parcour/Parcour';



function App() {

  const [userConnected, setUserConnected] = useState(false)
  const [adminConnected, setAdminConnected] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token") || false
    const tokenAdmin = localStorage.getItem("tokenAdmin") || false

    if (token) {
      setUserConnected(true)
    } else if (tokenAdmin) {
      setAdminConnected(true)
    }
  }, [])

  const logout = () => {
    localStorage.clear();
    setUserConnected(false)
    setAdminConnected(false)
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
        <Route path="/epl">
          <LoginAdmin connectUser={() => setUserConnected(true)} />
        </Route>
        <Route path="/logged/formulaire" exact component={QuestionPage} />
        <Route path="/modification" exact component={Modification} />
        <Route path="/connexion/login">
          <Login connectUser={() => setUserConnected(true)} />
        </Route>
        <Route path="/EP" exact component={Professionnel} />
        <Route path="/edit-team" exact component={EditTeam} />
        <Route path="/chiffres-cles" exact component={ChiffresCles} />
        <Route path="/mission-civique" exact component={EditMission} />
        <Route path="/partenaires" exact component={PartenairesEP} />
        <Route path="/rapportage" exact component={RapportageEP} />
        <Route path="/etudiants" exact component={LesEtudiants} />
        <Route path="/parcour" exact component={Parcour} />

      
      </Switch>

      <Navbar logout={logout} userConnected={userConnected} adminConnected={adminConnected} />
      <Footer />
    </BrowserRouter>

  );
}
export default App;

