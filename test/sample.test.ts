describe('Sample test', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:8000');
  });

  it('screenshot', async () => {
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('type test', async () => {
    // setup
    const inputText = 'hoge';

    // exercise
    await page.type('#txt', inputText);

    // verify
    const actual = await page.$eval('input[id="txt"]', (el) => (el as HTMLInputElement).value);
    expect(actual).toBe(inputText);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
