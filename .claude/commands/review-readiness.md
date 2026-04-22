---
description: Verifica se a entrega está pronta para review/screen
---

Rodar checklist final de prontidão.

## Passos

1. Revisar `TASK.md` e confirmar cobertura de escopo.
2. Executar:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `npm run build`
3. Preencher `ACCEPTANCE.md` com evidências.
4. Atualizar `HANDOFF.md` com:
   - resumo da implementação;
   - decisões tomadas;
   - riscos residuais;
   - próximos passos.

## Saída esperada

- Estado final: `PRONTO` ou `NÃO PRONTO`
- Lista de bloqueios (se houver)
- Recomendação objetiva do próximo passo
