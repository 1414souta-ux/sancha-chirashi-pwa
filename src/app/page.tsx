'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const supermarkets = [
    { id: 1, name: 'オオゼキ', store: '三軒茶屋店', url: 'https://www.ozeki-net.co.jp/shop/tokyo/setagaya/sangenjaya/' },
    { id: 2, name: 'ベルクス', store: '太子堂', url: 'https://sunbelx.com/store/48' },
    { id: 3, name: 'ダイエー', store: '三軒茶屋', url: 'https://www.daiei.co.jp/stores/d0777/' },
    { id: 4, name: 'サミット', store: '下馬店', url: 'https://www.summitstore.co.jp/store/tokyo' },
    { id: 5, name: '西友', store: '三軒茶屋', url: 'https://www.seiyu.co.jp/shop/%E8%A5%BF%E5%8F%8B%E4%B8%89%E8%BB%92%E8%8C%B6%E5%B1%8B%E5%BA%97/' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-emerald-200 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-emerald-700">🛒 チラシ比較</h1>
          <p className="text-sm text-gray-600">三軒茶屋周辺のスーパー最安値を検索</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {activeTab === 'home' && (
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="商品名を検索..."
                className="w-full px-4 py-3 rounded-lg border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="absolute right-3 top-3 text-emerald-600">🔍</button>
            </div>

            {/* Featured Section */}
            <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-6 text-white shadow-lg">
              <h2 className="text-xl font-bold mb-2">今週のおすすめ</h2>
              <p className="text-sm opacity-90">AIが分析した最安値商品をチェック</p>
              <button className="mt-4 bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                詳しく見る →
              </button>
            </section>

            {/* Supermarkets */}
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-4">スーパーマーケット</h2>
              <div className="space-y-3">
                {supermarkets.map((sm) => (
                  <a
                    key={sm.id}
                    href={sm.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md hover:border-emerald-300 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{sm.name}</h3>
                        <p className="text-sm text-gray-600">{sm.store}</p>
                      </div>
                      <span className="text-2xl">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* AI Analysis */}
            <section className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">🤖 AI分析機能</h3>
              <p className="text-sm text-blue-800 mb-3">チラシ画像をアップロードして、AIに分析させることができます</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                チラシをアップロード
              </button>
            </section>
          </div>
        )}

        {activeTab === 'compare' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800">価格比較</h2>
            <p className="text-gray-600">商品を検索して複数スーパーの価格を比較できます</p>
            {/* Comparison table will be added here */}
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800">AI分析</h2>
            <div className="space-y-3">
              <textarea
                placeholder="例：野菜が安いスーパーを教えて、予算3000円で1週間分の食材を買うなら..."
                className="w-full px-4 py-3 rounded-lg border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                rows={4}
              />
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                分析する
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-md mx-auto flex justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex-1 py-4 text-center font-semibold transition ${
              activeTab === 'home' ? 'text-emerald-600 border-t-2 border-emerald-600' : 'text-gray-600'
            }`}
          >
            🏠 ホーム
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`flex-1 py-4 text-center font-semibold transition ${
              activeTab === 'compare' ? 'text-emerald-600 border-t-2 border-emerald-600' : 'text-gray-600'
            }`}
          >
            📊 比較
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 py-4 text-center font-semibold transition ${
              activeTab === 'ai' ? 'text-emerald-600 border-t-2 border-emerald-600' : 'text-gray-600'
            }`}
          >
            🤖 AI分析
          </button>
        </div>
      </nav>
    </div>
  );
}
