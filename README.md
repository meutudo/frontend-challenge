# Senior frontend challenge

Projeto Monorepo para desafio frontend da Meu tudo.

## Monorepo

Essa abordagem foi adotada para a reutilização do código e das dependencias entre as apps (pwa e app mobile).
Nesse caso, o app mobile faria uso dos módulos como o pwa faz, por exemplo: services, utils, etc.

## Próximos passos

Próximos possíveis passos seriam:

- Finalizar o fluxo de novo empréstimo. Utilizando context API para gerenciar o estado do fluxo.
- Construir o app mobile reaproveitando os módulos dispostos no monorepo.
- Fazer melhorias em alguns componentes para que atendessem mais possibilidades. (Ex.: AppBar).
- Escrever testes unitários.

## Como rodar o projeto

Na pasta raiz, instale as dependencias do projeto:

```bash
yarn install
```

Para subir o servidor de desenvolvimento da pwa, execute o comando:

```bash
yarn start:pwa
```
