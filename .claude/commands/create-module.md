---
description: Cria um módulo fullstack seguindo o padrão do repositório
---

Objetivo: criar um módulo novo do zero, com contratos, serviço, rotas, cliente web e UI básica.

Passos obrigatórios:

1. Ler `TASK.md`.
2. Criar estrutura:
   - `apps/api/src/modules/<nome>/`
   - `apps/web/src/modules/<nome>/`
3. API:
   - `<nome>.contracts.ts`
   - `<nome>.service.ts`
   - `<nome>.routes.ts`
4. Web:
   - `types.ts`
   - `api.ts`
   - `components/`
5. Adicionar testes mínimos (`api` e `web`).
6. Executar:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `npm run build`
7. Atualizar `ACCEPTANCE.md` e `HANDOFF.md`.
