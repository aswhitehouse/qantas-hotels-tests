import landingPage from "../support/pages/qantasHotelsPage";

describe("Navigation Tests", () => {
  it("Should load the Qantas Hotels website", () => {
    cy.fixture("data-properties").then((td) => {
      cy.visit(td.qantasHotelsUri);
      landingPage.loadHotelsPage();
    });
  });
});