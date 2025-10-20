import styled from 'styled-components';

const bp = {
  md: '768px',
};

// Container principal que é flex nos dois modos
export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 48px 80px;
  background: #FFD1EF;
  min-height: 80vh;

  @media (max-width: ${bp.md}) {
    flex-direction: column;
    padding: 40px 24px;
    gap: 30px;
  }
`;

// A coluna da esquerda (texto e tags)
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 1; /* ocupa o espaço disponível na horizontal para manter duas colunas equilibradas */
  justify-content: flex-start; /* empilha itens a partir do topo no desktop */
  
  @media (max-width: ${bp.md}) {
    order: 3; /* No mobile, este bloco será o terceiro */
    gap: 30px;
    width: 100%;
  }
`;

export const HeroLogoImage = styled.img`
  width: clamp(270px, 50vw, 800px);

  @media (max-width: ${bp.md}) {
    display: none; /* ESCONDEMOS este logo no mobile */
  }
`;

// NOVO: Um logo separado apenas para o mobile
export const MobileLogoImage = styled.img`
  display: none; /* Escondido no desktop por padrão */

  @media (max-width: ${bp.md}) {
    display: block; /* Visível apenas no mobile */
    order: 1; /* O primeiro item de todos */
    width: clamp(200px, 60vw, 280px);
  }
`;

export const ImageContent = styled.div`
  @media (max-width: ${bp.md}) {
    order: 2; /* Imagem será o segundo item */
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ModelImage = styled.img`
  max-width: 480px;
  
  @media (max-width: ${bp.md}) {
    width: clamp(260px, 85vw, 400px);
  }
`;

export const TagGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 8px; /* aproxima as tags do logo no desktop */
  transform: translateY(-150px); /* sobe mais as tags no desktop */

  @media (max-width: ${bp.md}) {
    /* No mobile, este grupo de tags será o terceiro item */
    order: 3;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;
    transform: none; /* reset para mobile */
  }
`;

export const InfoTag = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: transparent;
  padding: 15px 20px;
  border-radius: 20px;
  border: 1.5px solid #BE95AE;
  min-width: 200px;
  
  svg {
    color: #BE95AE;
    font-size: 2rem;
    flex-shrink: 0;
  }

  @media (max-width: ${bp.md}) {
    width: 100%;
    max-width: 350px;
    min-width: auto;
  }
`;

export const TagTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TagTitle = styled.span`
  font-weight: 700;
  font-size: 1rem;
`;
export const TagSubtitle = styled.span`
  font-size: 0.85rem;
  color: #666;
`;
