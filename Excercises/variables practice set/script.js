const name = 'Monis';
document.querySelector('#nameDisplay').textContent = `Hello, ${name}! Welcome to the Variables Practice Excercise.`;

// calculating cost of myntra bag in variables
const bagPrice = 799;
const discountPercentage = 20;
const discountAmount = (discountPercentage / 100) * bagPrice;
const finalPrice = bagPrice - discountAmount;
console.log(`The final price of the bag after a ${discountPercentage}% discount is: ₹${finalPrice}`);