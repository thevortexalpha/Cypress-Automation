/// <reference types="cypress" />

describe("My first test", () => {

    it("Launch application URL", () => {
        /** Navigating to application URL */
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        /** Searching for products */
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        // cy.get(".product:visible").should("have.length", 4);
        /** Asserting the results have four and adding to cart */
        cy.get(".products").as("productLocator");
        cy.get("@productLocator").find(".product").should("have.length", 4);
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click();
        cy.get("@productLocator").find(".product").each(($el, index, $list) => {
            const vegetableName = $el.find("h4.product-name").text();
            if(vegetableName.includes("Cashews")) {
                cy.wrap($el).find("button").click();
            }
        });
        /** Asserting the header text */
        cy.get(".brand").then((logoElement) => {
            cy.log(logoElement.text());
        });
        cy.get(".brand").should("have.text", "GREENKART");
        /** Proceeding to checkout & placing the order */
        cy.get("a.cart-icon").click();
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.contains("Place Order").click();
    })  

})