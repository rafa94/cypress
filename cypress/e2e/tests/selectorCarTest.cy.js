import homePage from "../../pages/homePage"
import configurationCarPage from "../../pages/configurationCarPage"
import selectIbizaCustomPage from "../../pages/selectIbizaCustomPage"
import finalPageBuyCarPage from "../../pages/finalPageBuyCarPage"

it('Test to buy a car', () => {
  cy.visit('https://configurador.seat.es/seat-cc/configurator/LIVE/003/DEFAULT/es/car-selector');
  homePage.clickOnBuyIbizaCar();
  selectIbizaCustomPage.clickOnBuyIbizaCar();
  configurationCarPage.clickNextConfigurationCar();
  configurationCarPage.clickNextConfigurationCar();
  configurationCarPage.clickNextConfigurationCar();
  configurationCarPage.clickNextConfigurationCar();
  finalPageBuyCarPage.checkAppearDowloadConfigurationBtn();
})