import { Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-md border-t border-blue-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">ClipBoost</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-md">
              The ultimate meme growth engine for tokens. Auto-generate viral clips,
              optimize posting schedules, and track engagement in real-time.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 bg-gray-100 hover:bg-sky-100 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600 hover:text-sky-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 hover:bg-sky-100 rounded-lg transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5 text-gray-600 hover:text-sky-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 hover:bg-sky-100 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 hover:text-sky-600" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-sky-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-sky-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 ClipBoost. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-sky-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-sky-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
