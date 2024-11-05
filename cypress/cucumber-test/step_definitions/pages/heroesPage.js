import BasePage from "./basePage.js";


export default class HeroesPage extends BasePage {
    
    constructor() {
        super()
    }
 
    clearMessageButtonSelector = 'div.flex.flex-row';
    heroTextFieldParent = 'div.w-full.sm\\:max-w-xs';
    addHeroButtonSelector = 'div.sm\\:flex.sm\\:items-center';
    heroCreatedListSelector = 'div.flow-root ul[role="list"]';
    defaultHeroListSelector = '.col-span-1.flex.rounded-md.shadow-sm';
    heroNameListDeatils = '.flex-1.truncate.px-4.py-2.text-sm';
    editHeroNameFieldSelector = '.mt-1.text-sm.text-gray-900.sm\\:col-span-2.sm\\:mt-0 input#hero-name';
    newHeroNameEditField = '#hero-name';

    create_hero(heroName) {
        cy.get(this.clearMessageButtonSelector).contains('button', 'Clear Messages').click();
        cy.wait(4000);
        cy.get(this.heroTextFieldParent).within(() => {
            cy.get(this.newHeroNameEditField).type(heroName);
        });  
        cy.get(this.addHeroButtonSelector, { timeout: 10000 }).contains('button', 'Add Hero').click();
    }

    verifyNewHeroCreation() {
        return cy.verifyATextInList(this.heroCreatedListSelector, 'added hero');
    }

    getDefaultHeroListCount(){
        return cy.get(this.defaultHeroListSelector, { timeout: 10000 }).its('length');
    }

    editHeroName(oldName, newName){
        cy.get(this.heroNameListDeatils).each(($heading) => {
            if ($heading.text().trim().includes(oldName)) {
              cy.log(oldName + " Name match found");
              cy.wrap($heading).find('a').click().then(() => {
                cy.wait(2000);
                cy.get(this.editHeroNameFieldSelector).should('be.visible').clear().type(newName);
                cy.contains('button', 'Save').should('be.visible').should('be.enabled').click();
              });
            }
          });
    }

    verifyEditHeroName(expectedName) {
        cy.get(this.heroNameListDeatils).each(($heading) => { 
            const currentName = $heading.text().trim();
            if (currentName.includes(expectedName)) {
                expect(currentName).to.contain(expectedName.trim());
            }
        });
    }

}