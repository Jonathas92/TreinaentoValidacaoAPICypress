/// <reference types="cypress" />
// @ ts-check

import spok from 'cy-spok'
import req from '../support/api/requests'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'

context('Booking', () => {
    before(() => {
        req.doAuth()
    });

    it('Validar o contrato do GET Booking @contract', () => {

        req.getBooking().then(getBookingResponse => {
            assertions.validateContractOf(getBookingResponse, schemas.getBookingSchema())
        })
    });

    it('Criar uma reserva com sucesso @functional', () => {
       req.postBooking().then(postBookinResponse => {
        assertions.shouldHaveStatus(postBookinResponse,200)
        assertions.shouldBookingIdBePresent(postBookinResponse)
        assertions.shouldHaveDefaultHeaders(postBookinResponse)
        assertions.shouldHaveContentTypeAppJson(postBookinResponse)
        assertions.shouldDurationBeFast(postBookinResponse)
        })
    });

    it('Tentar alterar uma reserva sem token @functional', () => {
        req.postBooking().then(postBookinResponse => {
            req.updateBookingWithoutToken(postBookinResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
            })
        })
    });

    it('Tentar alterar uma reserva com token inválido @functional', () => {
        req.postBooking().then(postBookinResponse => {
            req.updateReserveBookingTokenInvalid(postBookinResponse).then(updateBookingResponse => {
                assertions.shouldHaveStatus(updateBookingResponse, 403)
            })
        })
    });

    it('Alterar uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookinResponse => {
            req.updateBooking(postBookinResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 200)
            })
        })
    });

    it('Alterar uma reserva inexistente @functional', () => {
        req.postBooking().then(postBookinResponse => {
            req.updateBookingInvalidReserve(postBookinResponse).then(updateBookingingResponse => {
                assertions.shouldHaveStatus(updateBookingingResponse, 405)
            })
        })
    });

    it('Excluir uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookinResponse => {
            req.deleteBooking(postBookinResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 201)
            })
        })
    });

    it('Excluir uma reserva inexistente @functional', () => {
        req.postBooking().then(postBookinResponse => {
            req.DeleteBookingInvalidReserve(postBookinResponse).then(deleteBookingingResponse => {
                assertions.shouldHaveStatus(deleteBookingingResponse, 405)
            })
        })
    });

    it('Excluir uma reserva sem token @functional', () => {
        req.postBooking().then(postBookinResponse => {
            req.deleteBookingWithoutToken(postBookinResponse).then(deleteBookingingWithoutTokenResponse => {
                assertions.shouldHaveStatus(deleteBookingingWithoutTokenResponse, 403)
            })
        })
    });

    it('Excluir uma reserva com token invalido @functional', () => {
        req.postBooking().then(postBookinResponse => {
            req.deleteBookingTokenInvalid(postBookinResponse).then(deleteBookingTokenInvalidResponse => {
                assertions.shouldHaveStatus(deleteBookingTokenInvalidResponse, 403)
            })
        })
    });


});