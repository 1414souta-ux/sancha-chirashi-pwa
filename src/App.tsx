export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            三軒茶屋チラシ比較くん
          </h1>
          <p className="text-xl text-gray-600">
            5つのスーパーのチラシ価格を一括比較
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-3">📱</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                モバイル対応PWA
              </h2>
              <p className="text-gray-600">
                スマートフォンでワンタップアクセス。オフラインでも利用可能
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-3">💰</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                価格比較
              </h2>
              <p className="text-gray-600">
                5つのスーパーの価格を自動比較。お得な商品を一目で発見
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                価格推移追跡
              </h2>
              <p className="text-gray-600">
                過去の価格データと比較。いつが買い時かを判断
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                購入推奨
              </h2>
              <p className="text-gray-600">
                AI分析による最適な購入タイミングの提案
              </p>
            </div>
          </div>

          {/* Supermarkets */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              対象スーパー
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                "オオゼキ三軒茶屋",
                "ベルクス代官山",
                "ダイエー三軒茶屋",
                "サミット下馬",
                "西友三軒茶屋",
              ].map((store) => (
                <div
                  key={store}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center border border-indigo-200"
                >
                  <p className="font-semibold text-gray-900">{store}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => {
                alert("アプリケーション機能は現在準備中です");
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              アプリを開く
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-600">
          <p>© 2026 Sancha Chirashi PWA. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
