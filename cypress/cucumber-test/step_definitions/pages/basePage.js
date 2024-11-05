/// <reference types="Cypress" />

export default class BasePage {
    baseUrl = "http://localhost:4200";
    navigate(path) {
        cy.visit(this.baseUrl + path)
    }

    getPageTitle() {
        return cy.title();
    }
} 