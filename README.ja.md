[English](./README.md) / 日本語

# CDK CORSユーティリティ

[AWS Cloud Development Kit (CDK)](https://docs.aws.amazon.com/cdk/v2/guide/home.html)で[Amazon API Gateway (API Gateway)](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)にCORS設定を行うユーティリティを提供します。

## 誰のためのライブラリ?

CDKでAPI Gatewayに繰り返しCORS設定をするのが面倒でしょうがないあなたにはこのライブラリが役に立つかもしれません。

## 背景

API GatewayでREST APIを記述するとき、いつもCORSを扱うためのユーティリティ関数をいくつか書いています。
これらの関数はとてもシンプルですが、新しいプロジェクトを始めるたびにもう毎回準備したくありません。

## インストール方法

このレポジトリをNodeの依存関係に追加してください。

```sh
npm install https://github.com/codemonger-io/cdk-cors-utils.git#v0.4.0
```

インストールしたモジュールは`@codemonger-io/cdk-cors-utils`として以下のように利用できます。

```js
import { makeIntegrationResponsesAllowCors } from '@codemonger-io/cdk-cors-utils';
```

このライブラリはCDK v2.x用に設計されており、CDK v1.xでは使えません。

### GitHub Packagesからインストールする

`main`ブランチにコミットがプッシュされるたびに、*開発者用パッケージ*がGitHub Packagesの管理するnpmレジストリにパブリッシュされます。
*開発者用パッケージ*のバージョンは次のリリースバージョンにハイフン(`-`)と短いコミットハッシュをつなげたものになります。例、`0.4.0-abc1234` (`abc1234`はパッケージをビルドするのに使ったコミット(*スナップショット*)の短いコミットハッシュ)。
*開発者用パッケージ*は[こちら](https://github.com/orgs/codemonger-io/packages?repo_name=cdk-cors-utils)にあります。

#### GitHubパーソナルアクセストークンの設定

*開発者用パッケージ*をインストールするには、最低限`read:packages`スコープの*クラシック*GitHubパーソナルアクセストークン(PAT)を設定する必要があります。
以下、簡単にPATの設定方法を説明します。
より詳しくは[GitHubのドキュメント](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)をご参照ください。

PATが手に入ったら以下の内容の`.npmrc`ファイルをホームディレクトリに作成してください。

```
//npm.pkg.github.com/:_authToken=$YOUR_GITHUB_PAT
```

`$YOUR_GITHUB_PAT`はご自身のPATに置き換えてください。

プロジェクトのルートディレクトリに以下の内容の`.npmrc`ファイルを作成してください。

```
@codemonger-io:registry=https://npm.pkg.github.com
```

これで以下のコマンドで*開発者用パッケージ*をインストールできます。

```sh
npm install @codemonger-io/cdk-cors-utils@0.4.0-abc1234
```

`abc1234`はインストールしたい*スナップショット*の短いコミットハッシュに置き換えてください。

## API

[`api-docs/markdown/index.md`](./api-docs/markdown/index.md)を参照ください(**英語版のみ**)。

## サンプル

TBD

## 開発

### TypeScriptファイルをトランスパイルする

`build`スクリプトは`src`フォルダ内のTypeScriptファイルをトランスパイルします。

```sh
pnpm build
```

トランスパイルされたJavaScript(`*.js`)ファイルと型宣言(`*.d.ts`)ファイルが`dist`フォルダに作られます。

### APIドキュメントを生成する

`doc`スクリプトはAPIドキュメントを生成します。

```sh
pnpm doc
```

`api-docs/markdown`フォルダ内のMarkdownファイルが更新されます。
ドキュメントは[API Extractor](https://api-extractor.com)と[API Documenter](https://api-extractor.com/pages/setup/generating_docs/)で生成しています。