import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

export const SearchPageWrapper = styled.div`
  padding: 40px 80px;
  min-height: 60vh;
`;

export const Title = styled.h1`
  font-family: ${fonts.heading};
  font-size: 2.5rem;
  margin-bottom: 30px;
  span {
    font-style: italic;
    color: #555;
  }
`;

export const NoResultsMessage = styled.div`
  text-align: center;
  font-family: ${fonts.body};
  font-size: 1.2rem;
  color: #777;
  padding: 50px;
`;