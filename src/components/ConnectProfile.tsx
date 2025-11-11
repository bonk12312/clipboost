import { useState } from 'react';
import { Link } from 'lucide-react';

export default function ConnectProfile() {
  const [handle, setHandle] = useState('');
  const [authMethod, setAuthMethod] = useState('');
  const [locale, setLocale] = useState('en-US');

  const handleConnect = () => {
    console.log('Connecting profile:', { handle, authMethod, locale });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start space-x-3 mb-6">
        <div className="p-2 bg-sky-100 rounded-lg">
          <Link className="w-5 h-5 text-sky-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Connect a profile</h3>
          <p className="text-sm text-gray-500">Log in once to store encrypted credentials and reuse sessions.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">@handle</label>
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="username"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Primary auth (username / email / phone)</label>
            <input
              type="text"
              value={authMethod}
              onChange={(e) => setAuthMethod(e.target.value)}
              placeholder="auth method"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Secondary auth (optional)</label>
            <input
              type="text"
              placeholder="2FA code"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Locale</label>
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
            >
              <option value="en-US">en-US</option>
              <option value="es-ES">es-ES</option>
              <option value="fr-FR">fr-FR</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Custom user agent (optional)</label>
            <input
              type="text"
              placeholder="default"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button
          onClick={handleConnect}
          className="w-full py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
        >
          Connect profile
        </button>
      </div>
    </div>
  );
}
