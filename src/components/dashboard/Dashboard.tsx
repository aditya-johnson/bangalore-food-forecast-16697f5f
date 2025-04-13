
import React, { useState } from 'react';
import { Utensils, TrendingUp, MapPin, Clock, ShoppingBag } from 'lucide-react';
import Header from './Header';
import Sidebar from './Sidebar';
import StatCard from './StatCard';
import DemandChart from './DemandChart';
import PopularAreasMap from './PopularAreasMap';
import WeatherImpact from './WeatherImpact';
import TimeAnalysis from './TimeAnalysis';
import CuisinePopularity from './CuisinePopularity';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <Sidebar className="hidden lg:block" />
      
      {/* Mobile Sidebar */}
      <div 
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity",
          isMobileSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMobileSidebar}
      />
      <div 
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform lg:hidden",
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header onToggleMobileSidebar={toggleMobileSidebar} />
        
        <div className="flex-1 px-4 lg:px-8 py-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Bangalore Food Delivery Forecast</h1>
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <StatCard
                title="Today's Orders"
                value="3,485"
                icon={<Utensils className="h-5 w-5 text-white" />}
                trend={{ value: 12.5, isPositive: true }}
                color="bg-food-orange"
              />
              <StatCard
                title="Demand Forecast"
                value="3,890"
                icon={<TrendingUp className="h-5 w-5 text-white" />}
                trend={{ value: 8.2, isPositive: true }}
                color="bg-food-blue"
              />
              <StatCard
                title="Active Areas"
                value="28"
                icon={<MapPin className="h-5 w-5 text-white" />}
                trend={{ value: 2, isPositive: true }}
                color="bg-food-green"
              />
              <StatCard
                title="Avg Delivery Time"
                value="22 min"
                icon={<Clock className="h-5 w-5 text-white" />}
                trend={{ value: 1.5, isPositive: false }}
                color="bg-food-yellow"
              />
            </div>
            
            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <DemandChart />
              <PopularAreasMap />
            </div>
            
            {/* Weather Impact */}
            <div className="mb-6">
              <WeatherImpact />
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TimeAnalysis />
              <CuisinePopularity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
