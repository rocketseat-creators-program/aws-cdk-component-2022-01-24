# Modularizando um projeto com o AWS CDK, através de componentes reutilizáveis e testáveis

<img
    src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg"
/>

Olá, nesse projeto nós vamos realizar a implementação de um componente para o AWS CDK, o qual será totalmente modular e testável. Para gerar o code base inicial vamos utilizar o [projen](https://github.com/projen/projen) como bootstrap de nosso projeto, o que nós dá maior agilidade e também alguns dos padões já adotados pela comunidade e providers oficiais, para conhecher mais componentes construidos pela comunidade podemos consultar o [ConstructHub](https://constructs.dev). Apresentado por [Bruno Russi Lautenschlager][1].

## Instalação

### Pre-requisitos

- [AWS CLI](https://aws.amazon.com/pt/cli/);
- [Node.js](https://nodejs.org/en/);
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ou [Yarn](https://yarnpkg.com/getting-started/install);
- [TypeScript](https://www.typescriptlang.org/download);
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_install);

### Libs do AWS CDK

Essas são as libs instaldas no projeto para adicionar mais serviços a nossa stack, na documentação abaixo além de encontrar todos os erviços suportados temos a lista de parametros suportados.

- [API Reference](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)

## Comandos utilizados

 Criação do projeto

- `npx projen new awscdk-construct`

Além disso temos todos os comandos diponiveis no arquivo [package.json](./package.json) na sessão de scripts, os quais também são configurados pelo projen na inicialização do projeto.

## Testes unitários

Esse será o resultado obtido ao final da construção dos testes unitários:

```text
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        12.429 s
Ran all test suites.
```

## Expert

| [<img src="https://github.com/brunoxd13.png" width="75px">][1] |
| :-: |
|[Bruno Russi Lautenschlager][1]|

[1]: https://linktr.ee/bruno_russi
