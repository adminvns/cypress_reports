/// <reference types="cypress" />


describe('API_Test', () => {

    it('get user', () => {
        

        cy.request({

            method:'GET',
            url: 'https://adminvns-testapi.herokuapp.com/products',
            header:{
                'Content-Type':'application/json',
            }

        }).then((response)=>{

                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq('Products(get method)')
        })
    });
    
})