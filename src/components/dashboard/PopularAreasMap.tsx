
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Bangalore areas with fictional demand heatmap data
const areaData = [
  { id: 1, name: 'Koramangala', demand: 95 },
  { id: 2, name: 'Indiranagar', demand: 88 },
  { id: 3, name: 'HSR Layout', demand: 85 },
  { id: 4, name: 'Whitefield', demand: 78 },
  { id: 5, name: 'Electronic City', demand: 72 },
  { id: 6, name: 'Jayanagar', demand: 68 },
  { id: 7, name: 'MG Road', demand: 65 },
  { id: 8, name: 'BTM Layout', demand: 62 },
  { id: 9, name: 'JP Nagar', demand: 58 },
  { id: 10, name: 'Marathahalli', demand: 55 },
];

const getDemandColor = (value: number) => {
  if (value >= 85) return 'bg-food-orange';
  if (value >= 70) return 'bg-food-yellow';
  if (value >= 60) return 'bg-amber-400';
  return 'bg-amber-300';
};

const getDemandTextColor = (value: number) => {
  if (value >= 70) return 'text-white';
  return 'text-gray-800';
};

interface PopularAreasMapProps {
  className?: string;
}

const PopularAreasMap = ({ className }: PopularAreasMapProps) => {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Popular Delivery Areas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
          {/* Simplified map of Bangalore */}
          <div className="absolute inset-0 p-4">
            <div className="relative h-full w-full border-4 border-gray-300 rounded-lg overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 border-dashed border-gray-400 rounded-full opacity-50"></div>
              
              {/* Fictional "roads" to give map structure */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300"></div>
              <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gray-300"></div>
              <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
              
              {/* Area markers */}
              {areaData.map((area) => {
                // Calculate position using some math to distribute them around
                const angle = (area.id * 36) % 360; // Distribute in a circle
                const distance = 0.3 + (area.demand / 200); // Higher demand = closer to center
                const top = 50 + 40 * Math.sin(angle * (Math.PI / 180)) * distance;
                const left = 50 + 40 * Math.cos(angle * (Math.PI / 180)) * distance;
                
                const size = 30 + (area.demand / 10); // Size based on demand
                
                return (
                  <div 
                    key={area.id}
                    className={cn(
                      getDemandColor(area.demand),
                      "absolute rounded-lg shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all",
                      selectedArea === area.id ? "ring-4 ring-food-blue z-10 scale-110" : "hover:scale-105"
                    )}
                    style={{
                      top: `${top}%`,
                      left: `${left}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                    }}
                    onClick={() => setSelectedArea(area.id === selectedArea ? null : area.id)}
                  >
                    <span className={cn(
                      "font-bold text-xs",
                      getDemandTextColor(area.demand)
                    )}>
                      {area.demand}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-2 left-2 bg-white/90 p-2 rounded-md shadow-sm">
            <div className="text-xs font-semibold mb-1">Demand Score</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-food-orange rounded-sm mr-1"></div>
                <span className="text-xs">High</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-food-yellow rounded-sm mr-1"></div>
                <span className="text-xs">Medium</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-amber-300 rounded-sm mr-1"></div>
                <span className="text-xs">Low</span>
              </div>
            </div>
          </div>
          
          {/* Area info panel */}
          {selectedArea && (
            <div className="absolute top-2 right-2 bg-white p-3 rounded-md shadow-md w-40">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-sm">
                  {areaData.find(a => a.id === selectedArea)?.name}
                </h4>
                <button 
                  className="text-gray-400 hover:text-gray-600"
                  onClick={() => setSelectedArea(null)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2 text-xs">
                <div className="flex justify-between">
                  <span>Demand Score:</span>
                  <span className="font-semibold">
                    {areaData.find(a => a.id === selectedArea)?.demand}/100
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Avg. Delivery:</span>
                  <span className="font-semibold">23 mins</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Peak Hours:</span>
                  <span className="font-semibold">7PM - 9PM</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularAreasMap;
