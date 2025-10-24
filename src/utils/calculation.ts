import type { CompleteFormData, MonthlyPaymentData } from "../types/types";
import { stripInput } from "./formatNumber";

export function calculateMortgage(inputData: CompleteFormData) {
  const { amount, term, rate, type, ioterm } = inputData;
  const strippedAmount = stripInput(amount);

  const monthlyRate = +rate / 100 / 12;

  let monthly: MonthlyPaymentData = { repaymentPeriodMonthly: 0 };
  let total: number;

  if (type === "repayment") {
    const months = +term! * 12;

    monthly.repaymentPeriodMonthly =
      (strippedAmount! * (monthlyRate * (1 + monthlyRate) ** months)) /
      ((1 + monthlyRate) ** months - 1);

    total = months * monthly.repaymentPeriodMonthly;
  } else {
    const interestOnlyMonths = 12 * +ioterm!;
    const repaymentMonths = 12 * (+term - +ioterm!);
    monthly.interestOnlyMonthly = strippedAmount! * monthlyRate;
    monthly.repaymentPeriodMonthly =
      (strippedAmount! * monthlyRate) /
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
