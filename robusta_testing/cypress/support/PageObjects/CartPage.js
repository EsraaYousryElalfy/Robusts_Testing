class CartPage {
    getRemoveIcon() {
        return cy.get('.hidden > .ml-4 > .fill-current', { timeout: 10000 })
    }

    getMyCartHeader() {
        return cy.get('.lg\:text-3xl', { timeout: 10000 })
    }

    getOrderQuantity() {
        return cy.get('#cart_item_44621', { timeout: 10000 })
    }
}
export default CartPage