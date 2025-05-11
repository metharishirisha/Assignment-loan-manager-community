
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface ApplicationItem {
  id: string;
  name: string;
  amount: number;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface ApplicationListProps {
  title: string;
  applications: ApplicationItem[];
  className?: string;
}

export function ApplicationList({ title, applications, className }: ApplicationListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <div className={cn("bg-white rounded-lg shadow-sm", className)}>
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
      </div>
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applicant
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.length > 0 ? (
              applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        {app.name.charAt(0)}
                      </div>
                      <span>{app.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    ${app.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {app.date}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <Badge 
                      variant="outline" 
                      className={cn("font-normal", getStatusColor(app.status))}
                    >
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </Badge>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-sm text-gray-500 text-center">
                  No applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
