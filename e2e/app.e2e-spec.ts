import { CampeonatoDeSurfPage } from './app.po';

describe('campeonato-de-surf App', function() {
  let page: CampeonatoDeSurfPage;

  beforeEach(() => {
    page = new CampeonatoDeSurfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
