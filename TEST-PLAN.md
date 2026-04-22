# TEST-PLAN.md

## Status

`DONE`

## Estratégia

Validar o CRUD de veículos com foco em fluxo principal, validação de payload e comportamento para recurso inexistente.

## Casos de teste - API

- [ ] Criar veículo com sucesso (`201`)
- [ ] Listar veículos com sucesso (`200`)
- [ ] Atualizar veículo existente (`200`)
- [ ] Deletar veículo existente (`204`)
- [ ] Retornar `400` para payload inválido
- [ ] Retornar `404` para id inexistente
- [ ] Retornar `409` para placa já cadastrada

## Casos de teste - Web

- [x] Renderização da tela base de veículos
- [x] Exibição da lista retornada pela API
- [x] Exibição de estado vazio quando não houver veículos
- [x] Atualização de veículo pela interface
- [x] Exclusão de veículo pela interface

## Cobertura automatizada executada

- `apps/api/src/vehicles.test.ts`: criação/listagem e validação de payload inválido
- `apps/web/src/app/page.test.tsx`: renderização da página do módulo
- `apps/web/src/modules/vehicles/components/vehicles-page.test.tsx`: interações de atualização e exclusão

## Testes manuais

1. Subir aplicação (`npm run dev`)
2. Criar dois veículos pela interface web
3. Atualizar um dos veículos pela interface
4. Deletar um veículo pela interface
5. Validar respostas e códigos HTTP esperados

## Comandos

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```
