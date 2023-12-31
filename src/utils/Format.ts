export function fNumber(num: number) {
  return new Intl.NumberFormat("default", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(num);
}

export function fPrice(num: number) {
  return num.toLocaleString(
    // leave undefined to use the visitor's browser locale or a string like 'en-US' to override it.
    undefined,
    { minimumFractionDigits: 0 }
  );
}
