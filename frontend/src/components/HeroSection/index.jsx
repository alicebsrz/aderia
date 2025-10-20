import React from 'react';
import {
  HeroContainer,
  TextContent,
  HeroLogoImage,
  MobileLogoImage,
  TagGroup,
  InfoTag,
  TagTextContainer,
  TagTitle,
  TagSubtitle,
  ImageContent,
  ModelImage
} from './styles';

// ícones — instale: npm i react-icons
import { FiTruck, FiRefreshCcw, FiAward } from 'react-icons/fi';

// imagens locais
import logo from '../../assets/logo.png';
import heroModelImage from '../../assets/hero-model.png';

const HeroSection = () => {
  return (
    <HeroContainer>
      {/* Este logo só aparece no mobile e na primeira posição */}
      <MobileLogoImage src={logo} alt="Aderia" />

      {/* No DESKTOP, esta é a coluna da esquerda */}
      <TextContent>
        {/* Este logo só aparece no desktop */}
        <HeroLogoImage src={logo} alt="Aderia" />
        <TagGroup>
          <InfoTag>
            <FiTruck />
            <TagTextContainer>
              <TagTitle>Free Shipping</TagTitle>
              <TagSubtitle>On order above Rs. 455</TagSubtitle>
            </TagTextContainer>
          </InfoTag>
          <InfoTag>
            <FiRefreshCcw />
            <TagTextContainer>
              <TagTitle>Easy Returns</TagTitle>
              <TagSubtitle>15 Days refund Policy</TagSubtitle>
            </TagTextContainer>
          </InfoTag>
          <InfoTag>
            <FiAward />
            <TagTextContainer>
              <TagTitle>100% Authentic</TagTitle>
              <TagSubtitle>Sourced Directly</TagSubtitle>
            </TagTextContainer>
          </InfoTag>
        </TagGroup>
      </TextContent>

      {/* No DESKTOP, esta é a coluna da direita. No MOBILE, é o segundo item */}
      <ImageContent>
        <ModelImage src={heroModelImage} alt="Model showcasing Aderia products" />
      </ImageContent>
    </HeroContainer>
  );
};

export default HeroSection;