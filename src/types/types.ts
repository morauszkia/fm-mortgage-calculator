export type MonthlyPaymentData = {
  interestOnlyMonthly?: number;
  repaymentPeriodMonthly: number;
};

export type RepaymentData = {
  total: number | null;
  monthly: MonthlyPaymentData | null;
};

export type FormData = {
  amount?: string;
  rate?: string;
  term?: string;
  type?: "repayment" | "interest";
  ioterm?: string;
};

export type CompleteFormData = Required<FormData>;
