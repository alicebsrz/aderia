// frontend/src/pages/CatalogPage/index.jsx
import React, { useState, useMemo } from 'react'; // 1. Importar useState e useMemo
import { 
  BannerContainer, 
  BannerTitle, 
  MainContent,
  ProductGridContainer,
  ProductGrid,
  MobileFilterButton,
  Overlay
} from './styles';

import FilterSidebarComponent from '../../components/FilterSidebar'; // 1. Importe o novo componente

import { products } from '../../data/products';
import CatalogProductCard from '../../components/CatalogProductCard';

const CatalogPage = () => {
  // 2. Criar o estado para guardar os filtros selecionados
  const [filters, setFilters] = useState({
    category: [],
    type: [],
  });
  // NOVO: Estado para controlar o painel de filtros no mobile
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 3. Lógica para atualizar os filtros quando um checkbox é clicado
  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => {
      const currentFilters = prevFilters[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(item => item !== value) // Desmarca: remove o item
        : [...currentFilters, value]; // Marca: adiciona o item
      return { ...prevFilters, [filterType]: newFilters };
    });
  };

  // 4. Filtrar os produtos com base no estado dos filtros
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
      const typeMatch = filters.type.length === 0 || filters.type.includes(product.type);
      return categoryMatch && typeMatch;
    });
  }, [filters]); // Esta lógica só roda novamente quando os 'filters' mudam

  return (
    <>
  {/* NOVO: Overlay que só aparece quando o filtro está aberto */}
  <Overlay $isOpen={isFilterOpen} onClick={() => setIsFilterOpen(false)} />

      <BannerContainer>
        <BannerTitle>Explore Our Collection</BannerTitle>
      </BannerContainer>

      <MainContent>
        <FilterSidebarComponent 
          products={products}
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
          // NOVO: Props para controlar a visibilidade no mobile
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />

        <ProductGridContainer>
          {/* NOVO: Botão que só aparece no mobile */}
          <MobileFilterButton onClick={() => setIsFilterOpen(true)}>
            Filters
          </MobileFilterButton>

          <ProductGrid>
            {/* 5. Mapear sobre os produtos FILTRADOS */}
            {filteredProducts.map(product => (
              <CatalogProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </ProductGridContainer>
      </MainContent>
    </>
  );
};

export default CatalogPage;