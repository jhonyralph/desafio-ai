# Dnautto Challenge Shell

Base fullstack para desafio técnico de 1 dia, sem módulo inicial pré-configurado.

## Estrutura

```text
apps/web     # Next.js (UI)
apps/api     # Express (API)
packages/    # reservado para tipos e libs compartilhadas
```

## Rodar localmente

```bash
npm install
npm run dev
```

- Web: `http://localhost:3000`
- API: `http://localhost:3001`

## Comandos

```bash
npm run dev
npm run dev:web
npm run dev:api
npm run lint
npm run typecheck
npm run check
npm run build
npm run test:api
```

## Status atual

- Carcaça pronta (arquitetura, scripts e endpoint de health).
- Sem módulo de negócio inicial.
- Teste mínimo disponível para `health check` da API.
