Feature: Dashboard search feature

  Scenario Outline: user search for heroes
    Given I am in Dashboard page
    When I enter "<Search_string>" into the search box
    Then the search result message should indicate "<Expected_result>"

  Examples:
    | Search_string | Expected_result                | 
    | test          | no heroes matching test        |
    | Bombasto      | found heroes matching Bombasto |


   