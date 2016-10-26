import { MyWebAppPage } from './app.po';

describe('my-web-app App', function() {
  let page: MyWebAppPage;

  beforeEach(() => {
    page = new MyWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
