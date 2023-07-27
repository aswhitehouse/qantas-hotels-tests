import elements from "./elements.json";

class PropertyPage {
    selectAnyRoom() {
        cy.get(elements.propertyPage.roomResultChild)
            .should('have.length.gt', 0);
        cy.get(elements.propertyPage.roomOfferChild)
            .should('be.visible')
            .first()
            .click();
    }
}

export default new PropertyPage();