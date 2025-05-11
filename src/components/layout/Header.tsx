
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-4 md:hidden" 
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-loan-green text-white flex items-center justify-center">
            <span className="font-medium">U</span>
          </div>
        </div>
      </div>
    </header>
  );
}
