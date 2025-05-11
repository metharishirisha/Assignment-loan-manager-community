
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { ApplicationList, ApplicationItem } from '@/components/dashboard/ApplicationList';
import { DashboardChart } from '@/components/dashboard/DashboardChart';
import { FileText, DollarSign, Users, BarChart2 } from 'lucide-react';

const AdminDashboard = () => {
  // Mock data for the dashboard
  const stats = [
    { title: 'Total Applications', value: '156', icon: <FileText className="h-5 w-5 text-white" />, iconClassName: 'bg-loan-green' },
    { title: 'Total Amount', value: '$258,000', icon: <DollarSign className="h-5 w-5 text-white" />, iconClassName: 'bg-blue-600' },
    { title: 'Active Users', value: '78', icon: <Users className="h-5 w-5 text-white" />, iconClassName: 'bg-purple-600' },
    { title: 'Approval Rate', value: '62%', icon: <BarChart2 className="h-5 w-5 text-white" />, iconClassName: 'bg-orange-500' },
  ];

  const recentApplications: ApplicationItem[] = [
    { id: '1', name: 'John Doe', amount: 25000, date: '2023-05-01', status: 'approved' },
    { id: '2', name: 'Jane Smith', amount: 15000, date: '2023-05-05', status: 'pending' },
    { id: '3', name: 'Mike Johnson', amount: 50000, date: '2023-05-10', status: 'rejected' },
    { id: '4', name: 'Sarah Williams', amount: 35000, date: '2023-05-15', status: 'approved' },
    { id: '5', name: 'David Brown', amount: 20000, date: '2023-05-20', status: 'pending' },
  ];

  const highValueApplications: ApplicationItem[] = [
    { id: '3', name: 'Mike Johnson', amount: 50000, date: '2023-05-10', status: 'rejected' },
    { id: '8', name: 'Robert Garcia', amount: 45000, date: '2023-05-24', status: 'approved' },
    { id: '9', name: 'Jennifer Lee', amount: 42000, date: '2023-05-27', status: 'pending' },
    { id: '10', name: 'Thomas Martin', amount: 40000, date: '2023-05-28', status: 'approved' },
    { id: '4', name: 'Sarah Williams', amount: 35000, date: '2023-05-15', status: 'approved' },
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
    <DashboardLayout title="Admin Dashboard">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ApplicationList 
          title="Recent Applications" 
          applications={recentApplications} 
        />
        <ApplicationList 
          title="High Value Applications" 
          applications={highValueApplications} 
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

      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <h3 className="text-base font-medium text-amber-800 mb-2">Important Notification</h3>
        <p className="text-sm text-amber-700">
          System maintenance scheduled for this weekend. The loan management system will be unavailable from Saturday 10 PM to Sunday 2 AM.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
