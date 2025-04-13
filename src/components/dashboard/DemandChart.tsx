
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Sample data for the chart
const data = [
  { time: '00:00', orders: 32 },
  { time: '03:00', orders: 18 },
  { time: '06:00', orders: 24 },
  { time: '09:00', orders: 67 },
  { time: '12:00', orders: 124 },
  { time: '15:00', orders: 98 },
  { time: '18:00', orders: 156 },
  { time: '21:00', orders: 102 },
  { time: '24:00', orders: 54 },
];

interface DemandChartProps {
  className?: string;
}

const DemandChart = ({ className }: DemandChartProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Hourly Demand Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}`} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }} 
                labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
                formatter={(value) => [`${value} orders`, 'Forecast']}
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Area 
                type="monotone" 
                dataKey="orders" 
                stroke="#F97316" 
                fillOpacity={1} 
                fill="url(#colorOrders)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemandChart;
