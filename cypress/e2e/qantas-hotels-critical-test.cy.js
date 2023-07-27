import hotelsPage from "../support/pages/qantasHotelsPage";
import searchResultsPage from "../support/pages/propertySearchResultsPage";

describe("Critical 'Revenue Generating' Transactions", () => {
  it("Should search and return hotels in a target location", () => {
    cy.fixture("data-properties").then((td) => {
      hotelsPage.loadHotelsPage();
      hotelsPage.searchFor(td.city);
      searchResultsPage.loadSearchResultsPage(td.locationTitle);
    });
  });
});