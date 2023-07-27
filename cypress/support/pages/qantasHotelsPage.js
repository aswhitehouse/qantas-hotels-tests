import elements from "./elements.json";

class QantasHotelsPage {
    hasLoaded() {
        cy.fixture("data-properties").then((td) => {
            cy.url().should("include", td.qantasHotelsUri);
            cy.get(elements.qantasHotelsPage.hotelsPanel).should('be.visible');
        });
    }
}

export default new QantasHotelsPage();