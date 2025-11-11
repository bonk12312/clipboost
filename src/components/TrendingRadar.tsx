import { useState } from 'react';
import { TrendingUp, Music, Hash } from 'lucide-react';

export default function TrendingRadar() {
  const [activeTab, setActiveTab] = useState<'sounds' | 'hashtags'>('sounds');

  const mockSounds = [
    { id: 1, name: 'Original Sound - CryptoVibes', uses: '2.4M', trending: true },
    { id: 2, name: 'Pump It Up - DJ Token', uses: '1.8M', trending: true },
    { id: 3, name: 'To The Moon Mix', uses: '1.2M', trending: false },
    { id: 4, name: 'Viral Crypto Beat', uses: '890K', trending: true }
  ];

  const mockHashtags = [
    { id: 1, tag: '#cryptomemes', posts: '5.2M', growth: '+24%' },
    { id: 2, tag: '#tokenmoon', posts: '3.1M', growth: '+18%' },
    { id: 3, tag: '#memecoin', posts: '2.8M', growth: '+31%' },
    { id: 4, tag: '#defi', posts: '1.9M', growth: '+12%' }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start space-x-3 mb-6">
        <div className="p-2 bg-sky-100 rounded-lg">
          <TrendingUp className="w-5 h-5 text-sky-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">Trend radar</h3>
          <p className="text-sm text-gray-500">Meet the zeitgeist in regions you target.</p>
        </div>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('sounds')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'sounds'
              ? 'bg-sky-100 text-sky-700'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Music className="w-4 h-4" />
          <span>Sounds</span>
        </button>
        <button
          onClick={() => setActiveTab('hashtags')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'hashtags'
              ? 'bg-sky-100 text-sky-700'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Hash className="w-4 h-4" />
          <span>Hashtags</span>
        </button>
      </div>

      <div className="space-y-2 max-h-80 overflow-y-auto">
        {activeTab === 'sounds' ? (
          mockSounds.map((sound) => (
            <div
              key={sound.id}
              className="flex items-center justify-between p-3 bg-gray-50/50 rounded-lg hover:bg-sky-50/50 transition-all"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Music className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{sound.name}</p>
                  <p className="text-xs text-gray-500">{sound.uses} uses</p>
                </div>
              </div>
              {sound.trending && (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Trending
                </span>
              )}
            </div>
          ))
        ) : (
          mockHashtags.map((hashtag) => (
            <div
              key={hashtag.id}
              className="flex items-center justify-between p-3 bg-gray-50/50 rounded-lg hover:bg-sky-50/50 transition-all"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Hash className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{hashtag.tag}</p>
                  <p className="text-xs text-gray-500">{hashtag.posts} posts</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                {hashtag.growth}
              </span>
            </div>
          ))
        )}
      </div>

      <button className="w-full mt-4 py-2 text-sm font-medium text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-all">
        Refresh trends
      </button>
    </div>
  );
}
