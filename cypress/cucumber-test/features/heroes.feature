Feature: Hello search feature

  Scenario: User views Heros page
    Given I am in Dashboard page
    When I navigate to "Heroes" page
    Then default heroes list of "9" should be displayed

  Scenario: User creates a new heroe
    Given I am in Dashboard page
    And I navigate to "Heroes" page
    When I create a new "Automation_testing_Hero" Hero
    Then a new Hero should be created
    
  Scenario: User changes the Heroes name 
    Given I am in Dashboard page
    And I navigate to "Heroes" page
    When I change a Heroe name from "Dynama" to "DynamaNew"
    Then Hero name should be changed to "DynamaNew"