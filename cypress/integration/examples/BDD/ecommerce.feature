Feature: end to end Ecommerce vadidation

    appication Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page 
    When I add items to the cart
    And vilidate the total prices
    Then select the country submit and verify the success message