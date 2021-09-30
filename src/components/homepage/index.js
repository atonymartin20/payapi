import React from 'react';
import { Redirect } from 'react-router-dom';
import PhoneIMG from '../../assets/home/desktop/illustration-phone-mockup.svg';
import Navbar from '../navbar';
import TeslaLogo from '../../assets/shared/desktop/tesla-white.svg';
import MicrosoftLogo from '../../assets/shared/desktop/microsoft-white.svg';
import HPLogo from '../../assets/shared/desktop/hewlett-packard-white.svg';
import OracleLogo from '../../assets/shared/desktop/oracle-white.svg';
import GoogleLogo from '../../assets/shared/desktop/google-white.svg';
import NvidiaLogo from '../../assets/shared/desktop/nvidia-white.svg';
import EasyToImplement from '../../assets/home/desktop/illustration-easy-to-implement.svg';
import SimpleUI from '../../assets/home/desktop/illustration-simple-ui.svg';
import PersonalFinances from '../../assets/home/desktop/icon-personal-finances.svg';
import ConsumerPayments from '../../assets/home/desktop/icon-consumer-payments.svg';
import BankingAndCoverage from '../../assets/home/desktop/icon-banking-and-coverage.svg';

import { SharedOutsideContainer, SharedInsideContainer } from '../styledComponents/shared.js';
import { HomepageTopPortion, HomepageTopPortionHeaderDiv, HomepageTopPortionHeaderH1, HomepageTopPortionHeaderSpan, HomepageTopPortionHeaderInput, HomepageTopPortionHeaderButton, HomepageTopPortionHeaderBottomSpan, HomepageTopPortionHeaderBottomDarkSpan, HomepageTopPortionPhoneIMG, HomepageSecondPortion, HomepageSecondPortionLeftSide, HomepageSecondPortionLeftSideH2, HomepageSecondPortionLeftSideP, HomepageSecondPortionLeftSideAboutUsButton, HomepageSecondPortionRightSide, HomepageSecondPortionRightSideLogosRow1, HomepageSecondPortionRightSideLogosRow2, HomepageSecondPortionRightSideIMG, HomepageThirdPortion, HomepageThirdPortionLeftSideIMG, HomepageThirdPortionRightSideDiv, HomepageThirdPortionRightSideH2, HomepageThirdPortionRightSideP, 
    HomepageFourthPortion, HomepageFourthPortionLeftSide, HomepageFourthPortionLeftSideH2, HomepageFourthPortionLeftSideP, HomepageFourthPortionRightSideIMG, HomepageFifthPortion, HomepageFifthPortionContainer, HomepageFifthPortionContainerIMG, HomepageFifthPortionContainerText, HomepageFifthPortionContainerTextH4, HomepageFifthPortionContainerTextP, HomepageSixthPortion, HomepageSixthPortionH2, HomepageSixthPortionSpan, } from '../styledComponents/homepage.js';


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
                    <HomepageThirdPortion>
                        <HomepageThirdPortionLeftSideIMG src={EasyToImplement} alt='coding page' />

                        <HomepageThirdPortionRightSideDiv>
                            <HomepageThirdPortionRightSideH2>
                                Easy to implement
                            </HomepageThirdPortionRightSideH2>
                            <HomepageThirdPortionRightSideP>
                                Our API comes with just a few lines of code. You’ll be up and running in 
                                no time. We built our documentation page to integrate payments functionality 
                                with ease.
                            </HomepageThirdPortionRightSideP>
                        </HomepageThirdPortionRightSideDiv>
                    </HomepageThirdPortion>

                    <HomepageFourthPortion>
                        <HomepageFourthPortionLeftSide>
                            <HomepageFourthPortionLeftSideH2>
                                Simple UI &amp; UX
                            </HomepageFourthPortionLeftSideH2>

                            <HomepageFourthPortionLeftSideP> 
                                Our pre-built form is easy to integrate in your app or website’s checkout 
                                flow and designed to optimize conversion.
                            </HomepageFourthPortionLeftSideP>                 
                        </HomepageFourthPortionLeftSide>

                        <HomepageFourthPortionRightSideIMG src={SimpleUI} alt='' />
                    </HomepageFourthPortion>

                    <HomepageFifthPortion>
                        <HomepageFifthPortionContainer>
                            <HomepageFifthPortionContainerIMG src={PersonalFinances} alt='' />
                            
                            <HomepageFifthPortionContainerText>
                                <HomepageFifthPortionContainerTextH4>
                                    Personal Finances
                                </HomepageFifthPortionContainerTextH4>
                                <HomepageFifthPortionContainerTextP>
                                    Consolidate financial data from multiple sources and categorize transactions up to
                                    2 years of history. Analyze reports to reconcile activities in your account.
                                </HomepageFifthPortionContainerTextP>
                            </HomepageFifthPortionContainerText>
                        </HomepageFifthPortionContainer>

                        <HomepageFifthPortionContainer>
                            <HomepageFifthPortionContainerIMG src={BankingAndCoverage} alt='' />
                            
                            <HomepageFifthPortionContainerText>
                                <HomepageFifthPortionContainerTextH4>
                                    Banking &amp; Coverage
                                </HomepageFifthPortionContainerTextH4>
                                <HomepageFifthPortionContainerTextP>
                                    With our platform, you can speed up account onboarding and support ongoing payments 
                                    for checking, savings, credit card, and brokerage accounts.
                                </HomepageFifthPortionContainerTextP>
                            </HomepageFifthPortionContainerText>
                        </HomepageFifthPortionContainer>

                        <HomepageFifthPortionContainer>
                            <HomepageFifthPortionContainerIMG src={ConsumerPayments} alt='' />
                            
                            <HomepageFifthPortionContainerText>
                                <HomepageFifthPortionContainerTextH4>
                                    Consumer Payments
                                </HomepageFifthPortionContainerTextH4>
                                <HomepageFifthPortionContainerTextP>
                                    It’s easier to set up secure bank payments with us through a flow designed with the 
                                    user experience in mind. Customers could instantly authenticate their account.
                                </HomepageFifthPortionContainerTextP>
                            </HomepageFifthPortionContainerText>
                        </HomepageFifthPortionContainer>
                    </HomepageFifthPortion>

                    <HomepageSixthPortion>
                        <HomepageSixthPortionH2>
                            Ready to start?
                        </HomepageSixthPortionH2>

                        <HomepageSixthPortionSpan>
                            <HomepageTopPortionHeaderInput placeholder='Enter email address'/>
                            <HomepageTopPortionHeaderButton>
                                Schedule a Demo
                            </HomepageTopPortionHeaderButton>
                        </HomepageSixthPortionSpan>
                    </HomepageSixthPortion>

                </SharedInsideContainer>
            </SharedOutsideContainer>
        )
    }
}

export default Homepage;