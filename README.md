# Express Server Template (TypeScript)

Template mínimo para APIs com Express + Prisma, pronto para desenvolvimento local em TypeScript.

## Tecnologias e Bibliotecas
- `express` — servidor HTTP
- `cors` — configuração de CORS
- `dotenv` — variáveis de ambiente via arquivo `.env`
- `@prisma/client` — client do Prisma (gerado a partir do schema)
- `prisma` (dev) — CLI do Prisma para migrações e geração do client
- `typescript` (dev) — linguagem/compilador TS
- `ts-node` (dev) — executar TS no modo desenvolvimento
- `nodemon` — recarregar em alterações
- `eslint`, `prettier` e plugins (dev) — lint e formatação

Observação: `bcrypt` não está incluído por padrão. Caso precise, veja a seção "Dependências opcionais".

## Estrutura básica
- Código-fonte: `src/`
- Prisma schema: `prisma/schema.prisma`
- Config do Prisma: `prisma.config.ts`
- Variáveis de ambiente: `.env` (exemplo em `.env.example`)

## Pré-requisitos
- Node.js 18+ e npm
- MySQL em execução (local ou remoto)

## Como usar via GitHub (primeira vez)
1. Crie um repositório a partir deste template
   - No GitHub: clique em "Use this template" > "Create a new repository", defina um nome (ex.: `my-api`) e crie no seu usuário/organização.
   - Ou via GitHub CLI: `gh repo create <SEU_REPO> --template <OWNER/REPO> --public`
   - Depois, clone o novo repositório e acesse a pasta:
     - `git clone https://github.com/<SEU_USUARIO>/<SEU_REPO>.git`
     - `cd <SEU_REPO>`
2. Instale as dependências
   - `npm install`
3. Configure as variáveis de ambiente
   - Copie o exemplo: `cp .env.example .env` (Windows PowerShell: `Copy-Item .env.example .env`)
   - Ajuste `DATABASE_URL` (MySQL) e `CORS_ORIGIN` conforme seu ambiente.
4. Garanta que o Prisma leia o `.env` no config (apenas se usar `env()` em `prisma.config.ts`)
   - Adicione no topo de `prisma.config.ts`: `import 'dotenv/config'`
   - Alternativa: remova o bloco `datasource` do `prisma.config.ts` e deixe o schema (`schema.prisma`) resolver a `DATABASE_URL` via `env("DATABASE_URL")`.
5. Prepare o banco e migrações Prisma
   - Crie o banco de dados (caso ainda não exista) ou ajuste a URL para um DB existente.
   - `npx prisma migrate dev --name init`
   - (Opcional) `npx prisma generate` (já roda em `migrate dev`)
6. Rode em desenvolvimento
   - `npm run dev`

## Scripts úteis
- `npm run dev` — inicia servidor em desenvolvimento (`ts-node` + `nodemon`)
- `npm run build` — compila TypeScript para `dist/`
- `npm start` — roda a build compilada (após `npm run build`)
- `npm run lint` — checa lint
- `npm run lint:fix` — corrige lint quando possível

## Variáveis de ambiente
- `PORT` — porta HTTP (ex.: `3000`)
- `CORS_ORIGIN` — origem permitida no CORS (ex.: `http://localhost:5173`)
- `DATABASE_URL` — conexão MySQL (ex.: `mysql://USER:PASSWORD@HOST:3306/DB_NAME`)

Dica: se sua senha tiver caracteres especiais, a URL pode precisar de escaping (ou use aspas no `.env`).

## Dependências opcionais
- `bcrypt` — hashing de senhas
  - Instalação: `npm i bcrypt`
  - Tipos (se necessário): `npm i -D @types/bcrypt`

## Troubleshooting
- Erro: `Missing required environment variable: DATABASE_URL`
  - Garanta que `.env` exista e contenha `DATABASE_URL`.
  - Se estiver usando `env("DATABASE_URL")` em `prisma.config.ts`, adicione `import 'dotenv/config'` no topo do arquivo para carregar o `.env` antes do Prisma ler a variável.
  - Alternativamente, remova o `datasource.url` do `prisma.config.ts` e deixe o schema (`schema.prisma`) resolver pelo `.env`.

- Conexão MySQL recusada
  - Verifique host/porta, credenciais, e se o banco existe.

## Licença
Uso livre deste template; ajuste conforme sua necessidade.

