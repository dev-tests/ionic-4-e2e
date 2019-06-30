import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {

  constructor() {}
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  async selectItem() {
    await element(by.className('secondary')).click()
    browser.executeScript('document.querySelector(".ion-padding ion-select").value = "1"')
    await browser.sleep(10000)
    return true
  }
}
