export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-8 md:p-12 border-2 border-sky-300 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"></div>

      <div className="relative z-10">
        <div className="inline-block mb-4">
          <span className="px-4 py-1.5 bg-white/80 backdrop-blur-sm text-sky-600 text-xs font-semibold rounded-full border border-sky-200">
            CLIPBOOST MISSION CONTROL
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Light up token runs with{' '}
              <span className="text-sky-500">ClipBoost firepower</span>.
            </h2>

            <p className="text-gray-600 text-base mb-6 max-w-2xl leading-relaxed">
              ClipBoost is the shill squad accelerator: lock content in your vault,
              choreograph clip storms, trigger post raids, and track the feed so every drop
              drags liquidity before the next meme wave even spins up.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm rounded-full border border-blue-200">
                ClipBoost-secured content vault
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm rounded-full border border-blue-200">
                Auto-built clip & caption scripts
              </span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-sm rounded-full border border-blue-200">
                Live engagement + breakout radar
              </span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-sky-200 shadow-lg">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">POWERED BY</h3>
              <h4 className="text-xl font-bold text-gray-900">ClipBoost Engine</h4>
            </div>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">•</span>
                <span>Auto-generate viral clips with AI-powered editing</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">•</span>
                <span>Schedule cross-platform posts and optimize timing</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2">•</span>
                <span>Stream engagement spikes & trend pivots in real time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
