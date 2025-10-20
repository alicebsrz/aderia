# 💄 Aderia – Full-Stack Beauty E-commerce

**Aderia** é uma aplicação de **e-commerce full-stack** moderna e completa, desenvolvida como um projeto de portfólio para demonstrar habilidades em **desenvolvimento web full-stack**, **UI/UX**, e **boas práticas de arquitetura**.  
O site simula uma loja de beleza fictícia, oferecendo uma **experiência completa de compra**, desde a navegação pelos produtos até o checkout seguro.

🌐 **Deploy:** [https://aderia.vercel.app/](https://aderia.vercel.app/)  
💻 **Repositório:** [https://github.com/alicebsrz/aderia](https://github.com/alicebsrz/aderia)

---

## 🛍️ Sobre o Projeto

O **Aderia** foi construído do zero, desde o design no **Figma** até o deploy em produção.  
O objetivo foi criar uma aplicação moderna, segura e responsiva, com separação clara entre **frontend e backend**, integrados via **API RESTful**.

A aplicação apresenta as principais funcionalidades de um e-commerce real, incluindo autenticação segura, catálogo dinâmico, sistema de busca e filtragem, páginas de produto interativas e um carrinho persistente vinculado à conta do usuário.

---

## ✨ Principais Funcionalidades

- 🔐 **Autenticação Completa** – Registro e login com criptografia de senha (bcrypt) e autenticação JWT.  
- 🛒 **Carrinho Persistente** – Itens salvos por usuário autenticado, com atualização e remoção em tempo real.  
- 🔎 **Busca e Filtro Avançados** – Filtros dinâmicos por categoria e barra de pesquisa conectada ao backend.  
- 🖼️ **Páginas Dinâmicas de Produto** – Galeria de imagens e seleção de variações (como cor e acabamento).  
- 📱 **Design Responsivo** – Layout mobile-first, adaptado para diferentes tamanhos de tela.  
- ⚙️ **Integração Full-Stack** – Comunicação cliente-servidor via API RESTful com políticas de CORS configuradas.  

---

## 🧩 Tecnologias Utilizadas

### 🖥️ **Front-End**
- **React** – Interface com arquitetura baseada em componentes.  
- **React Hooks** – useState, useEffect, useContext, useMemo.  
- **Context API** – Gerenciamento global de autenticação e carrinho.  
- **React Router** – Navegação fluida entre páginas (Home, Catálogo, Produto, Login, Carrinho).  
- **Styled-Components** – Estilos dinâmicos e escopados por componente.  
- **Axios** – Requisições HTTP para a API.  
- **Swiper.js** – Carrosséis e sliders interativos.  
- **Vite** – Build tool moderna e rápida.  

### ⚙️ **Back-End**
- **Node.js** – Ambiente de execução JavaScript no servidor.  
- **Express.js** – Framework para criação de APIs RESTful.  
- **MongoDB + Mongoose** – Banco de dados NoSQL com modelagem estruturada.  
- **JWT (JSON Web Token)** – Autenticação segura baseada em tokens.  
- **Bcrypt.js** – Criptografia de senhas.  
- **Middleware Personalizado** – Proteção de rotas e validação de autenticação.  

### 🚀 **Deploy & Ferramentas**
- **Vercel** – Hospedagem do front-end.  
- **Render** – Hospedagem do servidor back-end.  
- **Figma** – Design inicial da interface e identidade visual.  
- **Git & GitHub** – Controle de versão.  
- **.env** – Variáveis de ambiente para dados sensíveis.  


---

## 🧠 Aprendizados

Durante o desenvolvimento do Aderia, foram reforçados conhecimentos sobre:
- Autenticação segura e criptografia de dados.  
- Comunicação entre cliente e servidor via API REST.  
- Gerenciamento de estado global no React (Context API).  
- Boas práticas de organização de código e componentização.  
- Responsividade e UI/UX voltada à experiência do usuário.  
- Deploy e configuração de ambiente full-stack em produção.  

---

## 🚀 Como Executar Localmente

### 🔹 Clonar o repositório
```bash
git clone https://github.com/alicebsrz/aderia.git
cd aderia


