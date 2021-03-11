describe('Search Box Test', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
  });

  it('should type into searchbox and submit with pressing enter', () => {
    cy.get('#searchTerm').type('some text {enter}');
  });

  it('should show search results page', () => {
    cy.get('h2').contains('Search Results:');
  });
});
