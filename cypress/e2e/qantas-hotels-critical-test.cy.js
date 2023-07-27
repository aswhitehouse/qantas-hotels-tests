import hotelsPage from "../support/pages/qantasHotelsPage";
import searchResultsPage from "../support/pages/propertySearchResultsPage";
import propertyPage from "../support/pages/propertyPage";
import checkoutPage from "../support/pages/checkoutPage";

describe("Critical 'Revenue Generating' Transactions", () => {
  it("Should search and return hotels in a target location", () => {
    cy.fixture("data-properties").then((td) => {
      hotelsPage.loadHotelsPage();
      hotelsPage.searchFor(td.city);

      searchResultsPage.loadSearchResultsPage(td.locationTitle);
    });
  });
  it("Should return hotels, select any room, proceed to checkout", () => {
    cy.fixture("data-properties").then((td) => {
      hotelsPage.loadHotelsPage();
      hotelsPage.searchFor(td.city);

      searchResultsPage.loadSearchResultsPage(td.locationTitle);
      searchResultsPage.selectAnyProperty();

      propertyPage.selectAnyRoom();

      checkoutPage.loadCheckoutPage();
    });
  });
});