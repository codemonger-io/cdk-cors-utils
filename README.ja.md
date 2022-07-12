[English](./README.md) / 日本語

# CDK CORSユーティリティ

[AWS Cloud Development Kit (CDK)](https://docs.aws.amazon.com/cdk/v2/guide/home.html)で[Amazon API Gateway (API Gateway)](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)にCORS設定を行うユーティリティを提供します。

## 誰のためのライブラリ?

CDKでAPI Gatewayに繰り返しCORS設定をするのが面倒でしょうがないあなたにはこのライブラリが役に立つかもしれません。

## 背景

API GatewayでREST APIを記述するとき、私はいつもCORSを扱うためのユーティリティ関数をいくつか書いています。
これらの関数はとてもシンプルですが、新しいプロジェクトを始めるたびにもう毎回準備したくありません。

## インストール方法

このレポジトリをNodeの依存関係に追加してください。

```sh
npm install https://github.com/codemonger-io/cdk-cors-utils.git#v0.2.0
```

インストールしたモジュールは`cdk2-cors-utils`として以下のように利用できます。

```js
import { makeIntegrationResponsesAllowCors } from 'cdk2-cors-utils';
```

このライブラリはCDK v2.x用に設計されており、CDK v1.xでは使えません。

## API

[`api-docs/markdown/index.md`](./api-docs/markdown/index.md)を参照ください(**英語版のみ**)。

## サンプル

TBD

## 開発

### TypeScriptファイルをトランスパイルする

`build`スクリプトは`src`フォルダ内のTypeScriptファイルをトランスパイルします。

```sh
npm run build
```

トランスパイルされたJavaScript(`*.js`)ファイルと型宣言(`*.d.ts`)ファイルが`dist`フォルダに作られます。

### APIドキュメントを生成する

`doc`スクリプトはAPIドキュメントを生成します。

```sh
npm run doc
```

`api-docs/markdown`フォルダ内のMarkdownファイルが更新されます。
ドキュメントは[API Extractor](https://api-extractor.com)と[API Documenter](https://api-extractor.com/pages/setup/generating_docs/)で生成しています。