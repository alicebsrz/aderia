import React from 'react';
import { 
  FooterContainer, 
  TopSection, 
  LinkGroup, 
  SocialIcons, 
  BottomSection,
  LegalLinks,
  LogoImage
} from './styles';

// Importando ícones e logo
import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <LinkGroup>
          <a href="#">About Us</a>
          <a href="#">Explore</a>
          <a href="#">Offers</a>
          <a href="#">Best Sellers</a>
          <a href="#">Contact Us</a>
        </LinkGroup>
        <SocialIcons>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Vimeo"><FaVimeoV /></a>
          <a href="#" aria-label="Youtube"><FaYoutube /></a>
        </SocialIcons>
      </TopSection>
      <BottomSection>
        <p>© {new Date().getFullYear()} Aderia. All rights reserved.</p>
        <LegalLinks>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </LegalLinks>
      </BottomSection>
      <LogoImage src={logo} alt="Aderia Logo" />
    </FooterContainer>
  );
};

export default Footer;