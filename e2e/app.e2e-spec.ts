import { SubAppsPage } from './app.po';

describe('sub-apps App', () => {
  let page: SubAppsPage;

  beforeEach(() => {
    page = new SubAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
