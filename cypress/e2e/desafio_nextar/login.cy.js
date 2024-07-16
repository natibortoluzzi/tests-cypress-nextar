/ <reference types="cypress" / >
  describe('login', () => {
    it('Realizar login com sucesso', () => {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      cy.title().should('eq', 'OrangeHRM');
      cy.get('input[placeholder="Username"]')
        .type('Admin');
      cy.get('input[placeholder="Password"]')
        .type('admin123');
      cy.get('.oxd-button').click();
    });
  });

  describe('login', () => {
    it('Login com falha', () => {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.title().should('eq', 'OrangeHRM');
      cy.get('input[placeholder="Username"]')
        .type('Amdin');
      cy.get('input[placeholder="Password"]')
        .type('Admin12');
      cy.get('.oxd-button').click();
    });
  });

  describe('login', () => {
    it('Reset de senha', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('.orangehrm-login-forgot-header[data-v-0af708be]').click();
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    cy.get('input[placeholder="Username"]')
        .type('Admin');
    cy.get('.orangehrm-forgot-password-button[data-v-76e562c4]').eq(1).click();
    });
  });