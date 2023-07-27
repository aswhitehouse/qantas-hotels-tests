import elements from "./elements.json";

class PropertySearchResultsPage {
    loadSearchResultsPage(searchInput) {
        cy.fixture("data-properties").then(() => {
            cy.get(elements.propertySearchResults.propertySearchTitle, { timeout: 10000, retryInterval: 100 })
                .should('be.visible')
                .contains(searchInput);
        });
    }
    selectAnyProperty() {
        cy.get(elements.propertySearchResults.searchResultChild)
            .first()
            .should('be.visible')
            .invoke('removeAttr', 'target')
            .then(($result) => {
                const propertyTitle = $result.find(elements.propertySearchResults.propertyName)
                    .text()
                    .trim();

                cy.wrap({
                    title: propertyTitle,
                }).as('selectedResultContext');
                cy.get(elements.propertySearchResults.searchResultChild)
                    .first()
                    .click();
            });

        cy.get('@selectedResultContext').then((selectedResultContext) => {
            cy.get(elements.propertySearchResults.propertyName, { timeout: 10000, retryInterval: 100 })
                .should('have.text', selectedResultContext.title);
        });
    }
}

export default new PropertySearchResultsPage();