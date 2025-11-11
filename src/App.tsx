import Header from './components/Header';
import Hero from './components/Hero';
import ConnectProfile from './components/ConnectProfile';
import ComposeClip from './components/ComposeClip';
import TrendingRadar from './components/TrendingRadar';
import Analytics from './components/Analytics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Hero />
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-blue-100 shadow-sm">
          <p className="text-gray-600 text-sm">No accounts connected yet. Authenticate one to begin your campaign.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConnectProfile />
          <ComposeClip />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TrendingRadar />
          <Analytics />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
