
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

export function StatCard({ title, value, icon, className, iconClassName }: StatCardProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm p-4", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
        {icon && (
          <div className={cn("p-2 rounded-md", iconClassName)}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
