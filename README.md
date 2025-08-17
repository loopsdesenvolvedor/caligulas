# Caligula's – Plataforma Adulto (18+)

**⚠️ Aviso:** Este é um site **somente para maiores de 18 anos**. Conteúdo adulto explícito.

[**Figma do projeto**](https://www.figma.com/design/6pijIBjw9o4TpmQ72R0KTc/Caligulas?node-id=490-2&p=f&t=yT3BL3cKMGGqkTr7-0)

---

## Descrição

Caligula’s é uma plataforma adulta que oferece **conteúdo exclusivo para maiores de 18 anos**. O site foi desenvolvido com foco em **experiência de usuário, segurança e performance**, combinando frontend moderno, backend robusto e integração com CMS.

O projeto inclui:  
- Área de cadastro e login seguro com **NextAuth**.  
- Upload e gerenciamento de conteúdo adulto via **backend próprio** e **Strapi CMS**.  
- Banco de dados **PostgreSQL** para armazenamento de usuários e conteúdos.  
- Frontend em **Next.js** com design responsivo e interativo.  
- Estrutura pensada para **performance e escalabilidade**, incluindo SSR e otimizações de imagem.

---

## Tecnologias

- **Frontend:** Next.js, Tailwind CSS, React  
- **Backend:** Node.js com Express, Strapi CMS  
- **Autenticação:** NextAuth  
- **Banco de Dados:** PostgreSQL  
- **Design e Prototipagem:** Figma  
- **Outros:** Axios, Multer, JSON Web Token (JWT), CORS

---

## Funcionalidades

- Login e cadastro de usuários (somente maiores de 18 anos).  
- Upload e gerenciamento de vídeos e imagens adultos.  
- Perfil do usuário com histórico de conteúdos consumidos.  
- Busca e filtragem avançada de conteúdo.  
- Suporte a pagamento ou conteúdo premium (opcional).  
- Dashboard administrativo via Strapi CMS.

---

## Estrutura do Projeto

```text
/caligulas
├─ /frontend           # Next.js app
│  ├─ /pages
│  ├─ /components
│  └─ /styles
├─ /backend            # Node.js + Strapi
│  ├─ /controllers
│  ├─ /models
│  └─ /routes
├─ /database           # Scripts e config PostgreSQL
└─ README.md


### Continua ....
