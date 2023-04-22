class configurationCarPage{


    elements ={
    NextDetailBtn : () => cy.get('seat-price-details-small').find('seat-button'),
    }
    
    
    clickNextConfigurationCar(){
        this.elements.NextDetailBtn().eq(0).click({force: true})
    }
    
}
    
    
    module.exports = new configurationCarPage();