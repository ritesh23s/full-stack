// OR (||) Logical Operator
// = The OR (||) logical operator returns the value that is true (truthy) among the two. If the first value is false, it checks and returns the second one.

// = its return "true" when value at least one value is true, if both value is false then reurn "false".

//syntax = exp1 || exp2

// Logical OR chart
// Value1 | Value2 | Ans(Output)
// T      | T      | T  
// T      | F      | T
// F      | T      | T
// F      | F      | F

// Example = 
// 1).
// true || true
// Always return = true
// true || false
// Always return = true
// false || true
// Always return = true
// false || false
// Always return = false

// 2).
// 2==2 || 3==3
// Output true
// 2>1 || 2>3
// Output true
// 4<3 || 3<4
// Output true
// 2>3 || 3>4
// Output false

//Question 3).Detect pass or failed of students
let marks = 30;
if (marks === 33 || marks > 33){
    console.log("PASS");
}else{
    console.log("Failed, Try next time!.");
}

//Question 4) Let’s say you’re building an e-commerce website where you want to give discounts to customers based on their membership level or purchase history.

// Conditions:
// Condition 1: If a customer is a premium member, they get a discount.

// Condition 2: If a customer has purchased more than $500 on the site, they also get a discount.

let premiumMembership = false;
let minPurchaseAmount = 500;

let customerPurchaseAmount = 550;

if(customerPurchaseAmount >= minPurchaseAmount || premiumMembership){
    console.log("Congratulation! You get discount.");
}else{
    console.log("sorry! no discount available.");
}

// Question 5). Movie Ticket Discount
// If a person is under 12 years old OR over 60 years old, they get a discount on their movie ticket.
// Write a program that checks the age and prints whether the person gets a discount or not.

let purchaseTicket = true;
let personAge = 11;

if(purchaseTicket === true && (personAge < 12 || personAge > 60)){
    console.log("You get discount");
}else{
    console.log("Not Available!");
}

// Question 6). Event Entry
// A person is allowed to enter an event if they have a VIP pass OR if they are a guest of the organizer.
// Write a program that checks these two conditions and prints whether the person can enter the event.

let personVipPass = true;
let personOrganizerGuest = false;

if (personVipPass || personOrganizerGuest){
    console.log("Pleae Enter the event Your Welcome!");
} else{
    console.log("You are not Aplicable!");
}

// Question 7). Free Shipping Eligibility
// Customers get free shipping if their order total is over ₹1000 OR they have a free shipping coupon.
// Write a program to check if the customer is eligible for free shipping.

let minOrderAmountForFreeShipping = 1000;

let customerOrderAmount = 1001;
let customerFreeCoupon = false

if (customerOrderAmount > minOrderAmountForFreeShipping || customerFreeCoupon){
    console.log("Free Delivery");
}else{
    console.log("Delivery Charge 60 rupees");
}


// Question 8). Check if a character is a vowel (a, e, i, o, u).
// Write a program to input a character and check if it is a vowel using OR operator.

let enterCharacter = "o"; 

enterCharacter = enterCharacter.toLowerCase()

if (
    enterCharacter === "a" || enterCharacter === "e" || enterCharacter === "i" || enterCharacter === "o" || enterCharacter === "u"
) {
    console.log("Enter character is a vowel");
} else {
    console.log("Is not a vowel");
}
