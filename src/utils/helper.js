export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "MYR" }).format(
    value,
  );
