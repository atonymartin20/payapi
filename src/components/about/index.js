import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../navbar';

import { SharedOutsideContainer } from '../styledComponents/shared.js'


class About extends React.Component {
    render () {
        return (
            <SharedOutsideContainer>
                <Navbar />


            </SharedOutsideContainer>
        )
    }
}

export default About;