class homePage{


    elements ={
    AcceptCokiesBtn : () => cy.get('button[id="onetrust-accept-btn-handler"]'),
    SelectIbizaCarBtn : () => cy.get('seat-car-selector-list').find('seat-car-selector-list-item')
    }
    
    
    clickOnBuyIbizaCar(){
        this.elements.AcceptCokiesBtn().click()
        this.elements.SelectIbizaCarBtn().eq(0).click()
    }
    
}
    
    
    module.exports = new homePage();