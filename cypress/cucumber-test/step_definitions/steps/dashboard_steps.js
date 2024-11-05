/// <reference types="Cypress" />
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import DashboardPage from "../pages/dashboardPage"

const dashBoard = new DashboardPage();

Given('I am in Dashboard page', () => {
    dashBoard.navigate('/dashboard')
});

When('I navigate to {string} page', (pageName) => {
    dashBoard.navigate(`/${pageName.toLowerCase()}`);
});

Then('I should be in {string} page', (pageName) => {
    dashBoard.verifyPageTitle(pageName);
});


When('I enter {string} into the search box', (text) => {
    dashBoard.searchForAHeroName(text);
});

Then('the search result message should indicate {string}', (expectedResult) => {
    cy.wait(2000);
    const words = expectedResult.split(' ');
    const lastWord = words[words.length - 1].trim();  
    const expectedMessage = expectedResult.replace(lastWord, `"${lastWord}"`);
    cy.log('expected message now is ' + expectedMessage)
    dashBoard.verifyHeroSearchResults(expectedMessage);
});




               
        
