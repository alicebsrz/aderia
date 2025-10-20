import styled from 'styled-components';
import { fonts } from '../../styles/GlobalStyle';

const bp = {
  md: '768px',
};

export const ContactPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 80px;
  min-height: 80vh;

  @media (max-width: ${bp.md}) {
    padding: 30px 24px;
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  max-width: 1100px;
  width: 100%;

  @media (max-width: ${bp.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageColumn = styled.div``;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);

  @media (max-width: ${bp.md}) {
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
  }
`;

export const TextColumn = styled.div``;

export const Name = styled.h1`
  font-family: ${fonts.heading};
  font-size: 3rem;
  margin-bottom: 15px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;

  @media (max-width: ${bp.md}) {
    align-items: center;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.body};
  font-size: 1.1rem;

  a {
    color: #555;
    text-decoration: none;
    &:hover {
      color: #da627d;
    }
  }
`;

export const Description = styled.div`
  font-family: ${fonts.body};
  color: #666;
  line-height: 1.7;
  margin-bottom: 30px;

  h4 {
    font-weight: 700;
    color: #333;
    margin-top: 15px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: ${bp.md}) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  font-size: 2rem;
  color: #333;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #da627d;
    transform: scale(1.1);
  }
`;