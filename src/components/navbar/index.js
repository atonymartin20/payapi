import React from 'react';

import { NavbarOutsideContainer, NavbarInsideContainerLarge, NavbarInsideContainerSmall, NavbarLogo, NavbarLink, NavbarButton, NavbarIMG, 
    NavbarInsideContainerSmallWithDrawer, NavbarCloseIcon, NavbarDividerLine, NavbarDrawerLink, NavbarDrawerButton } from '../styledComponents/shared.js'
import Logo from '../../assets/shared/desktop/logo.svg';
import Hamburger from '../../assets/shared/mobile/menu.svg';
import CloseIcon from '../../assets/shared/mobile/close.svg';
import { NavLink, Redirect } from 'react-router-dom';

class Navbar extends React.Component {
    state = {
        drawerOpen: false,
        redirectToContact: false,
    }

    openDrawer = (event) => {
        event.preventDefault();
        this.setState({
            drawerOpen: true,
        })
    }

    closeDrawer = (event) => {
        event.preventDefault();
        this.setState({
            drawerOpen: false,
        })
    }

    buttonClickToContact = (event) => {
        event.preventDefault();
        this.setState({
            redirectToContact: true,
        })
    }

    render () {
        return (
            <NavbarOutsideContainer>
                {this.state.redirectToContact === true ? <Redirect to='/contact' /> : null }
                <NavbarInsideContainerLarge>
                    <NavLink to='/'><NavbarLogo src={Logo} alt='logo' /></NavLink>

                    <NavbarLink to='/pricing'>Pricing</NavbarLink>

                    <NavbarLink to='/about'>About</NavbarLink>

                    <NavbarLink to='/contact'>Contact</NavbarLink>

                    <NavbarButton onClick={this.buttonClickToContact}>
                        Schedule a Demo
                    </NavbarButton>
                </NavbarInsideContainerLarge>

                { this.state.drawerOpen === false ? 
                    <NavbarInsideContainerSmall>
                        <NavLink to='/'><NavbarLogo src={Logo} alt='logo' /></NavLink>

                        <NavbarIMG src={Hamburger} alt='hamburger' onClick={this.openDrawer} />

                    </NavbarInsideContainerSmall>
                : null
                }

                { this.state.drawerOpen === true ?
                    <NavbarInsideContainerSmallWithDrawer>
                        <NavbarCloseIcon  src={CloseIcon} alt='close icon' onClick={this.closeDrawer} />

                        <NavbarDividerLine />

                        <NavbarDrawerLink to='/pricing'>Pricing</NavbarDrawerLink>

                        <NavbarDrawerLink to='/about'> About</NavbarDrawerLink>

                        <NavbarDrawerLink to='/contact'>Contact</NavbarDrawerLink>

                        <NavbarDrawerButton onClick={this.buttonClickToContact}>
                            Schedule a Demo
                        </NavbarDrawerButton>
                    </NavbarInsideContainerSmallWithDrawer>
                : null
                }

            </NavbarOutsideContainer>
        )
    }
}

export default Navbar;