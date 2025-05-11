
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { ApplicationList, ApplicationItem } from '@/components/dashboard/ApplicationList';
import { DashboardChart } from '@/components/dashboard/DashboardChart';
import { FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const VerifierDashboard = () => {
  // Mock data for the dashboard
  const stats = [
    { title: 'Total Applications', value: '156', icon: <FileText className="h-5 w-5 text-white" />, iconClassName: 'bg-loan-green' },
    { title: 'Approved', value: '98', icon: <CheckCircle className="h-5 w-5 text-white" />, iconClassName: 'bg-green-600' },
    { title: 'Rejected', value: '12', icon: <AlertCircle className="h-5 w-5 text-white" />, iconClassName: 'bg-loan-red' },
    { title: 'Pending Review', value: '46', icon: <Clock className="h-5 w-5 text-white" />, iconClassName: 'bg-loan-yellow' },
  ];

  const applications: ApplicationItem[] = [
    { id: '1', name: 'John Doe', amount: 25000, date: '2023-05-01', status: 'pending' },
    { id: '2', name: 'Jane Smith', amount: 15000, date: '2023-05-05', status: 'pending' },
    { id: '3', name: 'Mike Johnson', amount: 50000, date: '2023-05-10', status: 'pending' },
    { id: '4', name: 'Sarah Williams', amount: 35000, date: '2023-05-15', status: 'pending' },
    { id: '5', name: 'David Brown', amount: 20000, date: '2023-05-20', status: 'pending' },
    { id: '6', name: 'Emily Davis', amount: 30000, date: '2023-05-22', status: 'pending' },
    { id: '7', name: 'Michael Wilson', amount: 45000, date: '2023-05-24', status: 'pending' },
    { id: '8', name: 'Jessica Taylor', amount: 18000, date: '2023-05-25', status: 'pending' },
  ];

  const monthlyData = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 60 },
    { name: 'Mar', value: 45 },
    { name: 'Apr', value: 70 },
    { name: 'May', value: 55 },
    { name: 'Jun', value: 80 },
    { name: 'Jul', value: 65 },
    { name: 'Aug', value: 75 },
    { name: 'Sep', value: 85 },
    { name: 'Oct', value: 60 },
    { name: 'Nov', value: 70 },
    { name: 'Dec', value: 50 },
  ];

  const applicationData = [
    { name: 'Week 1', value: 12 },
    { name: 'Week 2', value: 19 },
    { name: 'Week 3', value: 15 },
    { name: 'Week 4', value: 22 },
    { name: 'Week 5', value: 18 },
    { name: 'Week 6', value: 24 },
    { name: 'Week 7', value: 21 },
    { name: 'Week 8', value: 17 },
  ];

  const rejectionData = [
    { name: 'Week 1', value: 2 },
    { name: 'Week 2', value: 5 },
    { name: 'Week 3', value: 3 },
    { name: 'Week 4', value: 6 },
    { name: 'Week 5', value: 2 },
    { name: 'Week 6', value: 4 },
    { name: 'Week 7', value: 5 },
    { name: 'Week 8', value: 2 },
  ];

  return (
    <DashboardLayout title="Verifier Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconClassName={stat.iconClassName}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ApplicationList 
            title="Applications Pending Review" 
            applications={applications} 
            className="h-full"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <DashboardChart 
            title="Monthly Loan Distribution" 
            data={monthlyData.slice(0, 6)} 
            color="#0E8F6F" 
          />
          <DashboardChart 
            title="Number of Rejections (Weekly)" 
            data={rejectionData.slice(0, 6)} 
            color="#DC3545" 
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VerifierDashboard;
