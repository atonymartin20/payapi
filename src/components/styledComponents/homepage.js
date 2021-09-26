import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BGCircles from '../../assets/shared/desktop/bg-pattern-circle.svg';

const HomepageTopPortion = styled.div`
    width: 100%;
    height: 737px;
    margin-top: -88px;
    display: flex;
    background-image: url(${BGCircles});
    background-position: 121% -172px; 
    background-repeat: no-repeat;

`;

export {
    HomepageTopPortion,
}