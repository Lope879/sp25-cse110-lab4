1. Line 12 will print the number 3 in the terminal because the i variable was declared using var, which means that its scope extends past the for-loop. So when the variable i is printed, its current value, 3 (the index past the lists's length), is printed. 
2. Line 13 will print the number 150 in the terminal. This happens because the variable 'discountedPrice' still exists past the for-loop and contains the result of multiplying the last item in the list 'prices' (300) times half.
3. Line 14 will print the same value as Line 13 did, being 150. This is because the variable 'final price', being declared a var variable, also reaches the scope of Line 14 and contains the same value as 'discountedPrice' multiplied and divided by a 100, which does not change the value.
4. This function returns a new list of discounted prices, [50, 100, 150]. This is the result of applying the discount (50% off) on every price of the input list 'prices' ([100, 200, 300]) and pushing every new price into the new list 'discounted'. 
5. Line 12 throws an error because the let variable 'i' remains stuck in the block of the for-loop and cannot reach the scope of Line 12. So when Line 12 tries to access this variable, the error is due to an undefined variable.
6. Line 13 throws an error because the let variable 'discountedPrice' remains stuck in the block of the for-loop and cannot reach the scope of Line 13. So when Line 13 tries to access this variable, the error is due to an undefined variable.
7. Line 14 will print the value 150 in the terminal. This is because finalPrice holds the value of the last item in 'prices' (300) discounted by half, and since the variable was declared inside the same code block as Line 14, the variable is defined and can be used to extract its value.
8. This function returns a new array of discounted prices, [50, 100, 150]. This is the result of applying the discount (50% off) on every price of the input array 'prices' ([100, 200, 300]) and pushing every new price into the new array 'discounted'.
9. Line 11 throws an error because the let variable 'i' remains stuck in the block of the for-loop and cannot reach the scope of Line 11. So when Line 11 tries to access this variable, the error is due to an undefined variable.
10. Line 12 will print the value 3, which represents the length of the array 'prices'. Line 12 is able to access the variable length becaue the variable was declared in the same block as Line 12, and thus they share the same scope.
11. This function returns a new array of discounted prices, [50, 100, 150]. The fact that the array variable 'discounted' was declared as a const only prevents the variable from being reassigned, but it does not prevent it from mutation. Thus modifying the elements of the array is permitted and the code runs and returns fine.
12. A) student.name  
    B) student["Grad Year"]  
    C) student.greeting()   
    D) student["Favorite Teacher"]["name"]  
    E) student.courseLoad[0]
13. A) '32' because the number 2 is turned into a string
     to append (+) to '3'.  
    B) 1 because the the string '3' is turned into a number 
    in order to be subtracted by the number 2.  

    C) 3 because null is converted to a number 0 and added to 3 increases nothing.
    D) '3null' because null is converted to a string and appended to string '3'.  
    E) 4 because true is converted into a 1 and added to number 3 results in 4.  
    F) 0 because both false and null are converted to 0 and 0+0=0.  
    G) '3undefined' because undefined is turned into a string and appended to string '3'.

    H) NaN because undefined is turned into NaN which cannot be used for calculations such as subtraction.   
14. A) true because '2' is converted to 2 and 2>1 is true.  
    B) false because '2' is compared first to '1' in '12', and the '2' is greater lexicographically.

    C) true because '2' is turned into a number and 2 == 2 is true.   
    D) false because === does not convert data types and strings are not equal to numbers.

    E) false because true converts to the number 1 which does not equal 2.   
    F) true because Boolean(2) evaluates to true since values that are intuitively empty evaluate to false, and 2 is not empty.

15. The equality operator (==) converts operands of different types to numbers while a strict equality operator (===) checks the equality without type conversion. Thus, == could not be used to differentiate between the number 0 and the boolean false since false would be converted to the number 0, but using === helps to differentiate first checking if both data types are the same.
16. Skipped.
17. The function would return a new array containing the elements [2,4,6]. First, the function modifyArray is called which inputs an array of elements, [1,2,3], and a callback function, doSomething. Then, a new array is created and using a for-loop, every element starting from index 0 is copied and modified using the callback function. This callback function multiplies the elements times two and stores them in every iteration into the new array (1 -> 2, 2 -> 4, 3 -> 6). Then the new array is returned.
18. Skipped.
19. The output of the code in order is 1 4 3 2.
