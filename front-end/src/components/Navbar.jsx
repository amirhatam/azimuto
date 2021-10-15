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
    MDBIcon
} from 'mdbreact';
import '../assets/styles/NavBar.css';
import Logo from "../assets/images/Logo.png"


const Navbar = (props) => {

    return (
        <div  >
            <MDBNavbar
                // color='blue-grey darken-2'
                // color=' light-blue lighten-4'
                // color='blue lighten-4'
                color='bgc-light'
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
                                    className=" z-depth-2-half logo"
                                />
                            </MDBNavbarBrand>
                            <MDBNavbarToggler />
                   
                            <MDBCollapse navbar>
                                <MDBNavbarNav left className="ml-5">
                                    <MDBNavItem className="mx-1">
                                        <MDBNavLink className="navbarFS   ml-3" to="/">Accueil</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem className="mx-1">
                                        <MDBNavLink className="navbarFS  " to="/qui-sommes-nous">Qui sommes-nous ?</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem className="mx-1">
                                        <MDBNavLink className="navbarFS  " to="/nos-programmes">Nos Programmes</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem className="mx-1">
                                        <MDBNavLink className="navbarFS  " to="/participer">Participer</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem className="mx-1">
                                        <MDBNavLink className="navbarFS  " to="/Contact">Contact</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBBtn rounded  color="amber" className='px-3'>
                                            {/* <MDBIcon icon='user' className=' mr-2' />  */}
                                            {props.userConnected || props.adminConnected
                                                ?
                                                <MDBNavLink className='loco-con text-white' to="/" onClick={props.logout}><MDBIcon icon="power-off" className="pr-2"/>  Se déconnecter</MDBNavLink>
                                                :
                                                <MDBNavLink className='loco-con text-white' to="/connexion"><MDBIcon icon="sign-in-alt" className="pr-2"/> Se connecter</MDBNavLink>
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

