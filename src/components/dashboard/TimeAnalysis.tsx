
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

// Time analysis data
const weekdayData = [
  { day: 'Monday', percentage: 70 },
  { day: 'Tuesday', percentage: 65 },
  { day: 'Wednesday', percentage: 75 },
  { day: 'Thursday', percentage: 80 },
  { day: 'Friday', percentage: 90 },
  { day: 'Saturday', percentage: 100 },
  { day: 'Sunday', percentage: 95 },
];

interface TimeAnalysisProps {
  className?: string;
}

const TimeAnalysis = ({ className }: TimeAnalysisProps) => {
  // Calculate which time slots are peak hours (just for visualization)
  const getTimeSlotClass = (hour: number) => {
    if (hour >= 12 && hour <= 14) return "bg-food-orange"; // Lunch peak
    if (hour >= 19 && hour <= 21) return "bg-food-orange"; // Dinner peak
    if ((hour >= 11 && hour < 12) || (hour > 14 && hour <= 15) || 
        (hour >= 18 && hour < 19) || (hour > 21 && hour <= 22)) {
      return "bg-food-yellow"; // Near peak
    }
    return "bg-gray-200"; // Off-peak
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Daily Timing Analysis</CardTitle>
        <Clock className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Hourly Demand Pattern</h4>
          <div className="grid grid-cols-12 gap-1 sm:gap-2">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div 
                  className={`w-full h-16 rounded-sm ${getTimeSlotClass(i)}`}
                  style={{ 
                    opacity: i >= 6 && i <= 22 ? 0.5 + 
                      (i >= 12 && i <= 14 ? 0.5 : 0) + 
                      (i >= 19 && i <= 21 ? 0.5 : 0) : 0.3 
                  }}
                ></div>
                <span className="text-xs mt-1">{i}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-food-orange rounded-sm mr-1"></div>
              <span className="text-xs">Peak Hours</span>
            </div>
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-food-yellow rounded-sm mr-1"></div>
              <span className="text-xs">Near Peak</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-200 rounded-sm mr-1"></div>
              <span className="text-xs">Off-Peak</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2">Weekly Distribution</h4>
          <div className="space-y-2">
            {weekdayData.map((item) => (
              <div key={item.day} className="flex items-center">
                <span className="text-sm w-24">{item.day}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-food-blue rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm ml-2 w-10">{item.percentage}%</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-gray-50 p-3 rounded-md">
            <h5 className="text-xs font-medium mb-1">Key Insights:</h5>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
              <li>Weekend orders are 30% higher than weekdays</li>
              <li>Peak hours: 12-2 PM and 7-9 PM</li>
              <li>Friday evening shows highest growth rate (8% WoW)</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeAnalysis;
