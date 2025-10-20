import React from 'react';
import { 
  SidebarContainer,
  MobileHeader, // Importar
  CloseButton,  // Importar
  FilterGroup,
  FilterTitle,
  FilterList,
  FilterItem
} from './styles';

import { FiX } from 'react-icons/fi'; // Ícone de fechar

// Este componente recebe os dados e as funções da página principal
const FilterSidebar = ({ products, selectedFilters, onFilterChange, isOpen, onClose }) => {
  // Pega as categorias e tipos únicos do nosso array de produtos
  const categories = [...new Set(products.map(p => p.category))];
  const types = [...new Set(products.map(p => p.type))];

  return (
    // Passamos a prop 'isOpen' para o container
  <SidebarContainer $isOpen={isOpen}>
      {/* NOVO: Cabeçalho que só aparece no mobile */}
      <MobileHeader>
        <FilterTitle>Filters</FilterTitle>
        <CloseButton onClick={onClose}>
          <FiX />
        </CloseButton>
      </MobileHeader>

      <FilterGroup>
        <FilterTitle>Category</FilterTitle>
        <FilterList>
          {categories.map(category => (
            <FilterItem key={category}>
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedFilters.category.includes(category)}
                  onChange={() => onFilterChange('category', category)}
                />
                {category}
              </label>
            </FilterItem>
          ))}
        </FilterList>
      </FilterGroup>

      <FilterGroup>
        <FilterTitle>Product Type</FilterTitle>
        <FilterList>
          {types.map(type => (
            <FilterItem key={type}>
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedFilters.type.includes(type)}
                  onChange={() => onFilterChange('type', type)}
                />
                {type}
              </label>
            </FilterItem>
          ))}
        </FilterList>
      </FilterGroup>
    </SidebarContainer>
  );
};

export default FilterSidebar;