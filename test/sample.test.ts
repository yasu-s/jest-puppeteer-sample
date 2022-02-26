describe('Sample test', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8000');
  });

  it('should be titled "test"', async () => {
    const title = await page.title();
    expect(title).toBe('test');
  });
});
