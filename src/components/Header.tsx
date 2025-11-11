import { MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Left Section: Logo + Telegram */}
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-gray-900">ClipBoost</h1>

            <a
              href="https://t.me/YOUR_TELEGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <MessageCircle size={24} className="text-sky-500" />
            </a>
          </div>

          {/* Right Section: Buttons */}
          <div className="flex items-center space-x-3">
            <button className="hidden sm:block px-4 py-2 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors">
              Login
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm font-medium rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
