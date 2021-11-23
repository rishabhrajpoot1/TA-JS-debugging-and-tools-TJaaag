// Get Full Name
function fullName(firstName, lastName){
return firstName + lastName;
}

let result = fullName("Rishabh", "Rajput");

let expected = "Rishabh Rajput"

if(result !== expected){
throw new Error(`${result} is not equal to ${expected}`)
}

// Calculate Total Amount

function totalAmount(amount, taxRate){
return amount * taxRate;
}

let result = totalAmount(1000,20);

let expected = 2000;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
    }