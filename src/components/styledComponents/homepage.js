import styled from 'styled-components';
// import { Link } from 'react-router-dom';
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${BGCircles});
    background-position: -35.75% -359px; 
    background-repeat: no-repeat;
    margin-bottom: 150px;
    padding: 0px 11.38888888%;
`;

const HomepageSecondPortionLeftSide = styled.div`
    width: 40.0179856115%;
    height: 272px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HomepageSecondPortionLeftSideH2 = styled.h2`
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: normal;
    font-size: 4.8rem;
    line-height: 56px;
    letter-spacing: -0.369231px;
    color: #FBFCFE;
`;

const HomepageSecondPortionLeftSideP = styled.p`
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 28px;
    color: #FBFCFE;
    mix-blend-mode: normal;
    opacity: 0.7;
`;

const HomepageSecondPortionLeftSideAboutUsButton = styled.div`
    width: 129px;
    height: 48px;
    border: 1px solid #FBFCFE;
    box-sizing: border-box;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Public Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.115385px;
    color: #FBFCFE;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        background: #FFFFFF;
        color: #1B262F;
    }
`;

const HomepageSecondPortionRightSide = styled.div`
    width: 48.2014388489%;
    height: 103px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HomepageSecondPortionRightSideLogosRow1 = styled.div`
    width: 100%;
    height: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HomepageSecondPortionRightSideLogosRow2 = styled.div`
    width: 100%;
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HomepageSecondPortionRightSideIMG = styled.img`

`;

const HomepageThirdPortion = styled.div`
    width: 100%;
    max-width: 1015px;
    height: 284px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 10px;
`;

const HomepageThirdPortionLeftSideIMG = styled.img`
    width: 445px;
    height: 284px;
`;

const HomepageThirdPortionRightSideDiv = styled.div`
    width: 445px;
    height: 164px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HomepageThirdPortionRightSideH2 = styled.h2`
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: normal;
    font-size: 4.8rem;
    line-height: 56px;
    letter-spacing: -0.369231px;
    color: #36536B;
`;

const HomepageThirdPortionRightSideP = styled.p`
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 28px;
    color: #6C8294;
`;

const HomepageFourthPortion = styled.div`
    width: 100%;
    height: 780px;
    box-sizing: border-box;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${BGCircles});
    background-position: 159% 0px; 
    background-repeat: no-repeat;
    border: 1px solid black;
    padding-left: 11.458333333%;
    padding-right: 4.51388888888%;
`;

const HomepageFourthPortionLeftSide = styled.div`
    width: 445px;
    height: 136px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HomepageFourthPortionLeftSideH2 = styled.h2`
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: normal;
    font-size: 4.8rem;
    line-height: 56px;
    letter-spacing: -0.369231px;
    color: #36536B;
`;

const HomepageFourthPortionLeftSideP = styled.p`
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 28px;
    color: #6C8294;
`;

const HomepageFourthPortionRightSideIMG = styled.img`
    margin-top: 50px;
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
    HomepageSecondPortionLeftSide,
    HomepageSecondPortionLeftSideH2,
    HomepageSecondPortionLeftSideP,
    HomepageSecondPortionLeftSideAboutUsButton,
    HomepageSecondPortionRightSide,
    HomepageSecondPortionRightSideLogosRow1,
    HomepageSecondPortionRightSideLogosRow2,
    HomepageSecondPortionRightSideIMG,
    HomepageThirdPortion,
    HomepageThirdPortionLeftSideIMG,
    HomepageThirdPortionRightSideDiv,
    HomepageThirdPortionRightSideH2,
    HomepageThirdPortionRightSideP,
    HomepageFourthPortion,
    HomepageFourthPortionLeftSide,
    HomepageFourthPortionLeftSideH2,
    HomepageFourthPortionLeftSideP,
    HomepageFourthPortionRightSideIMG,
}