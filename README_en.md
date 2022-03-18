# jest-puppeteer-sample

## Overview

- This is a sample for testing a website using jest-puppeteer. 
- Compare screenshots of websites with jest-image-snapshot. 

## System Requirements

- Node.js - 14.x
- Yarn - 1.22.x


## Library

- Jest - 27.5.x
- ts-jest - 27.1.x
- TypeScript - 4.5.x
- jest-puppeteer - 6.1.x
- jest-image-snapshot - 4.5.x
- @types/jest - 27.4.x
- @types/puppeteer - 5.4.x
- @types/jest-image-snapshot - 4.3.x
- lite-server - 2.6.x (Used as a test website)

## Usage

### Package installation 

```bash
yarn
```

### Launch test website 

```bash
yarn lite-server
```

### Test run 

- Execute in a terminal different from the terminal when the test website is started 

```bash
yarn test
```

## Execution result

```bash
$ jest
 PASS  test/sample.test.ts
  Sample test
    ✓ screenshot (349 ms)
    ✓ type test (319 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   2 passed, 2 total
Time:        2.802 s, estimated 3 s
Ran all test suites.
✨  Done in 4.65s.
```

## Source

```typescript
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
```

## Reference URL 

- https://jestjs.io/ja/docs/puppeteer
- https://www.npmjs.com/package/jest-puppeteer
- https://www.npmjs.com/package/jest-image-snapshot
