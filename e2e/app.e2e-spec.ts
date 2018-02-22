import { Inlay2Page } from './app.po';

describe('inlay2 App', function() {
  let page: Inlay2Page;

  beforeEach(() => {
    page = new Inlay2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
