import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  
`;

export const HeroBg = styled.div`
position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

 
  `

export const VideoBg = styled.video`
width: 100%;
height: 100%;
background: #232a34;
object-fit: cover;
-o-object-fit: cover;



`
export const HeroContent = styled.div`
  z-index: 99999;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  diplay: flex;
  flex-column: column;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  diplay: flex;
  flex-column: column;
  align-items: center;
  justify-content: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
