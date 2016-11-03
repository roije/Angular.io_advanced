import { AngularioAdvancedPage } from './app.po';

describe('angulario-advanced App', function() {
  let page: AngularioAdvancedPage;

  beforeEach(() => {
    page = new AngularioAdvancedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
