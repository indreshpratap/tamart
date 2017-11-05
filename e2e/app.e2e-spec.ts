import { TamartPage } from './app.po';

describe('tamart App', () => {
  let page: TamartPage;

  beforeEach(() => {
    page = new TamartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
