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

        // Handling dynamic dropdowns
        cy.get("#autocomplete").type("Ind");
        cy.get(".ui-menu-item div").each(($el, index, $list) => {
            if($el.text() === "India") {
                cy.wrap($el).click();
            }
        });
        cy.get("#autocomplete").should("have.value", "India");

        // Handling visibility of elements
        cy.get("#displayed-text").should("be.visible");
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should("not.be.visible");
        cy.get("#show-textbox").click();
        cy.get("#displayed-text").should("be.visible");
    });

})
