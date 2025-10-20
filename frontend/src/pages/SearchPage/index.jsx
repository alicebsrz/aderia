import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SearchPageWrapper, Title, NoResultsMessage } from './styles';
import { ProductGrid } from '../CatalogPage/styles'; // Reutilizamos o estilo da grade!
import CatalogProductCard from '../../components/CatalogProductCard';

const SearchPage = () => {
  const { keyword } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/products?keyword=${keyword}`);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [keyword]); // Roda a busca toda vez que a palavra-chave na URL muda

  return (
    <SearchPageWrapper>
      <Title>Search Results for: <span>"{keyword}"</span></Title>
      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <ProductGrid>
          {products.map(product => (
            <CatalogProductCard key={product._id} product={product} />
          ))}
        </ProductGrid>
      ) : (
        <NoResultsMessage>
          No products found matching your search. Try another keyword.
        </NoResultsMessage>
      )}
    </SearchPageWrapper>
  );
};

export default SearchPage;