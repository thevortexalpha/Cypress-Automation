/// <reference types="cypress" />

describe("My Second test", () => {

    it("Launching application", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Handling checkboxes
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1");
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
        cy.get("input[type='checkbox']").check(["option2", "option3"]);

        // Handling static dropdowns
        cy.get("select").select("option3").should("have.value", "option3");
    });

})
