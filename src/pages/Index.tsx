
import React from 'react';
import { FileText, DollarSign, Users, BarChart2 } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { ApplicationList, ApplicationItem } from '@/components/dashboard/ApplicationList';
import { DashboardChart } from '@/components/dashboard/DashboardChart';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  // Mock data for the dashboard
  const stats = [
    { title: 'Total Applications', value: '156', icon: <FileText className="h-5 w-5 text-white" />, iconClassName: 'bg-loan-green' },
    { title: 'Total Amount', value: '$258,000', icon: <DollarSign className="h-5 w-5 text-white" />, iconClassName: 'bg-loan-blue' },
    { title: 'Verified Applications', value: '98', icon: <Users className="h-5 w-5 text-white" />, iconClassName: 'bg-loan-yellow' },
    { title: 'Rejected Applications', value: '12', icon: <BarChart2 className="h-5 w-5 text-white" />, iconClassName: 'bg-loan-red' },
  ];

  const applications: ApplicationItem[] = [
    { id: '1', name: 'John Doe', amount: 25000, date: '2023-05-01', status: 'approved' },
    { id: '2', name: 'Jane Smith', amount: 15000, date: '2023-05-05', status: 'pending' },
    { id: '3', name: 'Mike Johnson', amount: 50000, date: '2023-05-10', status: 'rejected' },
    { id: '4', name: 'Sarah Williams', amount: 35000, date: '2023-05-15', status: 'pending' },
    { id: '5', name: 'David Brown', amount: 20000, date: '2023-05-20', status: 'approved' },
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
    <DashboardLayout title="Dashboard">
      <div className="mb-6">
        <Link to="/application-form">
          <Button className="bg-loan-green hover:bg-opacity-90">
            Apply for a New Loan
          </Button>
        </Link>
      </div>

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

      <div className="mb-6">
        <ApplicationList 
          title="Recent Applications" 
          applications={applications} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardChart 
          title="Monthly Loan Distribution" 
          data={monthlyData} 
          color="#0E8F6F" 
        />
        <DashboardChart 
          title="Applications Processed (Weekly)" 
          data={applicationData} 
          color="#0d6efd" 
        />
        <DashboardChart 
          title="Number of Rejections (Weekly)" 
          data={rejectionData} 
          color="#DC3545" 
        />
      </div>
    </DashboardLayout>
  );
};

export default Index;
