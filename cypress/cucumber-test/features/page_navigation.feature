Feature: Top Heroes app page naviagtion

  Scenario Outline: User verifies page navigation
    Given I am in Dashboard page
    When I navigate to "<PageName>" page
    Then I should be in "<PageName>" page

  Examples:
    | PageName  |
    | Heroes    |
    | Dashboard |