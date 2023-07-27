import elements from "./elements.json";

class CheckoutPage {
    loadCheckoutPage() {
        cy.get(elements.checkoutPage.personalDetailsForm, { timeout: 10000, retryInterval: 100 })
            .should('be.visible');
    }
}

export default new CheckoutPage();