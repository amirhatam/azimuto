import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn,
    MDBContainer,
} from 'mdbreact';
import '../assets/styles/Home.css';
import Logo from "../assets/images/Logo2.png"


const Navbar = (props) => {

    const overlay = (
        <div
            id='sidenav-overlay'
            style={{ backgroundColor: 'transparent' }}
        />
    );

    return (
        <div  >

            <MDBNavbar
                // color='secondary-color'
                color='#ef8552 orange'
                light
                expand='md'
                fixed='top'
                scrolling
                transparent
            >

                <MDBContainer>
                    <MDBNavbarBrand className="loco-con">
                        <img
                            src={Logo}
                            alt=""
                            className="rounded-circle z-depth-2-half logo"
                        />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler />
                    <MDBCollapse navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/">Accueil</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/qui-sommes-nous">Qui sommes-nous ?</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/nos-programmes">Nos Programmes</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/participer">Participer</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className="mx-1">
                                <MDBNavLink className="navbarFS " to="/Contact">Contact</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBBtn rounded  className='btn-blue'>
                                    {/* <MDBIcon icon='user' className=' mr-2' />  */}
                                    {props.userConnected || props.adminConnected
                                        ?
                                        <MDBNavLink className='loco-con text-light' to="/" onClick={props.logout}>Se déconnecter</MDBNavLink>
                                        :
                                        <MDBNavLink className='loco-con text-light' to="/connexion">Se connecter</MDBNavLink>
                                    }
                                </MDBBtn>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>

            </MDBNavbar>


        </div>
    );
}

export default Navbar;

