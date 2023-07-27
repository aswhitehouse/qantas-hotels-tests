import elements from "./elements.json";

class QantasHotelsPage {
    loadHotelsPage() {
        cy.fixture("data-properties").then((td) => {
            cy.visit(td.qantasHotelsUri);
            cy.url().should("include", td.qantasHotelsUri);
            cy.get(elements.qantasHotelsPage.hotelsPanel).should('be.visible');
        });
    }
    searchFor(searchTarget) {
        cy.get(elements.qantasHotelsPage.locationSearchInput)
            .first()
            .click()
            .type(searchTarget)
            .should('have.value', searchTarget);

        cy.get(elements.qantasHotelsPage.locationDownshiftMenu, { timeout: 10000, retryInterval: 100 })
            .should('be.visible')
            .contains(searchTarget)
            .parent()
            .click();

        cy.get(elements.qantasHotelsPage.locationSearchButton)
            .should('be.visible')
            .click();
    }
}

export default new QantasHotelsPage();