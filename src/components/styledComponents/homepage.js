import styled from 'styled-components';
import BGCircles from '../../assets/shared/desktop/bg-pattern-circle.svg';

const HomepageTopPortion = styled.div`
    width: 100%;
    height: 737px;
    margin-top: -88px;
    display: flex;
    box-sizing: border-box;
    background-image: url(${BGCircles});
    background-position: 121% -172px; 
    background-repeat: no-repeat;
    justify-content: space-between;
    align-items: flex-end;
    padding-left: 11.458333333%;
    padding-right: 18.056%;

    @media (max-width: 1175px) {
        padding-left: 10%;
        padding-right: 10%;
    }

    @media (max-width: 1050px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

const HomepageTopPortionHeaderDiv = styled.div`
    width: 546px;
    height: 345px;
    margin-bottom: 152px;

    @media (max-width: 1000px) {
        height: auto;
    }
    @media (max-width: 900px) {
        width: 52%;
    }

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

    @media(max-width: 1000px) {
        font-size: 4.8rem;
        line-height: 48px;
    }
`;

const HomepageTopPortionHeaderSpan = styled.span`
    width: 100%;
    max-width: 445px;
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
    margin-right: 0%;
    margin-bottom: 75px;

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

    @media (max-width: 1275px) {
        padding: 0px 5%;
    }
`;

const HomepageSecondPortionLeftSide = styled.div`
    width: 40.0179856115%;
    height: 272px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1100px) {
        width: 36%;
        height: auto;
    }
`;

const HomepageSecondPortionLeftSideH2 = styled.h2`
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: normal;
    font-size: 4.8rem;
    line-height: 56px;
    letter-spacing: -0.369231px;
    color: #FBFCFE;

    @media (max-width: 1100px) {
        font-size: 4.0rem;
        line-height: 56px;
    }
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

    @media(max-width: 1100px) {
        margin-bottom: 8px;
    }
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
    
    @media (max-width: 1100px) {
        width: 55%;
    }
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
    padding-left: 11.458333333%;
    padding-right: 4.51388888888%;
    
    @media (max-width: 1100px) {
        padding-left: 4%;
        padding-right: 4%;   
        background-position: 240% 0px; 
    }

    @media (max-width: 1000px) {
        padding-right: 0%;   
        background-position: 300% 0px; 
    }

    @media (max-width: 925px) {
        padding-left: 2%;
        background-position: 400% 0px; 
    }
`;

const HomepageFourthPortionLeftSide = styled.div`
    width: 445px;
    height: 136px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 925px) {
        width: 40%;
        height: auto;
    }
`;

const HomepageFourthPortionLeftSideH2 = styled.h2`
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: normal;
    font-size: 4.8rem;
    line-height: 56px;
    letter-spacing: -0.369231px;
    color: #36536B;

    @media (max-width: 925px) {
        font-size: 4.0rem;
        line-height: 48px;
    }
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
    overflow: hidden;

    @media(max-width: 1000px) {
        margin-left: 50px;
    }

    @media (max-width: 900px) {
        margin-left: 0px;
        margin-right: -40px;
    }

    @media (max-width: 850px) {
        margin-right: -70px;
    }
`;

const HomepageFifthPortion = styled.div`
    width: 100%;
    height: 285px;
    display: flex;
    justify-content: space-between;
    padding: 0px 11.4583333%;
    margin-bottom: 96px;
`;

const HomepageFifthPortionContainer = styled.div`
    width: 31.531531531%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const HomepageFifthPortionContainerIMG = styled.img`
    width: 106px;
    height: 106px;
    border-radius: 50%;
`;

const HomepageFifthPortionContainerText = styled.div`
    width: 100%;
    height: 141px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const HomepageFifthPortionContainerTextH4 = styled.h4`
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.138462px;
    color: #36536B;
`;

const HomepageFifthPortionContainerTextP = styled.p`
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.115385px;
    color: #6C8294;
`;

const HomepageSixthPortion = styled.div`
    width: 100%;
    max-width: 1110px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 auto;
    margin-bottom: 96px;
`;

const HomepageSixthPortionH2 = styled.h2`
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: normal;
    font-size: 4.8rem;
    line-height: 56px;
    letter-spacing: -0.369231px;
    color: #36536B;
`;

const HomepageSixthPortionSpan = styled.span`
    width: 445px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FBFCFE;
    box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
    border-radius: 24px;
    // margin-bottom: 16px;
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
    HomepageFifthPortion,
    HomepageFifthPortionContainer,
    HomepageFifthPortionContainerIMG,
    HomepageFifthPortionContainerText,
    HomepageFifthPortionContainerTextH4,
    HomepageFifthPortionContainerTextP,
    HomepageSixthPortion,
    HomepageSixthPortionH2,
    HomepageSixthPortionSpan,
}