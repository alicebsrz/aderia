import React from 'react';
import { 
  ContactPageWrapper, 
  ContentLayout, 
  ImageColumn, 
  ProfileImage, 
  TextColumn, 
  Name, 
  ContactInfo, 
  ContactItem, 
  Description, 
  SocialLinks, 
  SocialIcon 
} from './styles';

// Importando os ícones que vamos usar
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <ContactPageWrapper>
      <ContentLayout>
        <ImageColumn>
          {/* A imagem virá da pasta 'public' */}
          <ProfileImage src="/images/profile-photo.jpg" alt="Alice Barbosa" />
        </ImageColumn>
        <TextColumn>
          <Name>Alice Barbosa</Name>

          <ContactInfo>
            <ContactItem>
              <FiMail />
              <a href="mailto:alicedesouzabarbosa01@gmail.com">alicedesouzabarbosa01@gmail.com</a>
            </ContactItem>
            <ContactItem>
              <FiPhone />
              <a href="tel:+5522988054365">+55 22 98805-4365</a>
            </ContactItem>
          </ContactInfo>

          <Description>
            <h4>English:</h4>
            <p>This website is a fictional beauty store project developed as part of my portfolio. It’s a sample model of the type of websites I create — designed with attention to usability, aesthetics, and responsive design.</p>
            
            <h4>Português:</h4>
            <p>Este site é um projeto fictício de loja de beleza, desenvolvido para o meu portfólio. Ele serve como um modelo do tipo de site que eu crio — com foco em usabilidade, estética e design responsivo. </p>
          </Description>

          <SocialLinks>
            <SocialIcon href="https://www.linkedin.com/in/alicebarbosa0101" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://github.com/alicebsrz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </SocialIcon>
          </SocialLinks>

        </TextColumn>
      </ContentLayout>
    </ContactPageWrapper>
  );
};

export default ContactPage;