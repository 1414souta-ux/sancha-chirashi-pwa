# 三軒茶屋チラシ比較くん - PWA版

三軒茶屋周辺のスーパーマーケット（オオゼキ、ベルクス、ダイエー、サミット、西友）のチラシ情報をAIで自動分析し、最安値を比較できるPWA（Progressive Web App）です。

## 機能

- 📱 **PWA対応** - スマートフォンにインストール可能、オフライン対応
- 🤖 **AI分析** - チラシ画像からLLMで自動抽出・分析
- 📊 **価格比較** - 複数スーパーの商品価格を一目で比較
- 🔍 **検索機能** - 商品名で最安値スーパーを検索
- 💬 **カスタムプロンプト** - AIに自由な質問を投げて分析

## 開発環境

- **フレームワーク**: Next.js 16
- **言語**: TypeScript
- **スタイル**: Tailwind CSS
- **デプロイ**: GitHub Pages

## セットアップ

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# ビルド
npm run build

# GitHub Pages用にエクスポート
npm run export
```

## GitHub Pages設定

このプロジェクトはGitHub Actionsで自動的にGitHub Pagesにデプロイされます。

1. GitHubリポジトリの設定で、GitHub Pagesを有効化
2. ソースを「GitHub Actions」に設定
3. `main`ブランチにpushするとデプロイが開始

## PWA機能

- **マニフェスト**: `public/manifest.json`
- **Service Worker**: `public/sw.js`
- **オフライン対応**: キャッシュ戦略で実装

## ライセンス

MIT
