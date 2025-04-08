// Operator-Precendence
// = This is the general "order" of solving an expression example- Like BODMAS Theory

// There is javascript order (Theory for solving expressions)
// (Heigher Priority)step - 1.  () = (expression in bracats) 
// (Second Priority)step - 2.  ** = (power Operator)
// (Third Priority)step - 3.  *,/,% = (multiplication, division , modulo (all have equal priorety) Than we have to see in the expression and solve "left to right")
// (Last Priority)step - 4.  +,- (addition, Substraction (there both have equal priority) so we have to see in the expression "left to right")

// ()
// **
// *,/,%
// +,-

// Example with an expression = 
// (5+2) / 7 + 2**3 - 3*4 + 5%2
// Solution = 
// 7 / 7 + 2**3 - 3*4 + 5%2 {() completed}
// 7 / 7 + 8 - 3*4 + 5%2 {**(Power Operator) Completed (if we have the multiple power operator in a single expression then we have to see "right to left" in operation)}
// 7 / 7 + 8 - 3*4 + 5%2 {Start from here (*,/,%) all have equal priority so, we have to see left to right in the expression}
// 7 / 7 + 8 - 3*4 + 5%2 {Here firstly come /}
// 1 + 8 - 3*4 + 5%2 {/ Completed}
// 1 + 8 - 12 + 5%2 {* Completed}
// 1 + 8 - 12 + 1 { % (Modulo) Completed}
// 1 + 8 - 12 + 1 {Start from here (+,-) both have equal priority so, also we have to see left to right in the expression}
// 1 + 8 - 12 + 1 {Here firstly come + }
// 9 - 12 + 1 {+ Completed}
// -3 + 1 (- Completed)
// -2 {Final Answer}
