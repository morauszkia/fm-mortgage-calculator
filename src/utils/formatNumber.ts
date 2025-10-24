export function stripInput(input: string): number | null {
  const strippedValue = input.replace(/[^0-9\.]/g, "");
  return parseFloat(strippedValue) || null;
}

export function formatNumber(input: number): string {
  const formatter = new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return input ? formatter.format(input) : "";
}
