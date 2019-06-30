import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', async () => {
    page.navigateTo();
    const result = await page.selectItem()
    expect(result).toBeTruthy()
  });
});
