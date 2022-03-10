# Senior frontend challenge

O objetivo deste teste é reproduzir de maneira mais simples o nosso workflow de simulação.

# Nossa stack FrontEnd
Por aqui utilizamos, em resumo, as seguintes tecnologias:
- React
- React Native
- Redux
- Immutable
- RxJs


# Desafio
## Criar um PWA da nossa jornada de simulação

Imagine que você é responsável por iniciar o desenvolvimento do nosso PWA e Mobile app. Imagine também que o projeto é escalável, e terá vários outros workflows e telas no futuro. Para isso, alguns requisitos devem ser atendidos.

- [ ] A aplicação contém código comum entre o PWA (React) e o Mobile app (React Native), desse modo, tudo o que for comum aos dois projetos deve ser compartilhado (reusável) - Depende de você identificar o que e como será compartilhado.
- [ ] A aplicação deve conter um Header (AppBar) que se adeque as mudanças de rotas, podendo alterar título, exibir ou não exibir, ter actions (icon buttons ou text actions), etc. Em resumo, deve ser configurável.
- [ ] Code-splitting deve ser aplicado para redução do bundle inicial.
- [ ] Apesar dos endpoints serem mockados, é necessário enviar o valor e período escolhido para as próximas tela.
- [ ] SOLID principles
- [ ] Deve ter gerenciamento de estado
- [ ] Deve ter um linter configurado
- [ ] Fique a vontade para usar Classes, Hooks, etc.
- [ ] Plus: desenvolver também a aplicação em React Native **(não use EXPO)** - Não precisa ser necessariamente completa, mas é plus porque analisaremos o reuso do código em comum.
- [ ] Plus: testes

Para criar as telas vocês deve seguir o layout proposto aqui: https://xd.adobe.com/view/1f691c23-6efa-4989-b405-9bbcfd1e62ab-4a3a/
Para preencher os dados da tela você deve utilizar os seguintes endpoints (mockados):
- Home (1): https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test
- Values (2): https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/values
- Periods (3): https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/installments
- Simulation (4): https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/simulation

As imagens a serem utilizadas, estão nesse repositório.

Ao fazer a requisição para os endpoints, você verá que o resultado é auto explicativo, mas caso tenha alguma dúvida, pode entrar em contato.

## Como enviar
Só nos mandar um link do github do seu teste.

Lembre de fornecer instruções claras de como rodar seu projeto, desde instalação de dependências, até o build.

# Critério de avaliação

Basicamente, só queremos ver se você consegue escrever um código limpo, reutilizável e se tem conhecimento da tecnologia adotada (criatividade e proatividade são um plus).

Caso você passe no teste prático, faremos uma entrevista após o teste para conversar sobre como foi feito.

Bom trabalho!

