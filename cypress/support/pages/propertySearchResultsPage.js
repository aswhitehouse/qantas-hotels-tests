import elements from "./elements.json";

class PropertySearchResultsPage {
    loadSearchResultsPage(searchInput) {
        cy.fixture("data-properties").then(() => {
            cy.get(elements.qantasPropertySearchPage.propertySearchTitle, { timeout: 10000, retryInterval: 100 })
                .should('be.visible')
                .contains(searchInput);
        });
    }
}

export default new PropertySearchResultsPage();