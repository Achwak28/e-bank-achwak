import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./Hero";
import { Button } from "../ButtonElement";
import Video from "../../videos/video.mp4";
import "./Hero.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer className="HeroContainer" id="home">
      <HeroBg className="video">
        <VideoBg
          className="video-file"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent className="HeroContent">
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign Up for a new account today and receive $250 in credit towards
          your next payment
        </HeroP>
        <HeroBtnWrapper className="HeroBtnWrapper">
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
