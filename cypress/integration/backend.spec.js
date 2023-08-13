const apiUrl = `${Cypress.env("apiUrl")}`

describe('Backend Test Spec', () => {

  it('should call ping', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/ping`,
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  });


  // describe(' Test for Transactions', () => {
  //   it('should create a new transaction', () => {
  //     const transactionRequest = {
  //       account_id: "0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2",
  //       amount: 10
  //     };
  //
  //     cy.request({
  //       method: 'POST',
  //       url: `${apiUrl}/transactions`,
  //       body: transactionRequest,
  //       failOnStatusCode: false,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then((response) => {
  //       expect(response.status).to.eq(201);
  //       expect(response.body.transaction_id).to.exist;
  //       expect(response.body.account_id).to.eq(transactionRequest.account_id);
  //       expect(response.body.amount).to.eq(transactionRequest.amount);
  //     });
  //   });
  //
  //
  //   it('should not create a new transaction with invalid data', () => {
  //     const invalidTransactionRequest = {
  //       account_id: "invalid-account-id",
  //       amount: "not-a-number"
  //     };
  //
  //     cy.request({
  //       method: 'POST',
  //       url: `${apiUrl}/transactions`,
  //       body: invalidTransactionRequest,
  //       failOnStatusCode: false,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then((response) => {
  //       expect(response.status).to.eq(400);
  //     });
  //   });
  //
  //   it('should get all transactions', () => {
  //     cy.request({
  //       method: 'GET',
  //       url: `${apiUrl}/transactions`,
  //     }).then((response) => {
  //       expect(response.status).to.eq(200);
  //       expect(response.body).to.be.an('array');
  //     });
  //   });
  //
  //   it('should get a transaction by ID', () => {
  //     const transactionId = "4bcc3959-6fe1-406e-9f04-cad2637b47d5";
  //
  //     cy.request({
  //       method: 'GET',
  //       url: `${apiUrl}/transactions/${transactionId}`,
  //     }).then((response) => {
  //       expect(response.status).to.eq(200);
  //       expect(response.body.transaction_id).to.eq(transactionId);
  //     });
  //   });

    it('should not get a non-existing transaction by ID', () => {
      const nonExistingTransactionId = "non-existing-id";

      cy.request({
        method: 'GET',
        url: `${apiUrl}/transactions/${nonExistingTransactionId}`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });

  //   it('should handle missing or incorrect request body', () => {
  //     const invalidRequestBody = {};
  //
  //     cy.request({
  //       method: 'POST',
  //       url: `${apiUrl}/transactions`,
  //       body: invalidRequestBody,
  //       failOnStatusCode: false,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then((response) => {
  //       expect(response.status).to.eq(400);
  //       expect(response.body).to.include("Mandatory body parameters missing or have incorrect type.");
  //     });
  //   });
  //
  //   it('should handle HTTP method not allowed', () => {
  //     cy.request({
  //       method: 'PUT',
  //       url: `${apiUrl}/transactions`,
  //       failOnStatusCode: false,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then((response) => {
  //       expect(response.status).to.eq(405);
  //     });
  //   });
  //
  //   it('should handle unsupported content type', () => {
  //     cy.request({
  //       method: 'POST',
  //       url: `${apiUrl}/transactions`,
  //       failOnStatusCode: false,
  //     }).then((response) => {
  //       expect(response.status).to.eq(415);
  //     });
  //   });
  // })
  })

