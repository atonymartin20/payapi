import React from 'react';
import { NavLink } from 'react-router-dom';
import PhoneIMG from '../../assets/home/desktop/illustration-phone-mockup.svg';
import Navbar from '../navbar';

import { SharedOutsideContainer, SharedInsideContainer } from '../styledComponents/shared.js';
import { HomepageTopPortion, HomepageTopPortionHeaderDiv, HomepageTopPortionHeaderH1, HomepageTopPortionHeaderSpan, HomepageTopPortionHeaderInput, HomepageTopPortionHeaderButton, HomepageTopPortionHeaderBottomSpan, HomepageTopPortionHeaderBottomDarkSpan, HomepageTopPortionPhoneIMG, HomepageSecondPortion, } from '../styledComponents/homepage.js';


class Homepage extends React.Component {
    render () {
        return (
            <SharedOutsideContainer>
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

                    <HomepageSecondPortion></HomepageSecondPortion>
                </SharedInsideContainer>
            </SharedOutsideContainer>
        )
    }
}

export default Homepage;