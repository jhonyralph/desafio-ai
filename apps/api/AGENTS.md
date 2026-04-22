# AGENTS.md

Diretrizes locais para agentes no app API:

1. Não criar endpoint de negócio sem `TASK.md`.
2. Separar contratos, serviço e rotas por módulo.
3. Evitar regra de negócio nos handlers HTTP.
4. Sempre incluir teste mínimo para endpoint novo.
5. Executar `npm run test:api`, `npm run lint` e `npm run typecheck`.
