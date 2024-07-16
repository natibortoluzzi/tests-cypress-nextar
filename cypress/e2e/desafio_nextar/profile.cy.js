describe('profile', () => {
  it('Validar que não é possível salvar sem preencher todos os campos obrigatórios', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
          cy.title().should('eq', 'OrangeHRM');
          cy.get('input[placeholder="Username"]')
            .type('Admin');
          cy.get('input[placeholder="Password"]')
            .type('admin123');
          cy.get('.oxd-button').click();
          cy.get(':nth-child(6) > .oxd-main-menu-item').should('be.visible').click();
          cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear();
          cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear();
          cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
   });
});


describe('profile', () => {
    it('Validar que com os dados obrigatórios preenchidos é possível salvar as informações', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');

        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click();
    });
});