# Projeto Caligula's

Plataforma full-stack organizada em monorepo usando Turborepo.
O projeto combina Next.js no frontend e microserviços Express no backend, com banco de dados gerenciado via Prisma.
Inclui também um chat com IA e suporte para recursos de vídeo.

## Tecnologias principais

```
- Turborepo - organização do monorepo
- Next.js frontend da aplicação
- Express.js - microserviços backend
- Typescript
- Prisma ORM
- MySQL
- TSX
- Multers (uploads)
```

´´´bash

/app
/next-app # Frontend em Next.js

/services
/auth-service # Autenticação (futuro)
/user-service # Usuários (futuro)
/video-service # Vídeos (futuro)
/chat-service # Chat com IA (futuro)

/prisma
schema.prisma # Configuração do banco (sem tabelas ainda)

/node_modules
turbo.json
package.json

´´´

## Como rodar o projeto

- npm install
- npm run dev

### Status do projeto

Em anadamento...
