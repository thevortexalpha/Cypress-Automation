/// <reference types="cypress" />

describe("My Second test", () => {

    it("Launching application", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        // Handling alerts & Confirmation popups
        cy.get("#alertbtn").click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge");
        });

        cy.get("#confirmbtn").click();
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("Hello , Are you sure you want to confirm?");
        });

    });

})
