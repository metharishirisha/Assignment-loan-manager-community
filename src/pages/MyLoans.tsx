
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ApplicationList, ApplicationItem } from '@/components/dashboard/ApplicationList';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MyLoans = () => {
  const myLoans: ApplicationItem[] = [
    { id: '1', name: 'Personal Loan', amount: 25000, date: '2023-05-01', status: 'approved' },
    { id: '2', name: 'Home Renovation', amount: 15000, date: '2023-03-15', status: 'approved' },
    { id: '3', name: 'Education Loan', amount: 50000, date: '2023-01-10', status: 'rejected' },
    { id: '4', name: 'Business Loan', amount: 35000, date: '2022-11-22', status: 'pending' },
    { id: '5', name: 'Car Loan', amount: 20000, date: '2022-08-05', status: 'approved' },
  ];

  return (
    <DashboardLayout title="My Loans">
      <div className="mb-6">
        <Link to="/application-form">
          <Button className="bg-loan-green hover:bg-opacity-90">
            Apply for a New Loan
          </Button>
        </Link>
      </div>
      
      <ApplicationList 
        title="My Loan Applications" 
        applications={myLoans} 
      />
      
      <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Loan Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-sm font-medium text-green-800">Active Loans</h3>
            <p className="text-2xl font-semibold text-green-900 mt-2">3</p>
            <p className="text-sm text-green-700 mt-1">Total: $60,000</p>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-sm font-medium text-yellow-800">Pending Applications</h3>
            <p className="text-2xl font-semibold text-yellow-900 mt-2">1</p>
            <p className="text-sm text-yellow-700 mt-1">Total: $35,000</p>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 className="text-sm font-medium text-red-800">Rejected Applications</h3>
            <p className="text-2xl font-semibold text-red-900 mt-2">1</p>
            <p className="text-sm text-red-700 mt-1">Total: $50,000</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyLoans;
