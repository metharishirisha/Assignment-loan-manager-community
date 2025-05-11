
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface DashboardChartProps {
  title: string;
  data: Array<{
    name: string;
    value: number;
  }>;
  className?: string;
  color?: string;
}

export function DashboardChart({ title, data, className, color = "#0E8F6F" }: DashboardChartProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm p-4", className)}>
      <h3 className="text-base font-medium text-gray-900 mb-2">{title}</h3>
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
