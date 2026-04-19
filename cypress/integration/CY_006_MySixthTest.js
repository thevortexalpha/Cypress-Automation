/// <reference types="cypress" />

describe("My Sixth test", () => {

    it("Mouse actions", async() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("div.mouse-hover-content").invoke("show");
        cy.contains("Top").click();
        cy.url().should("include", "top")
    })

});