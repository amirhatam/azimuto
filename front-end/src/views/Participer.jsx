import {
    MDBCol, 
    MDBRow,MDBView, 
    MDBContainer, 
    MDBBtn
} from 'mdbreact';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../assets/styles/Home.css';
import '../assets/styles/Qui.css';

import MissionCivique from './mission-civique/MissionCivique';
import Partenaires from './partenaires/Partenaires';



const Participer = () => {

    return (
        <div>
            <MDBView className="bgc-light">
            <MDBContainer
                    style={{ marginTop: "20vmax" }}
                >
                        <MDBRow >
                            <MDBCol md='12' className='mb-4 text-center '>
                                <MDBCol md='12' className='mb-4 text-center'>
                                    <p className='h3 col-9 m-auto font-weight-light mb-0 pt-md-3 pt-3'>
                                        Azimuto, c’est un collectif de personnes engagées pour que les jeunes soient actrices et acteurs de
                                        leur parcours.
                                    </p>
                                    <h4 className='display-6 font-weight-bold my-5 pt-md-3 pt-3'>
                                        DEVENIR BÉNÉVOLE </h4>
                                    <p className='h3 col-10 m-auto text-justify font-weight-light grey-text mb-5 pt-md-3 pt-3'>
                                        Que ce soit sur le terrain ou dans la gestion courante, tu peux intervenir avec nous sur des
                                        missions de facilitation des ateliers auprès des jeunes, après avoir été formé.e à nos méthodes et
                                        la vie associative. Envie de monter à bord ?
                                        Rejoins la communauté de bénévoles Azimuto !
                                    </p>
                                    <MDBBtn href="/Contact" color='amber' className="rounded-pill py-3 px-4 my-4"  >
                                    Prendre un café (réel ou virtuel)
                                    </MDBBtn>
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </MDBView>

            <MissionCivique />
            <Partenaires />

        </div>

    );
}

export default Participer;
