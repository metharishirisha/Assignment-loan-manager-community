
import * as z from 'zod';

export const loanApplicationSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  employmentStatus: z.enum(['employed', 'self-employed', 'unemployed', 'student', 'retired']),
  employmentAddress: z.string().min(5, { message: 'Employment address must be at least 5 characters.' }),
  reasonForLoan: z.string().min(10, { message: 'Please provide a detailed reason for your loan request.' }),
  loanAmount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Please enter a valid loan amount.',
  }),
  loanTenure: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Please enter a valid loan tenure.',
  }),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

export type LoanApplicationFormValues = z.infer<typeof loanApplicationSchema>;
