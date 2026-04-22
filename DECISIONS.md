# DECISIONS.md

## ADR-001 - Módulo inicial de veículos

- **Data:** 2026-04-22
- **Status:** aceita
- **Contexto:** Precisamos de um caso real e simples para início do projeto.
- **Decisão:** Implementar módulo `vehicles` com API CRUD.
- **Impacto:** Entrega funcional rápida com escopo bem delimitado.

---

## ADR-002 - Persistência em memória na fase inicial

- **Data:** 2026-04-22
- **Status:** aceita
- **Contexto:** A fase atual prioriza velocidade de implementação e validação funcional.
- **Decisão:** Manter dados em memória sem banco de dados.
- **Impacto:** Simplicidade alta e sem setup de infraestrutura; dados voláteis ao reiniciar.

---

## ADR-003 - Contrato de erro explícito

- **Data:** 2026-04-22
- **Status:** aceita
- **Contexto:** Necessidade de comportamento previsível para API e UI.
- **Decisão:** Padronizar erros principais como `400`, `404` e `409`.
- **Impacto:** Facilidade de integração e testes; reduz ambiguidades no frontend.
