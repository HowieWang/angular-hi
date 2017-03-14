import { Ng2HiPage } from './app.po';

describe('ng2-hi App', function() {
  let page: Ng2HiPage;

  beforeEach(() => {
    page = new Ng2HiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
