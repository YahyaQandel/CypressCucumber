import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I visit {string}', (url: string) => {
  cy.visit(url);
});

Then('I should see a search bar', () => {
  cy.get("textarea").should('exist');
});
