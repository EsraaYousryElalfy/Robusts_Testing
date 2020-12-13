Feature: Robusta Testing Challenging

    Scenario: Search for Ice
        When user Search for "Fresh Ice Box 8 liter"
        And select first item in the list
        Then valid price displayed before and after discount
        When add "3" items to cart
        And user go to cart page
        # Then My Cart contains number of added elements
        When remove added items from cart
        # Then cart is empty
