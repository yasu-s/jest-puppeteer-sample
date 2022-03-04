# jest-puppeteer-sample

## 概要

- jest-puppeteerを使用してWEBサイトのテストを行うサンプルです。

## 動作環境

- Node.js - 14.x
- Yarn - 1.22.x
- Jest - 27.5.x
- jest-puppeteer - 6.1.x
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
    ✓ title = test (110 ms)
    ✓ type test (63 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.356 s
Ran all test suites.
```

## 参考URL

- https://jestjs.io/ja/docs/puppeteer
- https://www.npmjs.com/package/jest-puppeteer
