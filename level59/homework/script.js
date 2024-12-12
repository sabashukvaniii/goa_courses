document.getElementById("mortgage-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get input values
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const annualInterestRate = parseFloat(document.getElementById("interest-rate").value);
    const loanTerm = parseFloat(document.getElementById("loan-term").value);
  
    // Calculate monthly interest rate
    const monthlyInterestRate = annualInterestRate / 100 / 12;
  
    // Calculate number of payments
    const totalPayments = loanTerm * 12;
  
    // Calculate monthly repayment
    const monthlyPayment = 
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
  
    // Calculate total repayment
    const totalRepayment = monthlyPayment * totalPayments;
  
    // Display results
    document.getElementById("monthly-payment").textContent = 
      `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById("total-repayment").textContent = 
      `Total Repayment: $${totalRepayment.toFixed(2)}`;
  });
  