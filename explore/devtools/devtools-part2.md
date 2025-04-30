1. The bug is caused by the fact that num1 and num2 are being stored as strings and not being converted to numbers. So when the variables interact using +, they are appending instead of adding the numerical values into each other.
2. I would fix the code by modifying line 11 in explore.js. I would change it to
> let result = Number(num1) + Number(num2)   
   
   This ensures that num1 and num2 are adding their values instead of being appended and so then the variable result contains the correct value.
