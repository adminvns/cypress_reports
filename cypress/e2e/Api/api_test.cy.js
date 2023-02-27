/// <reference types="cypress" />


describe('API_Test', () => {

    it('get user', () => {
        

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
    
})
