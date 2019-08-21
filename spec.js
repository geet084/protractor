describe('Protractor Demo', () => {
  let searchTerm;
  let searchInput;
  let submitBtn;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get('http://google.com');

    searchTerm = "Turing School of Software and Design"
    searchInput = element(by.name('q'))
    const form = element(by.tagName('form')).element(by.tagName('.FPdoLc'))
    submitBtn = form.element(by.buttonText('Google Search'))
  })

  it('should open a Google page', () => {
    const expected = 'Google'

    expect(browser.getTitle()).toEqual(expected)
  });

  it('should search for Turing and show results page', () => {
    const expected = searchTerm + ' - Google Search'

    searchInput.sendKeys(searchTerm)
    submitBtn.click()

    expect(browser.getTitle()).toEqual(expected)
  });
});