# CLAUDE.md

Playbook de desenvolvimento com IA para este repositório.

## Objetivo

Implementar módulos de negócio do zero, com alta previsibilidade, documentação mínima necessária e validação completa.

## Fluxo obrigatório (Claude Code)

1. Ler `TASK.md` (ou criar a partir de `docs/templates/TASK.template.md`).
2. Definir plano técnico curto em até 6 bullets.
3. Implementar em slices pequenos.
4. Executar validações obrigatórias.
5. Atualizar `ACCEPTANCE.md` e `HANDOFF.md`.

## Estrutura de contexto (Context Engineering)

Usar os arquivos na seguinte prioridade:

1. `CLAUDE.md` (regras globais)
2. `apps/api/AGENTS.md` e `apps/web/AGENTS.md` (regras por app)
3. `TASK.md` (escopo da tarefa atual)
4. `TEST-PLAN.md` (estratégia de validação da tarefa)
5. `DECISIONS.md` (decisões arquiteturais relevantes)

Nunca iniciar implementação sem um `TASK.md` explícito.

## Arquitetura e limites

### API (`apps/api`)

- Endpoint base fixo: `GET /health`.
- Módulos novos em `src/modules/<nome-do-modulo>/`.
- Separação obrigatória:
  - `*.contracts.ts`
  - `*.service.ts`
  - `*.routes.ts`
- Regras de negócio ficam no `service`, não no `routes`.

### Web (`apps/web`)

- Tela inicial permanece neutra enquanto não houver módulo definido.
- Estrutura por módulo: `src/modules/<nome-do-modulo>/`.
- Chamada HTTP em arquivo dedicado (`api.ts`), UI sem acoplamento direto a `fetch`.

## Skills operacionais (Claude Skills)

Comandos locais disponíveis:

- `.claude/commands/create-module.md`
- `.claude/commands/add-endpoint.md`
- `.claude/commands/review-readiness.md`

Sempre usar esses comandos como base para tarefas recorrentes.

## Qualidade e Definition of Done

Validações obrigatórias:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

DoD mínimo:

- requisito implementado;
- testes mínimos cobrindo fluxo principal;
- sem erro de lint/typecheck;
- `ACCEPTANCE.md` preenchido;
- `HANDOFF.md` atualizado com resumo e riscos.
