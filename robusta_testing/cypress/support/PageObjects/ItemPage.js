class ItemPage {
    getDiscountRate() {
        return cy.get('.text-sm > :nth-child(1)', { timeout: 50000 })
    }

    getPriceBeforeDiscount() {
        return cy.get('.mt-4.flex > .text-lg', { timeout: 50000 })
    }
    getPriceAfterDiscount() {
        return cy.get('.mt-4.flex > .text-2xl', { timeout: 50000 })
    }
} export default ItemPage