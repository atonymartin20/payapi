import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PhoneIMG from '../../assets/home/desktop/illustration-phone-mockup.svg';
import Navbar from '../navbar';
import TeslaLogo from '../../assets/shared/desktop/tesla-white.svg';
import MicrosoftLogo from '../../assets/shared/desktop/microsoft-white.svg';
import HPLogo from '../../assets/shared/desktop/hewlett-packard-white.svg';
import OracleLogo from '../../assets/shared/desktop/oracle-white.svg';
import GoogleLogo from '../../assets/shared/desktop/google-white.svg';
import NvidiaLogo from '../../assets/shared/desktop/nvidia-white.svg';

import { SharedOutsideContainer, SharedInsideContainer } from '../styledComponents/shared.js';
import { HomepageTopPortion, HomepageTopPortionHeaderDiv, HomepageTopPortionHeaderH1, HomepageTopPortionHeaderSpan, HomepageTopPortionHeaderInput, HomepageTopPortionHeaderButton, HomepageTopPortionHeaderBottomSpan, HomepageTopPortionHeaderBottomDarkSpan, HomepageTopPortionPhoneIMG, HomepageSecondPortion, HomepageSecondPortionLeftSide, HomepageSecondPortionLeftSideH2, HomepageSecondPortionLeftSideP, HomepageSecondPortionLeftSideAboutUsButton, HomepageSecondPortionRightSide, HomepageSecondPortionRightSideLogosRow1, HomepageSecondPortionRightSideLogosRow2, HomepageSecondPortionRightSideIMG, HomepageThirdPortion, } from '../styledComponents/homepage.js';


class Homepage extends React.Component {
    state = {
        redirectToAboutUs: false,
    }


    buttonClickToAboutUs = (event) => {
        event.preventDefault();
        this.setState({
            redirectToAboutUs: true,
        })
    }

    render () {
        return (
            <SharedOutsideContainer>
                {this.state.redirectToAboutUs === true ? <Redirect to='/about' /> : null }
                <Navbar />

                <SharedInsideContainer>
                    <HomepageTopPortion>
                        <HomepageTopPortionHeaderDiv>
                            <HomepageTopPortionHeaderH1>
                                Start building with our APIs for absolutely free.
                            </HomepageTopPortionHeaderH1>
                            <HomepageTopPortionHeaderSpan>
                                <HomepageTopPortionHeaderInput placeholder='Enter email address'/>
                                <HomepageTopPortionHeaderButton>
                                    Schedule a Demo
                                </HomepageTopPortionHeaderButton>
                            </HomepageTopPortionHeaderSpan>
                            <HomepageTopPortionHeaderBottomSpan>
                                Have any questions? <HomepageTopPortionHeaderBottomDarkSpan>Contact Us</HomepageTopPortionHeaderBottomDarkSpan>
                            </HomepageTopPortionHeaderBottomSpan>
                        </HomepageTopPortionHeaderDiv>

                        <HomepageTopPortionPhoneIMG src={PhoneIMG} alt='phone' />
                    </HomepageTopPortion>

                    <HomepageSecondPortion>
                        <HomepageSecondPortionLeftSide>
                            <HomepageSecondPortionLeftSideH2>
                                Who we work with
                            </HomepageSecondPortionLeftSideH2> 
                            <HomepageSecondPortionLeftSideP>
                                Today, millions of people around the world have successfully connected 
                                their accounts to apps they love using our API. We provide developers 
                                with the tools they need to create easy and accessible experiences 
                                for their users.
                            </HomepageSecondPortionLeftSideP>
                            
                            <HomepageSecondPortionLeftSideAboutUsButton onClick={this.buttonClickToAboutUs}>
                                About Us
                            </HomepageSecondPortionLeftSideAboutUsButton>
                        </HomepageSecondPortionLeftSide>

                        <HomepageSecondPortionRightSide>
                            <HomepageSecondPortionRightSideLogosRow1>
                                <HomepageSecondPortionRightSideIMG src={TeslaLogo} alt='Tesla' />
                                <HomepageSecondPortionRightSideIMG src={MicrosoftLogo} alt='Microsoft' />
                                <HomepageSecondPortionRightSideIMG src={HPLogo} alt='Hewlett Packard' />
                            </HomepageSecondPortionRightSideLogosRow1>

                            <HomepageSecondPortionRightSideLogosRow2>
                                <HomepageSecondPortionRightSideIMG src={OracleLogo} alt='Oracle' />
                                <HomepageSecondPortionRightSideIMG src={GoogleLogo} alt='Google' />
                                <HomepageSecondPortionRightSideIMG src={NvidiaLogo} alt='Nvidia' />
                            </HomepageSecondPortionRightSideLogosRow2>
                        </HomepageSecondPortionRightSide>


                    </HomepageSecondPortion>
                    <HomepageThirdPortion></HomepageThirdPortion>
                </SharedInsideContainer>
            </SharedOutsideContainer>
        )
    }
}

export default Homepage;