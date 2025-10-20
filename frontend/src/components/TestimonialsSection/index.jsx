import React from 'react';
import { 
  SectionContainer, 
  SectionHeader, 
  TitleBlock, 
  Title, 
  Subtitle,
  NavButtons,
  NavButton,
  SwiperContainer
} from './styles';

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Nossos dados e componentes
import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../TestimonialCard';

// Ícones para os botões
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const TestimonialsSection = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <TitleBlock>
          <Title>Hear What Others Are Saying!</Title>
          <Subtitle>Discover why our customers are loving our products.</Subtitle>
        </TitleBlock>
        <NavButtons>
          {/* Adicionamos classes para o Swiper controlar os botões */}
          <NavButton className="swiper-button-prev-custom"><FiArrowLeft /></NavButton>
          <NavButton className="swiper-button-next-custom"><FiArrowRight /></NavButton>
        </NavButtons>
      </SectionHeader>

      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30} // Espaço entre os slides
          slidesPerView={1} // Padrão para mobile
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          // Breakpoints para responsividade
          breakpoints={{
            768: { // Telas > 768px (md)
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: { // Telas > 1024px (lg)
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} style={{ height: 'auto' }}>
              <TestimonialCard
                name={testimonial.name}
                image={testimonial.image}
                rating={testimonial.rating}
                review={testimonial.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </SectionContainer>
  );
};

export default TestimonialsSection;