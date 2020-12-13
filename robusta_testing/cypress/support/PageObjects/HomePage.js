class HomePage {
    getSearchField() {
        return cy.get('#searchInput');
    }
    getSearchIcon() {
        return cy.get('[aria-label="Search"]')
    }

    getCartIcon(){
        return cy.get('.flex-wrap > .nuxt-link-exact-active')
    }
}
export default HomePage