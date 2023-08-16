
describe("Hoteles.com", ()=>{
    beforeEach(()=>{
        cy.visit("https://sebastianvelasquez2509.github.io/Hotels/");
    });

    it("Verificar que las todas las cards aparecen desde un inicio", () => {
        cy.get(".boton").should("have.length", 18);
    })

    it("Aplicar cada filtro por precio y verificar que las cards que aparecen corresponden a el precio indicado", ()=>{
        cy.get("#filter-prices").select("$");
        cy.wait(300)
        cy.get(".div-2 .p:nth-child(2)").contains("$")
        cy.get(".div-2 .p:nth-child(2)").should("have.length", 3);

        cy.get("#filter-prices").select("$$");
        cy.wait(300)
        cy.get(".div-2 .p:nth-child(2)").contains("$$")
        cy.get(".div-2 .p:nth-child(2)").should("have.length", 4);

        cy.get("#filter-prices").select("$$$");
        cy.wait(300)
        cy.get(".div-2 .p:nth-child(2)").contains("$$$")
        cy.get(".div-2 .p:nth-child(2)").should("have.length", 2);

        cy.get("#filter-prices").select("$$$$");
        cy.wait(300)
        cy.get(".div-2 .p:nth-child(2)").contains("$$$$")
        cy.get(".div-2 .p:nth-child(2)").should("have.length", 9);

        cy.get("#filter-prices").select("All prices");
        cy.wait(300)
        cy.get(".boton").should("have.length", 18);
    })

    it("Limpiar los filtros y verificar que nuevamente todos las cards estén presentes", ()=>{
        cy.get("#filter-prices").select("$$");
        cy.wait(300)
        cy.get(".div-2 .p:nth-child(2)").should("have.length", 4);

        cy.get(".input").click()
        cy.get(".boton").should("have.length", 18);
    })
})