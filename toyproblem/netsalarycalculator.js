function calculateNetSalary(basicSalary, benefits) {
    const taxableAmount = basicSalary + benefits; //this is the total income before taxation and deduction.
  
    const taxRates = [
      //the rate is in percentage. for example 10% = 10/100 = 0.1
      { from: 0, to: 24000, rate: 0.1 },
      { from: 24001, to: 32333, rate: 0.25 }, // 25/100
      { from: 32334, to: 500000, rate: 0.3 },
      { from: 500001, to: 800000, rate: 0.325 },
      { from: 800001, to: Infinity, rate: 0.35 },
    ];
    let tax = 0; // Initialize variable for tax
    for (const taxRate of taxRates) {
      if (taxableAmount >= taxRate.from && taxableAmount <= taxRate.to) //calculates tax based on the range 
       {
        tax += (taxableAmount - taxRate.from) * taxRate.rate;
      } 
      else if (taxableAmount > taxRates.to) //calculates tax for income above range.
       {
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
  
    let nhifdeduduction=0; //initialize nhif deduction
  
    //calculates nhif deduction based on income
    for(const nhifRate of nhifRates){
      if(taxableAmount>=nhifRate.from && taxableAmount <= nhifRate.to){
        nhifdeduduction= taxableAmount-(taxableAmount - nhifRate.deduction)
      }
    }
  
    let nssfDeduction=0;
    const nssfRate=0.06 //rate is 6% (6/100) = 0.06
  nssfDeduction=taxableAmount*nssfRate //calculates nssf deductions
  
  const netSalary = taxableAmount-(tax+nhifdeduduction+nssfDeduction) //calculate net salary by subtracting the tax and all the other deductions
  
  const salary={ // object that stores all the salary details
    taxableAmount,
    tax,
    nhifdeduduction,
    nssfDeduction,
    netSalary,
  };
  
  return salary;
  
  }
  
  const basicSalary=50000;
  const benefits=20000;
  const result= calculateNetSalary(basicSalary, benefits);
  console.log(result);
  /**{taxableAmount: 70000, 
   * tax: 11299.8, 
   * nhifdeduduction: 1400, 
   * nssfDeduction: 4200, 
   * netSalary: 53100.2 **/
  