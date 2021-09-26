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

const SharedInsideContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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

const NavbarInsideContainerSmall = styled.div`
    width: 100%;
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 0px 6.4%;

    @media (max-width: 630px) {
        display: flex;
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

const NavbarIMG = styled.img`
    cursor: pointer;
`;

const NavbarInsideContainerSmallWithDrawer = styled.div`
    width: 300px;
    min-height: 100vh;
    background: #1B262F;
    box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
    margin-left: auto;
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 6.4% 0px 6.4%;
`;

const NavbarCloseIcon = styled.img`
    margin-left: auto;
    cursor: pointer;
`;

const NavbarDividerLine = styled.div`
    width: 100%;
    height: 1px;
    background: #FBFCFE;
    mix-blend-mode: normal;
    opacity: 0.15;
    margin-top: 24px;
    margin-bottom: 43px;
`;

const NavbarDrawerLink = styled(Link)`
	font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.0rem;
    line-height: 23px;
    text-align: center;
    color: #FBFCFE;
    mix-blend-mode: normal;
    opacity: 0.7;
    text-decoration: none;
    letter-spacing: 1.5px;
    cursor: pointer;
    margin-bottom: 32px;
    width: 100%;

    &:hover {
        opacity: 1.0;
    }
`;

const NavbarDrawerButton = styled.div`
    width: 100%;
    height: 48px;
    background: #BA4270;
    box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.115385px;
    color: #FBFCFE;
    cursor: pointer;

    &:hover {
        background: #DA6D97;
    }
`;

// Footer
    
export {
    AppOutsideContainer,
    SharedOutsideContainer,
    SharedInsideContainer,
    NavbarOutsideContainer,
    NavbarInsideContainerLarge,
    NavbarInsideContainerSmall,
    NavbarLogo,
    NavbarLink,
    NavbarButton,
    NavbarIMG,
    NavbarInsideContainerSmallWithDrawer,
    NavbarCloseIcon,
    NavbarDividerLine,
    NavbarDrawerLink,
    NavbarDrawerButton,
}