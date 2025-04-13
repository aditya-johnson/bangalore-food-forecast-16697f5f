
import React from 'react';
import { 
  BarChart4, 
  Calendar, 
  Home, 
  MapPin, 
  Settings, 
  ShoppingBag, 
  TrendingUp, 
  Umbrella 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Sidebar = ({ className }: { className?: string }) => {
  const navigation = [
    { name: 'Overview', href: '/', icon: Home },
    { name: 'Analytics', href: '/analytics', icon: BarChart4 },
    { name: 'Demand Forecast', href: '/demand-forecast', icon: TrendingUp },
    { name: 'Popular Areas', href: '/popular-areas', icon: MapPin },
    { name: 'Weather Impact', href: '/weather-impact', icon: Umbrella },
    { name: 'Time Analysis', href: '/time-analysis', icon: Calendar },
    { name: 'Orders', href: '/orders', icon: ShoppingBag },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className={cn("w-64 bg-white shadow-lg h-screen flex-shrink-0 hidden lg:block", className)}>
      <div className="h-16 flex items-center px-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-food-orange rounded-full flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">BangaloreBites</span>
        </div>
      </div>
      <nav className="mt-6">
        <div className="px-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => cn(
                'flex items-center px-2 py-3 text-sm font-medium rounded-md mb-1 transition-colors',
                isActive
                  ? 'bg-food-orange text-white'
                  : 'text-gray-600 hover:bg-food-orange/10 hover:text-food-orange'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
