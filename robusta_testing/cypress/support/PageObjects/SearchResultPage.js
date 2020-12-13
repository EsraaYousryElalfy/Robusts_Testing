class SearchResultPage {
    getFirstITem() {
        return cy.get('div.h-full > .ProductCardGrid > :nth-child(1) > .ProductCard__link > .text-sm',{ timeout: 50000 }).first()
    }
    getAmountBefore ()
    {
        return cy.get('.mt-4.flex > .text-2xl');
    }
    getAmountAfter()
    {
        return cy.get('.mt-4.flex > .text-lg');
    }
    getIncreaseItemsIcon ()
    {
        return cy.get('[aria-label="Increase"] > .h-6 > path',{ timeout: 50000 });
    }
    getAddToCartButton()
    {
        return cy.get('.bg-green-100');
    }
    getCartIcon ()
    {
        return cy.get('.flex.lg\:hidden',{ timeout: 50000 })
    }
    getExitIcon ()
    {
        return cy.get('.ml-auto > .h-8 > use');
    }

    getProceedToPaymentButton(){
        return cy.get('.mt-md > [href="/checkout"]')
    }
}
export default SearchResultPage