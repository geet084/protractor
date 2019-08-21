describe('Protractor Demo', () => {
  let searchTerm;
  let searchInput;
  let submitBtn;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get('http://google.com');

    searchTerm = "Turing School of Software and Design"
    searchInput = element(by.name('q'))
    submitBtn = element(by.tagName('form'))
      .element(by.tagName('.FPdoLc'))
      .element(by.buttonText('Google Search'))
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

  it('should click on the front end engineering program link for Turing', () => {
    const expected = 'https://turing.io/programs/front-end-engineering/'
    const feeLink = element(by.linkText('Front End Engineering'))

    searchInput.sendKeys(searchTerm)
    submitBtn.click()
    feeLink.click()

    expect(browser.getCurrentUrl()).toEqual(expected)
  });
});