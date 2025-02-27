const calculateVat = (num) => {
  if (Number.isInteger(num) === false || num <= 0) return "Invalid";

  return (vat = (num * 7.5) / 100);
};

console.log(calculateVat(1500));
