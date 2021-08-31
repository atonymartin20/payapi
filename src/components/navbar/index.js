import React from 'react';

import { NavbarContainer, NavbarLogo, NavbarLink, NavbarButton } from '../styledComponents/shared.js'
import Logo from '../../assets/shared/desktop/logo.svg';

class Navbar extends React.Component {
    state = {
        drawerOpen: false,
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

    render () {
        return (
            <NavbarContainer>
                <NavbarLogo to='/' src={Logo} alt='logo' />

                <NavbarLink to='/pricing'>Pricing</NavbarLink>

                <NavbarLink to='/about'>About</NavbarLink>

                <NavbarLink to='/contact'>Contact</NavbarLink>

                <NavbarButton to='/contact'>
                    Schedule a Demo
                </NavbarButton>
            </NavbarContainer>
        )
    }
}

export default Navbar;