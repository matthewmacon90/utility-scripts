const budget = (totalMonthyBills=2000, grossIncomeYear=30000, federalTax=22, stateIncomeTax=3, countyTax=2, benefits=300, retirement=5) => {
    const totalBudgetObject = {
        totalMonthyBills,
        grossIncomeYear,
        federalTax,
        stateIncomeTax,
        countyTax,
        benefits,
        retirement,
        totalIncome: 0,
    };
    const monthlyIncome = grossIncomeYear / 12;
    console.log(`Your monthly income is $${monthlyIncome.toFixed(2)}`);

    const incomeAfterRetirement = monthlyIncome - (monthlyIncome * retirement / 100);
    console.log(`Your monthly income after retirement of ${retirement}% is $${incomeAfterRetirement.toFixed(2)}`);
    console.log(`Your monthly income before taxes is $${incomeAfterRetirement.toFixed(2)}`);

    const taxedIncome = incomeAfterRetirement - (incomeAfterRetirement * (federalTax + stateIncomeTax + countyTax) / 100);
    console.log(`Federal Tax: ${federalTax}% , State Tax: ${stateIncomeTax}%, County Tax: ${countyTax}%, total tax: ${federalTax + stateIncomeTax + countyTax}%`);
    console.log(`Total monthly taxed amount: $${(incomeAfterRetirement * (federalTax + stateIncomeTax + countyTax) / 100).toFixed(2)}`);
    console.log(`Your monthly income after taxes is $${taxedIncome.toFixed(2)}`);

    const incomeAfterBenefits = taxedIncome - benefits;
    console.log(`Your monthly income after benefits is $${incomeAfterBenefits.toFixed(2)}`);

    const payEveryTwoWeeks = incomeAfterBenefits / 2;
    console.log(`You should be paid $${payEveryTwoWeeks.toFixed(2)} every two weeks`);
    
    const incomeAfterBills = incomeAfterBenefits - totalMonthyBills;
    console.log(`Your monthly income after bills is $${incomeAfterBills.toFixed(2)}`);
    totalBudgetObject.totalIncome = incomeAfterBills;

    console.log(`Your total income per month is: $${totalBudgetObject.totalIncome.toFixed(2)}`);

    return totalBudgetObject;
};

const convertHourlyPayToYearly = (hourlyPay=15, hoursPerWeek=40, weeksPerYear=52) => {
    const yearlyPay = hourlyPay * hoursPerWeek * weeksPerYear;
    console.log(`Your yearly gross pay is $${yearlyPay}`);
    return yearlyPay;
};

// budget(2897.71, 51840, 22, 2.75, 2.5, 180, 5);
// const yearlyPay = convertHourlyPayToYearly(38.47, 40, 52);
// budget(2897.71, yearlyPay, 22, 2.75, 2.5, 180, 5);