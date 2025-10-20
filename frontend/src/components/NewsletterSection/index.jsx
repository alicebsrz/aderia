import React from 'react';
import { 
  SectionContainer, 
  NewsletterCard,
  Title,
  Form,
  Input,
  SubmitButton
} from './styles';

import { FaHeart } from 'react-icons/fa';

const NewsletterSection = () => {
  return (
    <SectionContainer>
      <NewsletterCard>
        <Title>
          <span>Subscribe</span> Newsletters
        </Title>
        <Form onSubmit={(e) => e.preventDefault()}> {/* Impede o recarregamento da página */}
          <Input type="email" placeholder="Your email" />
          <SubmitButton type="submit">
            Submit <FaHeart size={12} />
          </SubmitButton>
        </Form>
      </NewsletterCard>
    </SectionContainer>
  );
};

export default NewsletterSection;