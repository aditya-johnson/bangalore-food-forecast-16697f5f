
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, Sun, Wind } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

const weatherData = [
  { 
    weather: 'Sunny', 
    icon: Sun, 
    color: '#FBBF24', 
    orderIncrease: 5,
    popularItems: ['Ice Cream', 'Cold Coffee', 'Salads'] 
  },
  { 
    weather: 'Cloudy', 
    icon: Cloud, 
    color: '#94A3B8', 
    orderIncrease: 0,
    popularItems: ['Sandwiches', 'Burgers', 'Pizza'] 
  },
  { 
    weather: 'Rainy', 
    icon: CloudRain, 
    color: '#0EA5E9', 
    orderIncrease: 42,
    popularItems: ['Hot Soup', 'Tea/Coffee', 'Pakoras'] 
  },
  { 
    weather: 'Thunderstorm', 
    icon: CloudLightning, 
    color: '#8B5CF6', 
    orderIncrease: 38,
    popularItems: ['Biryani', 'Hot Chocolate', 'Momos'] 
  },
  { 
    weather: 'Windy', 
    icon: Wind, 
    color: '#A1A1AA', 
    orderIncrease: 12,
    popularItems: ['Pizza', 'Curry', 'Hot Beverages']
  },
];

const chartData = [
  { weather: 'Sunny', orders: 2100, avg: 1950 },
  { weather: 'Cloudy', orders: 1950, avg: 1950 },
  { weather: 'Rainy', orders: 2800, avg: 1950 },
  { weather: 'Thunderstorm', orders: 2750, avg: 1950 },
  { weather: 'Windy', orders: 2200, avg: 1950 },
];

interface WeatherImpactProps {
  className?: string;
}

const WeatherImpact = ({ className }: WeatherImpactProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Weather Impact Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="weather" axisLine={false} tickLine={false} />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                domain={[0, 'dataMax + 200']}
                tickFormatter={(value) => `${value/1000}k`}
              />
              <Tooltip 
                formatter={(value) => [`${value} orders`]} 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }}
              />
              <Bar dataKey="orders" fill="#F97316" radius={[4, 4, 0, 0]} />
              <Bar dataKey="avg" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {weatherData.map((item) => (
            <div key={item.weather} className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
              <div className={cn("p-3 rounded-full mb-2")} style={{ backgroundColor: `${item.color}20` }}>
                <item.icon style={{ color: item.color }} />
              </div>
              <span className="font-medium text-sm mb-1">{item.weather}</span>
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full font-medium",
                item.orderIncrease > 0 ? "bg-green-100 text-green-800" : 
                item.orderIncrease < 0 ? "bg-red-100 text-red-800" : 
                "bg-gray-100 text-gray-800"
              )}>
                {item.orderIncrease > 0 && '+'}{item.orderIncrease}% orders
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherImpact;
