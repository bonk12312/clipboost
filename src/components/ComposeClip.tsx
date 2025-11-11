import { useState } from 'react';
import { Send, Upload, Wand2 } from 'lucide-react';

export default function ComposeClip() {
  const [caption, setCaption] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  const handleGenerateCaption = () => {
    const mockCaptions = [
      'This token is about to moon 🚀 Don\'t miss out!',
      'Viral moment incoming... Are you ready?',
      'When you realize you\'re early to the next 100x',
      'POV: You found the next big thing'
    ];
    const randomCaption = mockCaptions[Math.floor(Math.random() * mockCaptions.length)];
    setCaption(randomCaption);
  };

  const handleDeploy = () => {
    console.log('Deploying clip:', { caption, scheduleDate, uploadedFile });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start space-x-3 mb-6">
        <div className="p-2 bg-sky-100 rounded-lg">
          <Send className="w-5 h-5 text-sky-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Compose a clip</h3>
          <p className="text-sm text-gray-500">Schedule or dispatch instantly to hype your meme campaign.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-2">Upload video clip</label>
          <div className="relative">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-sky-400 transition-all cursor-pointer bg-gray-50/50 hover:bg-sky-50/50"
            >
              <div className="text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  {uploadedFile ? uploadedFile : 'Click to upload video'}
                </p>
                <p className="text-xs text-gray-400 mt-1">MP4, MOV up to 100MB</p>
              </div>
            </label>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs text-gray-500">Generate caption</label>
            <button
              onClick={handleGenerateCaption}
              className="flex items-center space-x-1 px-3 py-1 text-xs font-medium text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-all"
            >
              <Wand2 className="w-3 h-3" />
              <span>AI Generate</span>
            </button>
          </div>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Launch copy — mention partners, drop CTAs, and embed links."
            rows={4}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Platform</label>
            <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all">
              <option>TikTok</option>
              <option>Instagram Reels</option>
              <option>YouTube Shorts</option>
              <option>All platforms</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Schedule (optional)</label>
            <input
              type="datetime-local"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button
          onClick={handleDeploy}
          className="w-full py-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
        >
          Deploy Clip
        </button>
      </div>
    </div>
  );
}
