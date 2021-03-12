describe('Login / Logout Test', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.url().should('include', 'index.html');
    cy.get('#signin_button').click();
  });

  it('should try to login with invalid data', () => {
    cy.get('#login_form').should('be.visible');
    cy.get('#user_login').type('Invalide User');
    cy.get('#user_password').type('Invalide Password');
    cy.contains('Sign in').click();
  });

  it('should display error message', () => {
    cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong');
  });

  it('should login to application', () => {
    cy.fixture('user').then(user => {
      const username = user.id;
      const password = user.pwd;

      cy.login(username, password);
    });
  });

  it('should logout from application', () => {
    cy.contains('username').click();
    cy.get('#logout_link').click();
    cy.url().should('include', 'index.html');
  });
});
