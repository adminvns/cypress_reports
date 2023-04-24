/// <reference types="cypress" />


describe('API_Test', () => {

    it('Get Product Site 1', () => {
        

        cy.request({

            method:'GET',
            url: 'https://testapi-4r9g.onrender.com/products',
            header:{
                'Content-Type':'application/json',
            }

        }).then((response)=>{

                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq('Products(GET method)')
        })
    });
    it('Get Order Site 2', () => {
        

        cy.request({

            method:'GET',
            url: 'https://democaclient.azurewebsites.net/orders',
            header:{
                'Content-Type':'application/json',
            }

        }).then((response)=>{

                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq('Order was fetched')
        })
    });
    
})

// import 'cypress-mochawesome-reporter'