import { BarChart3, Eye, Heart, Share2, TrendingUp } from 'lucide-react';

export default function Analytics() {
  const mockStats = [
    { label: 'Total Views', value: '847K', change: '+23%', icon: Eye },
    { label: 'Engagement', value: '124K', change: '+18%', icon: Heart },
    { label: 'Shares', value: '45.2K', change: '+31%', icon: Share2 },
    { label: 'Growth Rate', value: '12.4%', change: '+5%', icon: TrendingUp }
  ];

  const mockChartData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 78 },
    { day: 'Wed', value: 90 },
    { day: 'Thu', value: 72 },
    { day: 'Fri', value: 88 },
    { day: 'Sat', value: 95 },
    { day: 'Sun', value: 85 }
  ];

  const maxValue = Math.max(...mockChartData.map(d => d.value));

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start space-x-3 mb-6">
        <div className="p-2 bg-sky-100 rounded-lg">
          <BarChart3 className="w-5 h-5 text-sky-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">Engagement analytics</h3>
          <p className="text-sm text-gray-500">Tap into live engagements and trend activity.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {mockStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="p-4 bg-gradient-to-br from-gray-50 to-sky-50/30 rounded-xl border border-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-4 h-4 text-sky-600" />
                <span className="text-xs font-medium text-green-600">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-sky-50/30 rounded-xl p-4 border border-gray-100">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Weekly Performance</h4>
        <div className="flex items-end justify-between h-32 space-x-2">
          {mockChartData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-gray-200 rounded-t-lg relative overflow-hidden">
                <div
                  className="bg-gradient-to-t from-sky-400 to-blue-500 rounded-t-lg transition-all duration-500 hover:from-sky-500 hover:to-blue-600"
                  style={{ height: `${(data.value / maxValue) * 120}px` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-2">{data.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 p-4 bg-sky-50/50 rounded-xl border border-sky-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Best performing time</p>
            <p className="text-sm font-semibold text-gray-900">Saturday 8PM - 10PM</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Avg. engagement rate</p>
            <p className="text-sm font-semibold text-sky-600">8.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
