function calculateNetSalary(basicSalary, benefits) {
  const taxableAmount = basicSalary + benefits;

  const taxRates = [
    { from: 0, to: 24000, rate: 0.1 },
    { from: 24001, to: 32333, rate: 0.25 },
    { from: 32334, to: 500000, rate: 0.3 },
    { from: 500001, to: 800000, rate: 0.325 },
    { from: 800001, to: Infinity, rate: 0.35 },
  ];

  let tax = 0;

  for (const taxRate of taxRates) {
    if (taxableAmount >= taxRate.from && taxableAmount <= taxRate.to) {
      tax += (taxableAmount - taxRate.from) * taxRate.rate;
      break; // Exit the loop once the tax is calculated
    } else if (taxableAmount > taxRate.to) {
      tax += (taxRate.to - taxRate.from) * taxRate.rate;
    }
  }

  const nhifRates = [
    { from: 0, to: 5999, deduction: 150 },
    { from: 6000, to: 7999, deduction: 300 },
    { from: 8000, to: 11999, deduction: 400 },
    { from: 12000, to: 14999, deduction: 500 },
    { from: 15000, to: 19999, deduction: 600 },
    { from: 20000, to: 24999, deduction: 750 },
    { from: 25000, to: 29999, deduction: 850 },
    { from: 30000, to: 34999, deduction: 900 },
    { from: 35000, to: 39999, deduction: 950 },
    { from: 40000, to: 44999, deduction: 1000 },
    { from: 45000, to: 49999, deduction: 1100 },
    { from: 50000, to: 59999, deduction: 1200 },
    { from: 60000, to: 69999, deduction: 1300 },
    { from: 70000, to: 79999, deduction: 1400 },
    { from: 80000, to: 89999, deduction: 1500 },
    { from: 90000, to: 99999, deduction: 1600 },
    { from: 100000, to: Infinity, deduction: 1700 },
  ];

  let nhifdeduction = 0;

  for (const nhifRate of nhifRates) {
    if (taxableAmount >= nhifRate.from && taxableAmount <= nhifRate.to) {
      nhifdeduction = nhifRate.deduction;
      break; // Exit the loop once the deduction is found
    }
  }

  const nssfDeduction = taxableAmount * 0.06;

  const netSalary = taxableAmount - (tax + nhifdeduction + nssfDeduction);

  const salary = {
    taxableAmount,
    tax,
    nhifdeduction,
    nssfDeduction,
    netSalary,
  };

  return salary;
}

const basicSalary = 50000;
const benefits = 20000;
const result = calculateNetSalary(basicSalary, benefits);
console.log(result);