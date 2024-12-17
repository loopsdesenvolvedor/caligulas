# Calígulas - Plataforma de Consumo de Vídeos Adultos

**Calígulas** é uma plataforma de consumo de vídeos adultos, oferecendo uma experiência interativa e intuitiva para os usuários. Este repositório é dedicado ao desenvolvimento do site e à demonstração do código para fins educacionais e de portfólio.

**Atenção**: O site contém conteúdo adulto (+18) e é destinado a maiores de 18 anos.

**Aviso**: As imagens usadas neste projeto são apenas para fins didáticos e não representam ou estão associadas a qualquer marca ou serviço real.

---

## Aviso de Conteúdo Adulto

Este site contém material adulto e é destinado exclusivamente para maiores de 18 anos. Ao acessar, você concorda que está ciente disso e possui a idade mínima exigida por sua localidade para consumir este tipo de conteúdo.

---

## Figma

O design e protótipos da plataforma estão disponíveis no Figma. Confira o link abaixo para ver como o projeto foi desenvolvido visualmente:

[Figma - Calígulas](https://www.figma.com/design/6pijIBjw9o4TpmQ72R0KTc/Caligulas?node-id=490-2&p=f&t=XJX3UT8rxOZ48Lgp-0)

---

## Funcionalidades

- **Visualização de Vídeos Adultos**: Plataforma para exibição de vídeos em diversos formatos.
- **Interface Responsiva**: O site foi desenvolvido para ser acessível em dispositivos móveis e desktop.
- **Filtragem e Pesquisa**: Permite aos usuários buscar vídeos por categorias, tags e mais.
- **Controle de Privacidade**: O site oferece opções de privacidade e controle de dados.
- **Login e Autenticação**: Usando **NextAuth** para autenticação e gerenciamento de sessões.
- **Upload de Arquivos**: O site permite o upload de vídeos usando **Multer**, com um sistema de gerenciamento eficiente.
- **Armazenamento de Dados**: Utiliza o **Prisma ORM** para interagir com o banco de dados **MySQL**.
- **Gerenciamento de Estado**: **Redux** é usado para o gerenciamento de estado global.
- **Estilização com Styled-Components**: Interface estilizada de forma modular usando **Styled-Components**.

---

## Como Contribuir

Este repositório está disponível para fins educacionais e demonstrativos. Se você deseja contribuir ou aprimorar o projeto, fique à vontade para abrir uma **pull request**.

1. Faça um **fork** deste repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-sua-feature`).
3. Faça as alterações desejadas.
4. Commit suas alterações (`git commit -am 'Adicionando uma nova feature'`).
5. Envie para a branch do repositório remoto (`git push origin feature/nome-da-sua-feature`).
6. Abra um **pull request**.

---

## Tecnologias Usadas

- **Frontend**: React, Next.js, Styled-components
- **Backend**: Next.js (API routes), Prisma ORM, MySQL
- **Autenticação**: NextAuth.js
- **Gerenciamento de Estado**: Redux
- **Upload de Arquivos**: Multer
- **Banco de Dados**: MySQL com Prisma ORM
- **Estilização**: Styled-components

---

## Como Rodar o Projeto Localmente

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clonar o repositório

```bash
git clone https://github.com/loopsdesenvolvedor/caligulas.git
cd caligulas
```

### Instalar as dependências

```bash
yarn install
ou npm install
```

### Rodar o servidor de desenvolvimento

```bash
yarn dev
```
