import React from 'react';
import styled from 'styled-components';

import { srcSet } from '../../util';

const Hero = () => {
  return (
    <Wrapper>
      <picture>
        <source type="image/avif" srcSet={srcSet(src, "avif")} />
        <source type="image/jpeg" srcSet={srcSet(src, "jpg")} />
        <HeroImage alt="Portrait of a serious-looking cat with glassy blue eyes" src={src} />
      </picture>
      <Swoop alt="" src="/swoop.svg" />
    </Wrapper>
  );
};

const src = "/images/hero-img.jpg"

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
