# Cypress Cucumber Automation Framework

This project is an automation framework built using Cypress and Cucumber for end-to-end testing of Angular applications.

## Project Structure
.
├── cypress
│   ├── cucumber-test
│   │   ├── features
│   │   │   ├── dashboard_search.feature
│   │   │   ├── heroes.feature
│   │   │   └── page_navigation.feature
│   │   └── step_definitions
│   │       ├── pages
│   │       │   ├── basePage.js
│   │       │   ├── dashboardPage.js
│   │       │   └── heroesPage.js
│   │       └── steps
│   │           ├── dashboard_steps.js
│   │           └── heroes_steps.js
│   ├── downloads
│   ├── fixtures
│   ├── plugins
│   │   └── index.js
│   ├── screenshots
│   ├── support
│   │   ├── commands.js
│   │   └── e2e.js
│   └── videos
│       ├── dashboard_search.feature.mp4
│       ├── heroes.feature.mp4
│       └── page_navigation.feature.mp4
├── cypress.config.js
├── package.json
├── package-lock.json
└── readme

To get started with this project, follow the steps below:

1. Download the project:

2.Load the visualstudiocode(VSCode)

3.Open the folder'AngularAutomationProject' in VSCode

4)Open the VScode terminal(sample command in terminal shown below)

(base) PS Cypress\AngularAutomationProject>

5)Install cypress for the project by running below command in terminal window
```
    npm install Cypress --save-dev
    ```

6. Install the dependencies:
    ```
    npm install
    ```
    Hit enter

## Project Dependencies

The project relies on the following main dependencies:

- Cypress: End-to-end testing framework
- Cucumber: Behavior Driven Development (BDD) framework

Refer to `package.json` for a complete list of dependencies.

## Running the Tests

You can run the tests using either one of the below commands:

 Pre requeste:-Pleae makesure applciation running in `http://localhost:4200`

```
npm run cyrun:headed
  
```

##  Viewing the Results

After running the tests, you can view the results in the terminal. The results will show the number of passing and failing tests.
The screenshots are also shown in TEST RESULT word document atatched

Test run also been video recorded using bandicam free software.Relevant zip file enclosed herwith.please install bandicam.exe-(free version) to play the test result video.

## Screenshots and Videos
Cypress automatically captures screenshots and videos of test runs. These can be found in the following directories(post successful run of the test at the user machine):
Cypress/AngularAutomationProject/cypress/videos 

## Folder Structure Details
cypress/cucumber-test/features: Contains the feature files written in Gherkin syntax.
cypress/cucumber-test/step_definitions/pages: Contains the page objects for different pages of the application.
cypress/cucumber-test/step_definitions/steps: Contains the step definitions for the feature files.
cypress/downloads: Directory for downloaded files during tests.
cypress/fixtures: Directory for fixture files.
cypress/plugins: Contains Cypress plugins.
cypress/screenshots: Directory where screenshots are saved.
cypress/support: Contains custom commands and e2e setup.
cypress/videos: Directory where videos of test runs are saved.