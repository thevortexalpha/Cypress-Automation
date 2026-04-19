/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe("My Sixth test", () => {

    it("Working with iFrame", async() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#courses-iframe').invoke('attr', 'src').then((iframeSrc) => {
            cy.origin(iframeSrc, () =>{
                cy.contains('Mentorship').click();
                cy.get('.pricing-container', { timeout: 10000 })    .should('have.length', 2);
            })
        }) 
        // cy.frameLoaded("#courses-iframe");
        // cy.iframe().find("a[href*='mentorship']").eq(0).click();
        // cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
    })

});