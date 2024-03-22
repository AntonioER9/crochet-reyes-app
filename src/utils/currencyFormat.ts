export const currencyFormat = (value: number) => {

  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);

};