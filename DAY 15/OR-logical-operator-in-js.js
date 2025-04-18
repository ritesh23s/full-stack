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

let customerPurchaseAmount = 600;

if(customerPurchaseAmount >= minPurchaseAmount || premiumMembership){
    console.log("Congratulation! You get discount.");
}else{
    console.log("sorry! no discount available.");
}

