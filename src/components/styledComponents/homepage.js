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
    align-items: flex-end;
`;

const HomepageTopPortionHeaderDiv = styled.div`
    width: 546px;
    height: 345px;
    margin-bottom: 152px;
    margin-right: 10.555555%;
    margin-left: auto;
`;

const HomepageTopPortionHeaderH1 = styled.h1`
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: normal;
    font-size: 7.2rem;
    line-height: 72px;
    letter-spacing: -0.553846px;
    color: #36536B;
    margin-bottom: 48px;
`;

const HomepageTopPortionHeaderSpan = styled.span`
    width: 445px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FBFCFE;
    box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
    border-radius: 24px;
    margin-bottom: 16px;
`;

const HomepageTopPortionHeaderInput = styled.input`
    padding-left: 27px;
    width: 272px;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 24px;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 18px;
    color: #36536B;
    cursor: pointer;
    
    ::placeholder {
        font-family: 'Public Sans';
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 18px;
        color: #36536B;
        mix-blend-mode: normal;
        opacity: 0.5;
    }

`;

const HomepageTopPortionHeaderButton = styled.div`
    width: 173px;
    height: 48px;
    background: #BA4270;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Public Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 18px;
    letter-spacing: -0.115385px;
    color: #FBFCFE;
    cursor: pointer;

    &:hover {
        background: #DA6D97;
    }
`;

const HomepageTopPortionHeaderBottomSpan = styled.span`
    margin-left: 27px;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 18px;
    color: #6C8294;
`;

const HomepageTopPortionHeaderBottomDarkSpan = styled.span`
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 18px;
    color: #6C8294;
`;

const HomepageTopPortionPhoneIMG = styled.img`
    margin-right: 10.763888%;
    margin-bottom: -30px;
`;

const HomepageSecondPortion = styled.div`
    width: 100%;
    height: 472px;
    background: #1B262F;
`;

export {
    HomepageTopPortion,
    HomepageTopPortionHeaderDiv,
    HomepageTopPortionHeaderH1,
    HomepageTopPortionHeaderSpan,
    HomepageTopPortionHeaderInput,
    HomepageTopPortionHeaderButton,
    HomepageTopPortionHeaderBottomSpan,
    HomepageTopPortionHeaderBottomDarkSpan, 
    HomepageTopPortionPhoneIMG,
    HomepageSecondPortion,
}