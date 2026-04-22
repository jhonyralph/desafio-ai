# TASK.md

## Status

`DONE`

## Problema

Precisamos de um sistema simples para gerenciar veículos pessoais ou de uma pequena frota interna.
Atualmente não existe um catálogo único para cadastro e manutenção desses veículos.

## Objetivo

Implementar um módulo de `vehicles` com CRUD completo em memória, cobrindo backend e frontend.

## Módulo alvo

`vehicles`

## Escopo

- [x] Criar veículo (API)
- [x] Listar veículos (API)
- [x] Atualizar veículo (API)
- [x] Deletar veículo (API)
- [x] Criar veículo (Web)
- [x] Listar veículos (Web)
- [x] Atualizar veículo (Web)
- [x] Deletar veículo (Web)

## Fora de escopo

- Persistência em banco de dados
- Autenticação/autorização
- Integrações externas
- Paginação e ordenação avançada

## Contratos esperados

- Entidade `Vehicle`:
  - `id` (string)
  - `plate` (string)
  - `brand` (string)
  - `model` (string)
  - `year` (number)
  - `color` (string)
  - `active` (boolean)
  - `updatedAt` (string ISO)
- Entradas:
  - `POST /v1/vehicles`: `{ plate, brand, model, year, color, active }`
  - `PATCH /v1/vehicles/:id`: campos parciais do veículo
- Saídas:
  - lista em `GET /v1/vehicles`
  - item criado/atualizado em `POST/PATCH`
- Erros esperados:
  - `400` para payload inválido
  - `404` para id inexistente
  - `409` para placa duplicada

## Critérios de aceite

- [x] CRUD completo implementado em `apps/api`
- [x] Dados mantidos em memória durante execução da API
- [x] Contrato de erro (`400/404/409`) respeitado
- [x] Criar e listar veículos implementados em `apps/web`
- [x] Atualizar e deletar veículos implementados em `apps/web`
- [x] Teste mínimo de API cobrindo criação e erro de validação
- [x] Teste mínimo de Web cobrindo renderização inicial da tela de veículos

## Dependências e restrições

- Seguir regras do `CLAUDE.md`
- Manter implementação simples e legível

## Entregáveis

- Estrutura do módulo `vehicles` em `apps/api/src/modules/vehicles`
- Rota(s) registradas no `app.ts`
- Tela base em `apps/web/src/modules/vehicles`
- Testes atualizados (`api` e `web`)
- `ACCEPTANCE.md` e `HANDOFF.md` preenchidos após implementação
