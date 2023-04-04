describe('VIX-VIP Access', () => {

    it('Access Website', () => {
        cy.visit("https://web-staging.rakamin.com/")
        // cy.xpath("//div[@id='root']/div/div/img").click({ force: true })
        // cy.wait(5000)
        cy.xpath("//div[@id='root']/div[2]/div[2]/button").click({multiple: true})
})

})