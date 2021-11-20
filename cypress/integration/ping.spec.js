/// <reference types="cypress" />

import req from '../support/api/requests'
import assertions from '../support/api/assertions'

context('Ping', () => {
    it('Validar se a aplicação está ok @healthcheck', () => {
        //get https://treinamento-api.herokuapp.com/ping
        
        //request
        req.getPing().then(getPingResponse => {
            assertions.shouldHaveStatus(getPingResponse, 201)
        })
        
        //requests
        // asserções

        // cy.request -> response -> body, status, headers
        //its é usado para pegar qual é o retorno que quer utilizar no seu comando. Nesse exemplo pegamos o status para verificar se o retorno é 201.
    });
});