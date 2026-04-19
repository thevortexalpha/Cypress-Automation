/// <reference types="cypress" />

describe("My Fourth test", () => {

    it("Handling child windows", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke("removeAttr", "target").click();
        cy.origin("https://www.qaclickacademy.com/lander?feedid=2", async() => {
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get('.mt-50 h2').should('contain','QAClick Academy')
        })
    });

});