import React from 'react';
import { 
  SectionContainer,
  ImageContainer,
  StyledImage,
  TextContainer,
  MainHeadline,
  HighlightText,
  SubsectionsGrid,
  Subsection,
  SubsectionTitle,
  SubsectionText
} from './styles';

// Importe a imagem da modelo
import modeloIntro from '../../assets/modelo-intro.png';

const AboutSection = () => {
  return (
    <SectionContainer id="about-us">
      <ImageContainer>
        <StyledImage src={modeloIntro} alt="GlowGenics model" />
      </ImageContainer>

      <TextContainer>
        <MainHeadline>
          GlowGenics Sets the Standard in <HighlightText>Beauty</HighlightText> <HighlightText>Excellence.</HighlightText>
        </MainHeadline>

        <SubsectionsGrid>
          <Subsection>
            <SubsectionTitle>Specialized Skincare Solutions</SubsectionTitle>
            <SubsectionText>
              Discover personalized skincare solutions designed to cater to your unique beauty needs.
            </SubsectionText>
          </Subsection>

          <Subsection>
            <SubsectionTitle>Artisanal Makeup Creations</SubsectionTitle>
            <SubsectionText>
              Indulge in artisanal makeup creations meticulously crafted to elevate your beauty.
            </SubsectionText>
          </Subsection>
        </SubsectionsGrid>
      </TextContainer>
    </SectionContainer>
  );
};

export default AboutSection;