class SearchItemPage{
    getFirstITem() {
        return cy.get(':nth-child(1) > .ProductCard__link > picture.mx-auto > .object-contain')
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
        return cy.get('[aria-label="Increase"] > .h-6 > path');
    }
    getAddToCartButton()
    {
        return cy.get('.bg-green-100');
    }
    getCartIcon ()
    {
        return cy.get('.flex.lg\:hidden > .h-md');
    }
    getExitIcon ()
    {
        return cy.get('.ml-auto > .h-8 > use');
    }

}