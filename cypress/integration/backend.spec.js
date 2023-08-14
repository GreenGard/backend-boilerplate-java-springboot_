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


it('should get transactions', () => {

  cy.request({
    method: 'GET',
    url: `${apiUrl}/transactions/summary`,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

it('should not get an account', () => {
  const nonExistingTransactionId = "non-existing-id";
  cy.request({
    method: 'GET',
    url: `${apiUrl}/accounts/1`,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(404);
  });

});

})


