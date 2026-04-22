---
description: Adiciona endpoint com contrato, validação e teste
---

Objetivo: criar ou evoluir endpoint no backend com segurança de contrato e teste mínimo.

Checklist:

1. Ler `TASK.md` e identificar endpoint alvo.
2. Definir input/output em `*.contracts.ts`.
3. Implementar regra de negócio em `*.service.ts`.
4. Implementar rota em `*.routes.ts` sem lógica de negócio.
5. Cobrir:
   - caso feliz;
   - caso de validação inválida.
6. Executar:
   - `npm run test:api`
   - `npm run lint`
   - `npm run typecheck`
7. Atualizar `HANDOFF.md` com endpoint, payloads e status codes.
