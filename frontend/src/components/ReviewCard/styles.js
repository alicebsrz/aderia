import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

export const ReviewWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ReviewContent = styled.div``;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 8px;
`;

export const AuthorName = styled.strong`
  font-family: ${fonts.body};
  font-weight: 700;
  font-size: 1.1rem;
`;

export const RatingStars = styled.div`
  color: #ffc107;
`;

export const ReviewText = styled.p`
  font-family: ${fonts.body};
  color: #555;
  line-height: 1.6;
`;