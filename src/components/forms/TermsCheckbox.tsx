
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Control } from 'react-hook-form';
import { LoanApplicationFormValues } from '@/schemas/loanApplicationSchema';

interface TermsCheckboxProps {
  control: Control<LoanApplicationFormValues>;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="termsAccepted"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
          <FormControl>
            <Checkbox 
              checked={field.value} 
              onCheckedChange={field.onChange}
              id="termsAccepted" 
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel htmlFor="termsAccepted">
              I have read and accept the terms and conditions
            </FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default TermsCheckbox;
