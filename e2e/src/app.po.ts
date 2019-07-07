import { browser, by, element, ExpectedConditions, protractor } from 'protractor'

let scrollIntoView = function (element) {
  arguments[0].scrollIntoView()
}

export class AppPage {

  constructor () {}
  navigateTo () {
    return browser.get('/')
  }

  getParagraphText () {
    return element(by.deepCss('app-root ion-content')).getText()
  }

  async selectItem () {
    await browser.driver.manage().window().maximize()
    await browser.sleep(2000)

    const $element = element(by.id('teste'))
    const $teste = $element.element(by.css('input'))
    const position = await $teste.getLocation()

    browser.executeScript(scrollIntoView, $teste)
    console.log('SendKeys')

    await $teste.sendKeys('Roniel')

    const value = await $teste.getAttribute('value')

    console.log('VALUE ' + value)

    await browser.sleep(2000)
    return value
  }

}
