1. values added:  20
2. final result:  20
3. In this example, var does not seem to cause an issue with running the function. However, in general var should be avoided as the variables could leak into other blocks of code in bigger functions, which in turn could cause confusion and errors.
4. values added:  20
5. This throws an error because variable 'result' is no longer defined. Declaring 'result' using let means that its scope no longer reaches past the if statement, where line 13 runs.