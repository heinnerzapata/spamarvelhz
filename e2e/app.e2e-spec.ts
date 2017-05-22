import { SpamarvelhzPage } from './app.po';

describe('spamarvelhz App', function() {
  let page: SpamarvelhzPage;

  beforeEach(() => {
    page = new SpamarvelhzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
