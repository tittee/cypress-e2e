describe('Feedback Test', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.contains('Feedback').click();
  });

  it('should load feedback form', () => {
    cy.get('form').should('be.visible');
  });

  it('should fill feedback form', () => {
    cy.get('#name').type('name');
    cy.get('#email').type('email@demo.com');
    cy.get('#subject').type('Just a subject');
    cy.get('#comment').type('Just a comment');
  });

  it('should submit feedback form', () => {
    cy.get('.btn-signin').click();
  });

  it('should display feedback form', () => {
    cy.get('#feedback-title').contains('Feedback');
  });
});
