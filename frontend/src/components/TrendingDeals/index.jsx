// frontend/src/components/TrendingDeals/index.jsx
import React from 'react';
import ProductCard from '../ProductCard'; // Importar o card que criamos
import { 
  SectionContainer, 
  SectionHeader, 
  TitleBlock, 
  Title, 
  Subtitle, 
  FilterButton,
  CardGrid
} from './styles';

// Importar os ícones e novas imagens elipse
import { FiChevronDown } from 'react-icons/fi';
import elipse1 from '../../assets/elipse-1.png';
import elipse2 from '../../assets/elipse-2.png';
import elipse3 from '../../assets/elipse-3.png';

// Dados dos produtos (no futuro, isso virá de uma API)
const products = [
  {
    image: elipse1,
    title: '50% Off on Creams',
    description: 'Grab exclusive discount curated for you.'
  },
  {
    image: elipse2,
    title: '50% Off on Creams',
    description: 'Grab exclusive discount curated for you.'
  },
  {
    image: elipse3,
    title: '50% Off on Creams',
    description: 'Grab exclusive discount curated for you.'
  }
];

const TrendingDeals = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <TitleBlock>
          <Title>Trending Deals</Title>
          <Subtitle>Discover unbeatable offers on top beauty essentials.</Subtitle>
        </TitleBlock>
        <FilterButton>
          New Arrival <FiChevronDown />
        </FilterButton>
      </SectionHeader>
      
      <CardGrid>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </CardGrid>
    </SectionContainer>
  );
};

export default TrendingDeals;