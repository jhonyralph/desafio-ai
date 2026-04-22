# HANDOFF.md

## Status

`DONE`

## Escopo da entrega

- Implementar módulo `vehicles` em `apps/api`
- Expor API CRUD para veículos
- Adicionar CRUD completo do módulo em `apps/web`
- Garantir testes mínimos e validações de qualidade

## O que foi entregue

- Backend com módulo `vehicles` em:
  - `apps/api/src/modules/vehicles/vehicles.contracts.ts`
  - `apps/api/src/modules/vehicles/vehicles.service.ts`
  - `apps/api/src/modules/vehicles/vehicles.routes.ts`
- Rotas registradas em `apps/api/src/app.ts` (`/v1/vehicles`)
- Frontend com módulo `vehicles` em:
  - `apps/web/src/modules/vehicles/types.ts`
  - `apps/web/src/modules/vehicles/api.ts`
  - `apps/web/src/modules/vehicles/components/vehicles-page.tsx`
- Página inicial conectada ao módulo em `apps/web/src/app/page.tsx`
- Testes adicionados/atualizados:
  - `apps/api/src/vehicles.test.ts`
  - `apps/web/src/app/page.test.tsx`
  - `apps/web/src/modules/vehicles/components/vehicles-page.test.tsx`

## Decisões técnicas

- Armazenamento em memória para velocidade de entrega e simplicidade
- Separação por módulo no backend (`contracts`, `service`, `routes`)
- Contrato de erro explícito (`400`, `404`, `409`)

## Como validar localmente

```bash
npm install
npm run test
npm run build
```

## Limitações conhecidas

- Dados não persistem após reinício da API
- Sem autenticação/autorização

## Próximos passos

1. Adicionar filtro de busca por placa e marca
2. Adicionar feedback visual por linha durante operações
3. Evoluir persistência para banco quando necessário
