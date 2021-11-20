class Requests {
    // verboRecurso
    getPing(){
       return  cy.request({
            method: 'GET',
            url: 'PING'
        })
    }
    
    getBooking(){
        return cy.request({
            method: 'GET',
            url: 'booking/1'
        })
    }

    postBooking(){
        return cy.request({
            method: 'POST',
            url: 'booking',
            body:{                
                "firstname" : "Jon",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2020-01-01",
                    "checkout" : "2020-01-05"
                },
                "additionalneeds" : "Breakfast"                
            }
        })
    }

    updateBookingWithoutToken(response){
        const id = response.body.bookingid

        return cy.request({
        method: 'put',
        url: `booking/${id}`,
        body: {
            "firstname": "Jim",
            "lastname": "James",
            "totalprice": 111,
            "depositpaid": false,
            "bookingdates": {
                "checkin": "2020-01-01",
                "checkout": "2020-01-02"
            },
            "additionalneeds": "Lunch"
        },
        failOnStatusCode: false
        })
    }

    updateBooking(response){
        const id = response.body.bookingid

        return cy.request({
        method: 'put',
        url: `booking/${id}`,
        headers: {
            Cookie: `token=${Cypress.env('token')}`
        },
        body: {
            "firstname": "Jim",
            "lastname": "James",
            "totalprice": 111,
            "depositpaid": false,
            "bookingdates": {
                "checkin": "2020-01-01",
                "checkout": "2020-01-02"
            },
            "additionalneeds": "Lunch"
        },
        failOnStatusCode: false
        })
    }

    postAuth(){
        return cy.request({
            method: 'POST',
            url: 'auth',
            body:{
                "username" : "admin",
                "password" : "password123"
            }
        })
    }

    doAuth(){
        this.postAuth().then(authResponse => {
            const token = authResponse.body.token;

            Cypress.env('token', token);
        })
    }

    deleteBooking(response){

        const id = response.body.bookingid
        
        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            headers: {
                Cookie: `token=${Cypress.env('token')}`
            },
            failOnStatusCode: false
        })

    }

    updateBookingInvalidReserve(response){
        const id = response.body.bookingid

        return cy.request({
        method: 'put',
        url: 'booking/100',
        headers: {
            Cookie: `token=${Cypress.env('token')}`
        },
        body: {
            "firstname": "Teste",
            "lastname": "Agilizei",
            "totalprice": 111,
            "depositpaid": false,
            "bookingdates": {
                "checkin": "2020-01-01",
                "checkout": "2021-01-02"
            },
            "additionalneeds": "Lunch"
        },
        failOnStatusCode: false
        })
    }

    DeleteBookingInvalidReserve(response){
        const id = response.body.bookingid

        return cy.request({
        method: 'DELETE',
        url: 'booking/100',
        headers: {
            Cookie: `token=${Cypress.env('token')}`
        },
        failOnStatusCode: false
        })
    }

    updateReserveBookingTokenInvalid(response){
        const id = response.body.bookingid

        return cy.request({
        method: 'put',
        url: `booking/${id}`,
        headers: {
            Cookie: 'TOKENINVALIDO'
        },
        body: {
            "firstname": "Jim",
            "lastname": "James",
            "totalprice": 111,
            "depositpaid": false,
            "bookingdates": {
                "checkin": "2020-01-01",
                "checkout": "2020-01-02"
            },
            "additionalneeds": "Lunch"
        },
        failOnStatusCode: false
        })
    }

    deleteBookingWithoutToken(response){

        const id = response.body.bookingid
        
        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            failOnStatusCode: false
        })

    }

    deleteBookingTokenInvalid(response){

        const id = response.body.bookingid
        
        return cy.request({
            method: 'DELETE',
            url: `booking/${id}`,
            headers: {
                Cookie: 'TOKENINVALIDO'
            },
            failOnStatusCode: false
        })

    }

}

export default new Requests();




