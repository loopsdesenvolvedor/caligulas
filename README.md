# Caligula's

**Caligula's** é uma plataforma de conteúdo adulto que oferece vídeos tradicionais, curtas (shorts) e transmissões ao vivo (lives). Em breve, permitirá que usuários criem contas, publiquem seus próprios conteúdos e interajam com criadores por meio de mensagens privadas e conteúdo exclusivo.

## 🧠 Visão Geral

- Plataforma moderna e responsiva com foco em performance e escalabilidade.
- Suporte a vídeos longos e curtos.
- Funcionalidade de lives (ao vivo).
- Sistema de autenticação e perfis personalizados.
- Monetização com cobrança por vídeo e mensagens premium.
- Espaço colaborativo para criadores de conteúdo.

## 🚀 Tecnologias Utilizadas

| Tecnologia                                    | Uso                                  |
| --------------------------------------------- | ------------------------------------ |
| [Next.js](https://nextjs.org/)                | Frontend e Backend (Fullstack React) |
| [NextAuth.js](https://next-auth.js.org/)      | Autenticação de usuários             |
| [Tailwind CSS](https://tailwindcss.com/)      | Estilização moderna e responsiva     |
| [Redux](https://redux.js.org/)                | Gerenciamento de estado              |
| [Multer](https://github.com/expressjs/multer) | Upload de arquivos (vídeos, imagens) |
| API de Pagamentos (Stripe/Pix/etc)            | Monetização e transações seguras     |

Outras tecnologias e bibliotecas poderão ser integradas conforme a necessidade do projeto.

## 📦 Funcionalidades Planejadas

- [x] Upload e exibição de vídeos (longos e curtos)
- [x] Sistema de autenticação e login
- [ ] Área de criadores para envio de conteúdo
- [ ] Transmissões ao vivo (live streaming)
- [ ] Sistema de mensagens privadas com cobrança
- [ ] Página de perfil com métricas e dados de interação
- [ ] Sistema completo de pagamentos (por vídeo e por mensagem)
- [ ] Moderação de conteúdo e termos de uso

## 🛠️ Como Rodar o Projeto

> Requisitos: Node.js, npm/yarn, banco de dados (ex: PostgreSQL ou MongoDB), e chaves de API (NextAuth, Stripe, etc).

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/caligulas.git
```

npm install

# ou

yarn install

npm run dev

## 📁 Estrutura do Projeto

```
/src
├── app/ - Sistema de rotas com App Router (layouts, pages, loading, etc.)
├── components/ - Componentes reutilizáveis da interface
├── styles/ - Estilos globais e utilitários com Tailwind CSS
├── lib/ - Funções auxiliares e integrações com APIs externas
├── store/ - Configuração do Redux e slices
├── utils/ - Funções utilitárias gerais
├── middleware.ts - Middlewares globais (auth, logs, etc)
├── hooks/ - Custom React hooks
├── types/ - Tipagens TypeScript compartilhadas
/public - Arquivos públicos (imagens, vídeos, favicon, etc.)
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir Issues e Pull Requests. Por favor, siga o padrão de código e as boas práticas do projeto.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.
