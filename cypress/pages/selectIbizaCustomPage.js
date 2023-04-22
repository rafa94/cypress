class selectIbizaCustomPage{


    elements ={
    FrXsConfigureBtn : () => cy.get('seat-carline-item').find('seat-button'),
    }
    
    
    clickOnBuyIbizaCar(){
        this.elements.FrXsConfigureBtn().eq(0).click({force: true})
    }
    
}
    
    
    module.exports = new selectIbizaCustomPage();