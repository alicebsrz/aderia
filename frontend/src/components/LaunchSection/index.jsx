import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importar o Link
import { 
  SectionContainer,
  ContentWrapper,
  TextContent,
  MainTitle,
  LaunchTitle,
  Description,
  DetailsButton,
  ImageContent,
  ProductImage
} from './styles';

// Importe as imagens
import fundoImg from '../../assets/fundo.png';
import cremeImg from '../../assets/creme.png';

// Importe um ícone para o botão
// CORREÇÃO FINAL: importar o ícone da coleção Font Awesome (fa)
import { FaGem } from 'react-icons/fa';

const LaunchSection = () => {
  return (
    <SectionContainer $bgImage={fundoImg}>
      <ContentWrapper>
        <TextContent>
          <MainTitle>Our Latest Beauty Care Innovation</MainTitle>
          <LaunchTitle>Launching Soon!</LaunchTitle>
          <Description>
            Get ready to elevate your beauty routine with our upcoming new beauty care product. Stay tuned for the unveiling of our innovative formula designed to enhance your natural radiance.
          </Description>

          <Link to="/products" style={{ textDecoration: 'none' }}>
            <DetailsButton>
              Check details <FaGem size={16} />
            </DetailsButton>
          </Link>
        </TextContent>

        <ImageContent>
          <ProductImage src={cremeImg} alt="New beauty care product" />
        </ImageContent>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default LaunchSection;