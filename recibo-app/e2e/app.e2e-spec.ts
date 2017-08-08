import { ReciboAppPage } from './app.po';

describe('recibo-app App', () => {
  let page: ReciboAppPage;

  beforeEach(() => {
    page = new ReciboAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
