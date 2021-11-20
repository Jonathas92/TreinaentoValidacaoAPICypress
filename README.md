# TreinaentoValidacaoAPICypress

Setup

Pré-requisitos:
Instalar o NodeJS
Instalar um editor de texto, como o Visual Studio Code
Instalar o Git (caso queira trabalhar com projeto em sua máquina)

Dependencias necessárias para execução do projeto na máquina local.

1 - Inicar o projeto npm
nmp init --yes

2 - Criar a pasta e realizar a instalação do cypress utilizando o comando npm install -D cypress@8.5.0.

3 - Executar o cypress para abrir a estrutura padrão.
npx cypress open

4 - Instalar o Mocha
npm install mocha --save-dev

Instalar os plugins cy-spo, Cypress select test e Mochawesome
Documentação
cy-spok - https://github.com/bahmutov/cy-spok
Cypress select test - https://github.com/bahmutov/cypress-select-tests
Mochawesome - npm install -D cypress-multi-reporters mochawesome mochawesome-merge mochawesome-report-generator

Execução

Instalar as dependências configuradas do package.json, usando o comando: npm install
Abrir o Cypress e selecionar a spec que você quer executar
Executar uma spec específica no modo headless com o comando: npx cypress run

Sinopse: Projeto de treinamento para validação de API usando o site https://treinamento-api.herokuapp.com/
