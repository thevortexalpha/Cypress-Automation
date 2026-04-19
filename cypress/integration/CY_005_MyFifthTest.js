/// <reference types="cypress" />

describe("My Fifth test", () => {

    it("Handling web tables", async() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("tbody tr td:nth-child(2)").each(($el, index, $list) => {
            const courseName = $el.text();
            if(courseName.includes("SoapUI")){
                cy.get("tbody tr td:nth-child(2)").eq(index).next().then((priceElement) => {
                    const coursePrice = priceElement.text();
                    expect(coursePrice).to.equal("35")
                })
            }
        })
    })

});