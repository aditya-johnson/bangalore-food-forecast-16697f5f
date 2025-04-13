
import React, { useState } from 'react';
import { Bell, Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onToggleMobileSidebar: () => void;
  className?: string;
}

const Header = ({ onToggleMobileSidebar, className }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className={cn("bg-white shadow-sm h-16 flex items-center px-4 lg:px-6", className)}>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onToggleMobileSidebar}
        className="lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </Button>

      <div className="ml-4 lg:ml-0 font-bold text-lg lg:hidden">
        BangaloreBites
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <div className={cn(
          "hidden lg:flex items-center rounded-full bg-gray-100 px-3 w-64 transition-all",
          isSearchOpen && "w-80"
        )}>
          <Search className="h-4 w-4 text-gray-500" />
          <Input 
            type="text" 
            placeholder="Search..." 
            className="border-none bg-transparent h-9 focus-visible:ring-0 focus-visible:ring-offset-0"
            onFocus={() => setIsSearchOpen(true)}
            onBlur={() => setIsSearchOpen(false)}
          />
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden"
        >
          <Search className="h-6 w-6" />
        </Button>

        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
        >
          <Bell className="h-6 w-6" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-food-orange rounded-full"></span>
        </Button>

        <div className="h-8 w-8 rounded-full bg-food-blue text-white grid place-items-center font-semibold">
          AB
        </div>
      </div>
    </header>
  );
};

export default Header;
