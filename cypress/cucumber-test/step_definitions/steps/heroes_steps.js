/// <reference types="Cypress" />
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import HeroesPage from "../pages/heroesPage"

const heroesPage      = new HeroesPage();

When('I create a new {string} Hero', (heroName) => {
    cy.wait(2000);
    heroesPage.create_hero(heroName);
});
  

Then('a new Hero should be created', () => {
    heroesPage.verifyNewHeroCreation().then(isHeroAdded => {
        if (isHeroAdded) {
          cy.log('Hero added successfully.');
        } else {
          cy.log('Hero has NOT added.');
        }
        expect(isHeroAdded).to.be.true;
    });

});

Then('default heroes list of {string} should be displayed', (default_number_of_heroes_list) => {
    heroesPage.getDefaultHeroListCount().then(heroCount => {
        cy.log(`Number of default heroes: ${heroCount}`);
        expect(heroCount).to.equal(Number(default_number_of_heroes_list)); // Perform assertion
      });
});


When('I change a Heroe name from {string} to {string}', (oldName, newName) => {
    heroesPage.editHeroName(oldName, newName)
});

Then('Hero name should be changed to {string}', (expectedName) => {
    heroesPage.verifyEditHeroName(expectedName)
});