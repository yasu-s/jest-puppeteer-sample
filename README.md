# jest-puppeteer-sample

## 概要

- jest-puppeteerを使用してWEBサイトのテストを行うサンプルです。
- jest-image-snapshotによってWEBサイトのスクリーンショットを画像比較します。

## 動作環境

- Node.js - 14.x
- Yarn - 1.22.x
- Jest - 27.5.x
- ts-jest - 27.1.x
- jest-puppeteer - 6.1.x
- jest-image-snapshot - 4.5.x
- @types/jest-image-snapshot - 4.3.x
- lite-server - 2.6.x (テスト用WEBサイトとして使用)

## 動作確認

### パッケージインストール

```bash
yarn
```

### テスト用WEBサイト起動

```bash
yarn lite-server
```

### テスト実行

- テスト用WEBサイト起動時のターミナルとは別のターミナルで実行

```bash
 yarn test
```

## 実行結果

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

## サンプルソース

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

## 参考URL

- https://jestjs.io/ja/docs/puppeteer
- https://www.npmjs.com/package/jest-puppeteer
- https://www.npmjs.com/package/jest-image-snapshot
