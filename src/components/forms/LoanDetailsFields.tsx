
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Control } from 'react-hook-form';
import { LoanApplicationFormValues } from '@/schemas/loanApplicationSchema';

interface LoanDetailsFieldsProps {
  control: Control<LoanApplicationFormValues>;
}

const LoanDetailsFields: React.FC<LoanDetailsFieldsProps> = ({ control }) => {
  return (
    <>
      <FormField
        control={control}
        name="reasonForLoan"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Reason for Loan</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Please provide details about why you need this loan" 
                className="min-h-[100px]" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="loanAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Loan Amount ($)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter loan amount" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="loanTenure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Loan Tenure (months)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter loan tenure" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default LoanDetailsFields;
