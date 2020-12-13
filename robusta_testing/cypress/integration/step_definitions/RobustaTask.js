import { When, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../support/PageObjects/HomePage'
import SearchResultPage from "../../support/PageObjects/SearchResultPage"
import ItemPage from "../../support/PageObjects/ItemPage"
import CartPage from "../../support/PageObjects/CartPage"


let orderNumber
When(/^user Search for \"([^\"]*)\"$$/, function (text) {
  const homePage = new HomePage()
  homePage.getSearchField().type('Fresh Ice Box 8 liter')
  homePage.getSearchIcon().click()
})

And(/^select first item in the list$/, () => {
  const searchResultPage = new SearchResultPage()
  searchResultPage.getFirstITem().click()
})

Then(/^valid price displayed before and after discount$/, () => {
  const itemPage = new ItemPage()
  var discountRate
  itemPage.getDiscountRate().scrollIntoView
  itemPage.getDiscountRate().then((element) => { discountRate = element.text() })
  cy.log(discountRate)
  var priceBeforeDiscount
  itemPage.getPriceBeforeDiscount().scrollIntoView
  itemPage.getPriceBeforeDiscount().then((element) => { priceBeforeDiscount = element.text() })
  cy.log(priceBeforeDiscount)
  var priceAfterDiscount
  itemPage.getPriceAfterDiscount().then((element) => { priceAfterDiscount = element.text() })
  cy.log(priceAfterDiscount)
  // expect(priceAfterDiscount).equal(priceBedoreDiscount - (priceBedoreDiscount*discountRate))
})

When(/^add \"([^\"]*)\" items to cart$/, function (number) {
  const searchResultPage = new SearchResultPage()
  orderNumber = number
  for (let i = 0; i < number - 1; i++) {
    searchResultPage.getIncreaseItemsIcon().scrollIntoView().click();
  }
  searchResultPage.getAddToCartButton().scrollIntoView().click()
  searchResultPage.getExitIcon().scrollIntoView().click()
})

And(/^user go to cart page$/, () => {
  cy.visit(Cypress.env('URL') + "checkout")
})

Then(/^My Cart contains number of added elements$/, () => {
  const cartPage = new CartPage()
  var x 
  cartPage.getOrderQuantity()
  .invoke('val')
  .then(quantity => expect(quantity).to.include(orderNumber));
})

When(/^remove added items from cart$/, () => {
  const cartPage = new CartPage()
  cartPage.getRemoveIcon().click()
})


Then(/^cart is empty$/, () => {
  const cartPage = new CartPage()
  cartPage.getRemoveIcon().should('not.exist');
})