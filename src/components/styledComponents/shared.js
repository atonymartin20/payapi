import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BGCircles from '../../assets/shared/desktop/bg-pattern-circle.svg';

//  App Styled Components
const AppOutsideContainer = styled.div`
    width: 100%;
	min-height: 100vh;
    background: #EDF3F8;
	display: flex;
	justify-content: center;
`;

const SharedOutsideContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    background: #EDF3F8;
    padding-top: 40px;
`;

// Navbar
const NavbarOutsideContainer = styled.div`
    width: 100%;
`;

const NavbarInsideContainerLarge = styled.div`
    width: 100%;
    height: 48px;
    padding: 0px 11.458333%;
    display: flex;
    align-items: center;

    @media (max-width: 875px) {
        padding: 0px 5.14322916%;
    }

    @media (max-width: 725px) {
        padding: 0px 3.5%;
    }

    @media (max-width: 630px) {
        display: none;
    }
    
`;

const NavbarLogo = styled.img`
    margin-right: 64px;

    @media (max-width: 700px) {
        margin-right: 30px;
    }
`;

const NavbarLink = styled(Link)`
    margin-right: 40px;
	font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 18px;
    color: #36536B;
    mix-blend-mode: normal;
    opacity: 0.7;
    text-decoration: none;
    letter-spacing: .25px;
    cursor: pointer;

    &:hover {
        opacity: 1.0;
    }

    @media (max-width: 700px) {
        margin-right: 30px;
    }
`;

const NavbarButton = styled.div`
    width: 173px;
    height: 48px;
    background: #BA4270;
    box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
    border-radius: 24px;
    font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 18px;
    letter-spacing: -0.115385px;
    color: #FBFCFE;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    cursor: pointer;

    &:hover {
        background: #DA6D97;
    }
`;

// Footer
    
export {
    AppOutsideContainer,
    SharedOutsideContainer,
    NavbarOutsideContainer,
    NavbarInsideContainerLarge,
    NavbarLogo,
    NavbarLink,
    NavbarButton
}