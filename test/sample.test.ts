describe('Sample test', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:8000');
  });

  it('title = test', async () => {
    const title = await page.title();
    expect(title).toBe('test');
  });

  it('type test', async () => {
    const inputText = 'hoge';
    await page.type('#txt', inputText);
    const actual = await page.$eval('input[id="txt"]', (el) => (el as HTMLInputElement).value);
    expect(actual).toBe(inputText);
  });
});
