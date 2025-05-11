
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Users, 
  BarChart3, 
  Settings,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SideNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SideNav({ open, onOpenChange }: SideNavProps) {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Application Form', path: '/application-form', icon: FileText },
    { name: 'My Loans', path: '/my-loans', icon: FileText },
    { name: 'Verifier Dashboard', path: '/verifier', icon: Users },
    { name: 'Admin Dashboard', path: '/admin', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:inset-auto md:z-auto',
        open ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-loan-green rounded-md flex items-center justify-center">
              <span className="text-white font-bold">LM</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Loan Manager</span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onOpenChange(false)}
            className="md:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="px-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100 group"
              >
                <item.icon className="h-5 w-5 mr-3 text-gray-500 group-hover:text-loan-green" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="font-medium">U</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">User Name</p>
              <p className="text-xs text-gray-500">user@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
