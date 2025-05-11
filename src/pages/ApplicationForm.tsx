
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

// Import schema and components
import { loanApplicationSchema, LoanApplicationFormValues } from '@/schemas/loanApplicationSchema';
import PersonalInfoFields from '@/components/forms/PersonalInfoFields';
import EmploymentFields from '@/components/forms/EmploymentFields';
import LoanDetailsFields from '@/components/forms/LoanDetailsFields';
import TermsCheckbox from '@/components/forms/TermsCheckbox';

const ApplicationForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<LoanApplicationFormValues>({
    resolver: zodResolver(loanApplicationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      employmentStatus: 'employed',
      employmentAddress: '',
      reasonForLoan: '',
      loanAmount: '',
      loanTenure: '',
      termsAccepted: false,
    },
  });

  const onSubmit = (data: LoanApplicationFormValues) => {
    console.log(data);
    
    toast({
      title: "Application Submitted",
      description: "Your loan application has been submitted successfully!",
    });
    
    setTimeout(() => {
      navigate('/my-loans');
    }, 1500);
  };

  return (
    <DashboardLayout title="Loan Application Form">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Apply for a Loan</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <PersonalInfoFields control={form.control} />
              <EmploymentFields control={form.control} />
              <LoanDetailsFields control={form.control} />
              <TermsCheckbox control={form.control} />
              
              <div className="pt-4">
                <Button type="submit" className="bg-loan-green hover:bg-opacity-90">
                  Submit Application
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ApplicationForm;
