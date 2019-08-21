describe('Protractor Demo', () => {
  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.get('http://google.com');
  })

  it('should open a Google page', () => {
    const expected = 'Google'

    expect(browser.getTitle()).toEqual(expected)
  });
});