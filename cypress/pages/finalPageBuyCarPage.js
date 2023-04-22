class finalPageBuyCarPage{


    elements ={
    DowloadConfigurationBtn : () => cy.get('a').contains('descarga tu configuración aquí'),
    }
    
    
    checkAppearDowloadConfigurationBtn(){
        this.elements.DowloadConfigurationBtn().should('be.visible');
    }
    
}
    
    
    module.exports = new finalPageBuyCarPage();