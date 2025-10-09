import type { CompleteFormData, MonthlyPaymentData } from "../types/types";

export function calculateMortgage(inputData: CompleteFormData) {
  const { amount, rate, term, type, ioterm } = inputData;

  const monthlyRate = +rate / 100 / 12;
  let monthly: MonthlyPaymentData = { repaymentPeriodMonthly: 0 };
  let total: number;

  if (type === "repayment") {
    const months = +term! * 12;

    monthly.repaymentPeriodMonthly =
      (+amount * (monthlyRate * (1 + monthlyRate) ** months)) /
      ((1 + monthlyRate) ** months - 1);

    total = months * monthly.repaymentPeriodMonthly;
  } else {
    const interestOnlyMonths = 12 * +ioterm!;
    const repaymentMonths = 12 * (+term - ioterm!);
    monthly.interestOnlyMonthly = +amount * monthlyRate;
    monthly.repaymentPeriodMonthly =
      (+amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -repaymentMonths));
    total =
      interestOnlyMonths * monthly.interestOnlyMonthly +
      repaymentMonths * monthly.repaymentPeriodMonthly;
  }

  return {
    monthly,
    total,
  };
}
