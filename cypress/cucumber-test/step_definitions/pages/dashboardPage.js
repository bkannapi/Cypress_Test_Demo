/// <reference types="Cypress" />
import BasePage from "./basePage.js";


export default class DashboardPage extends BasePage {
    
    constructor() {
        super()
    }

    clearMessagesButtonSelector = 'button[type="button"]';
    searchBoxSelector = '#search-box';

    searchForAHeroName(text) {
        if (typeof text !== 'string' || !text.trim()) {
            throw new Error('Invalid text input for hero search');
        }
        cy.get(this.clearMessagesButtonSelector).contains('Clear Messages').click();
        cy.get(this.searchBoxSelector).clear().type(text).type('{enter}');
    }
    
    verifyHeroSearchResults(expectedMessage){
        cy.get('p.text-sm.text-gray-500').invoke('text').then(text => {
            const textWithoutPrefix = text.replace('HeroService:', '');
            expect(textWithoutPrefix.trim()).to.contain(expectedMessage.trim());
        });
    }

    verifyPageTitle(pageName){
        const expectedTitle = `${pageName.charAt(0).toUpperCase() + pageName.slice(1).toLowerCase()} | Tour of Heroes`;
        this.getPageTitle().should('contain', expectedTitle);
    }

}