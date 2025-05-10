describe('When: I use the reading list feature', () => {
  let readingItemsCount = 0;
  beforeEach(() => {
    cy.startAt('/');
    readingItemsCount = cy.$$('[data-testing="reading-list-item"]').length;
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should add the book to Reading list and undo it', () => {
    cy.get('input[type="search"]').type('python');

    cy.get('form').submit();

    cy.get('[data-testing="add-item"]:enabled').first().click();

    cy.get('[data-testing="reading-list-item"]').should('have.length', readingItemsCount + 1);

    cy.get('.mat-simple-snackbar-action button').click();

    cy.get('[data-testing="reading-list-item"]').should('have.length', readingItemsCount);
  });

  it('Then: I should remove item from Reading list and undo it', () => {
    cy.get('input[type="search"]').type('python');

    cy.get('form').submit();

    cy.get('[data-testing="add-item"]:enabled').first().click();

    cy.get('[data-testing="reading-list-item"]').should('have.length', readingItemsCount + 1);

    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="remove-item"]:enabled').first().click();

    cy.get('[data-testing="reading-list-close"]').click();

    cy.get('[data-testing="reading-list-item"]').should('have.length', readingItemsCount);

    cy.get('.mat-simple-snackbar-action button').click({force: true});

    cy.get('[data-testing="reading-list-item"]').should('have.length', readingItemsCount + 1);
  })
});
