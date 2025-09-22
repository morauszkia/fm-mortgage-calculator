type MonthlyPaymentData =
  | number
  | { interestOnlyMonthly: number; repaymentPeriodMonthly: number };

export function calculateMortgage(
  amount: number,
  rate: number,
  years: number,
  type: "repayment" | "interest",
  interestOnlyYears: number = 0
) {
  const monthlyRate = rate / 100 / 12;
  let monthly: MonthlyPaymentData;
  let total: number;

  if (type === "repayment") {
    const months = years * 12;

    monthly =
      (amount * (monthlyRate * (1 + monthlyRate) ** months)) /
      ((1 + monthlyRate) ** months - 1);

    total = months * monthly;
  } else {
    const interestOnlyMonths = 12 * interestOnlyYears;
    const repaymentMonths = 12 * (years - interestOnlyYears);
    const interestOnlyMonthly = amount * monthlyRate;
    const repaymentPeriodMonthly =
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -repaymentMonths));
    monthly = {
      interestOnlyMonthly,
      repaymentPeriodMonthly,
    };
    total =
      interestOnlyMonths * interestOnlyMonthly +
      repaymentMonths * repaymentPeriodMonthly;
  }

  return {
    monthly,
    total,
  };
}
