/*function signature/sample */
function calculateTax(income, expenses) {
    // You have to write your code 
    
    if(typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || income < expenses){
        return 'Invalid Input';
    }

    const totalIncome = income - expenses;
    const tax = totalIncome * 20 / 100;

    return tax;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
