//  JavaScript While Loops & Patterns - Practice Assignment
// Instructions: Complete all sections based on today's lesson. Test your code and write outputs where ever required.

// Section 1: Basic While Loop (10 Questions)
// Q1. What will be the output?

// let num = 5

// while (num > 0) {
//     console.log('hello world', num)
//     num--
// }
// console.log('rest of the code')
// Your Prediction:

// Q2. Create a while loop that prints numbers from 1 to 5.

// Your Code:

// // Write your code here
// Expected Output:

// 1
// 2
// 3
// 4
// 5
// Q3. What will be the output?

// let i = 1

// while (i < 5) {
//     console.log(i)
//     i++
// }
// console.log('rest of the code')
// Your Prediction:

// Q4. Create a while loop that prints "Omer" 10 times.

// Your Code:

// // Write your code here
// Q5. What will be the final value of i?

// let i = 0

// while (i < 10) {
//     console.log('omer')
//     i = i + 1
// }
// console.log(i)
// Your Prediction:

// Final value of i: _______________
// How many times "omer" is printed: _______________
// Q6. Create a while loop that prints numbers from 10 to 1 (countdown).

// Your Code:

// // Write your code here
// Expected Output:

// 10
// 9
// 8
// ...
// 2
// 1
// Q7. What happens with this code?

// let i = 0

// while (i < 5) {
//     console.log(i)
// }
// Your Prediction:

// Explanation: Why does this happen?

// Q8. Create a while loop that prints even numbers from 2 to 10.

// Your Code:

// // Write your code here
// Expected Output:

// 2
// 4
// 6
// 8
// 10
// Q9. What will be the output?

// let i = 0

// while (i < 5) {
//     console.log(i)
//     i++
// }
// console.log('some other code')

// while (i < 10) {
//     console.log(i)
//     i++
// }
// console.log('rest of the code')
// Your Prediction:

// Q10. Create a while loop that prints odd numbers from 1 to 9.

// Your Code:

// // Write your code here
// Expected Output:

// 1
// 3
// 5
// 7
// 9
// Section 2: While Loop with Post-Increment (i++) (8 Questions)
// Q11. What will be the output?

// let i = 0

// while (i < 10) {
//     console.log(i++)
// }
// Your Prediction:

// Explanation: What values are printed and why?

// Q12. What will be the output?

// let i = 0

// while (i < 10) {
//     console.log(i++)
// }
// console.log('some other code')

// while (i < 5) {
//     console.log(i++)
// }
// console.log('rest of the code')
// Your Prediction:

// Explanation: Why doesn't the second loop print anything?

// Q13. Create a while loop using i++ that prints numbers from 5 to 10.

// Your Code:

// // Write your code here
// Q14. What's the difference between these two?

// // Version 1
// let i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }

// // Version 2
// let i = 0
// while (i < 5) {
//     console.log(i++)
// }
// Your Answer:

// Q15. What will be the output?

// let num = 1

// while (num <= 3) {
//     console.log(num++)
//     console.log(num)
// }
// Your Prediction:

// Q16. Create a loop that prints: 10, 9, 8, 7, 6, 5 using post-decrement (i--).

// Your Code:

// // Write your code here
// Q17. What will be the output?

// let i = 0

// while (i < 5) {
//     console.log('Count:', i++)
// }
// console.log('Final i:', i)
// Your Prediction:

// Q18. Create a loop that prints every 2nd number from 0 to 10 using i++.

// Your Code:

// // Write your code here
// Expected Output:

// 0
// 2
// 4
// 6
// 8
// 10
// Section 3: While Loop with Pre-Increment (++i) (8 Questions)
// Q19. What will be the output?

// let i = 0

// while (i < 10) {
//     console.log(++i)
// }
// Your Prediction:

// Explanation: What values are printed and why?

// Q20. What will be the output?

// let i = 0

// while (i < 10) {
//     console.log(++i)
// }
// console.log('some other code')

// while (i < 5) {
//     console.log(++i)
// }
// console.log('rest of the code')
// Your Prediction:

// Q21. What's the difference in output between these two?

// // Version 1: Post-increment
// let i = 0
// while (i < 5) {
//     console.log(i++)
// }

// // Version 2: Pre-increment
// let i = 0
// while (i < 5) {
//     console.log(++i)
// }
// Your Answer:

// Q22. Create a while loop using ++i that prints numbers from 1 to 5.

// Your Code:

// // Write your code here
// Q23. What will be the output?

// let num = 0

// while (num < 3) {
//     console.log(++num)
//     console.log(num)
// }
// Your Prediction:

// Q24. Fill in the table:

// Code First Print Second Print    Third Print
// i = 0; while(i < 3) console.log(i++) _____   _____   _____
// i = 0; while(i < 3) console.log(++i) _____   _____   _____
// i = 1; while(i < 4) console.log(i++) _____   _____   _____
// i = 1; while(i < 4) console.log(++i) _____   _____   _____
// Q25. Create a countdown from 5 to 1 using pre-decrement (--i).

// Your Code:

// // Write your code here
// Q26. What will be the output?

// let i = 0

// while (++i < 5) {
//     console.log(i)
// }
// console.log('Final:', i)
// Your Prediction:

// Section 4: String Building with Loops (10 Questions)
// Q27. What will be the output?

// let str = ''

// str = str + '*'
// console.log(str)

// str = str + '*'
// console.log(str)

// str = str + '*'
// console.log(str)
// Your Prediction:

// Q28. Create the same output as Q27 using a while loop.

// Your Code:

// // Write your code here
// Q29. What will be the output?

// let str = ''
// let i = 0

// while (i < 3) {
//     str = str + '* '
//     console.log(str)
//     i++
// }
// console.log('rest of the code')
// Your Prediction:

// Q30. Create a loop that prints:

// #
// ##
// ###
// ####
// #####
// Your Code:

// // Write your code here
// Q31. What will be the output?

// let str = ''
// let i = 0

// while (i < 4) {
//     str = str + i + ' '
//     console.log(str)
//     i++
// }
// Your Prediction:

// Q32. Create a loop that prints:

// A
// A B
// A B C
// A B C D
// Your Code:

// // Write your code here
// Q33. What will be the output?

// let str = ''
// let i = 1

// while (i <= 5) {
//     str = str + i + ' '
//     console.log(str)
//     i++
// }
// Your Prediction:

// Q34. Create a loop that builds and prints the word "HELLO" one letter at a time:

// H
// HE
// HEL
// HELL
// HELLO
// Your Code:

// // Write your code here
// Q35. What will be the output?

// let str = '0 '
// let i = 1

// while (i < 5) {
//     str = str + i + ' '
//     console.log(str)
//     i++
// }
// Your Prediction:

// Q36. Create a loop that prints even numbers in this pattern:

// 2
// 2 4
// 2 4 6
// 2 4 6 8
// 2 4 6 8 10
// Your Code:

// // Write your code here
// Section 5: Pattern Problems - Part 1 (10 Questions)
// Q37. What will be the output?

// let i = 1
// let n = 6
// let str = ''

// while (i < n) {
//     str = str + i + ' '
//     console.log(str)
//     i++
// }
// Your Prediction:

// Q38. Modify Q37 to print numbers from 1 to 10 in the same pattern.

// Your Code:

// // Write your code here
// Q39. What will be the output?

// let i = 0
// let max = 4
// let str = 'a '

// while (i < max) {
//     console.log(str)
//     str = str + 'a a '
//     i++
// }
// Your Prediction:

// Q40. Create this pattern:

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// Your Code:

// // Write your code here
// Q41. Create this pattern:

// *
// * *
// * * *
// * * * *
// * * * * *
// Your Code:

// // Write your code here
// Q42. Create this pattern:

// @
// @ @
// @ @ @
// @ @ @ @
// Your Code:

// // Write your code here
// Q43. Create this pattern (numbers from 5 to 1):

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1
// Your Code:

// // Write your code here
// Q44. Create this pattern:

// A
// A B
// A B C
// A B C D
// A B C D E
// Hint: You can use String.fromCharCode(65) for 'A', 66 for 'B', etc.

// Your Code:

// // Write your code here
// Q45. Create this pattern (odd numbers):

// 1
// 1 3
// 1 3 5
// 1 3 5 7
// 1 3 5 7 9
// Your Code:

// // Write your code here
// Q46. Create this pattern (even numbers):

// 2
// 2 4
// 2 4 6
// 2 4 6 8
// 2 4 6 8 10
// Your Code:

// // Write your code here
// Section 6: User Input with readline-sync (8 Questions)
// Q47. What does this code do?

// import readlineSync from 'readline-sync'

// let name = readlineSync.question('Enter your name: ')
// let age = readlineSync.questionInt('Enter your age: ')

// console.log(`Hello ${name}, you are ${age} years old`)
// Your Answer:

// Q48. Create a program that asks for a name and prints "Welcome [name]!" 5 times using a loop.

// Your Code:

// // Write your code here
// Q49. What will happen when you run this?

// import readlineSync from 'readline-sync'

// let str = ''
// let i = 0
// let max = readlineSync.questionInt('Enter a number: ')

// while (i < max) {
//     str = str + '* '
//     console.log(str)
//     i++
// }
// Your Answer:

// Q50. Create a program that:

// Asks user for a number
// Prints numbers from 1 to that number
// Your Code:

// // Write your code here
// Q51. Create a program that:

// Asks user for their name
// Asks how many times to print it
// Prints the name that many times
// Your Code:

// // Write your code here
// Q52. What's the difference between question() and questionInt()?

// Your Answer:

// Q53. Create a multiplication table program:

// Ask user for a number
// Print multiplication table for that number (1 to 10)
// Example: If user enters 5:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50
// Your Code:

// // Write your code here
// Q54. Create a program that:

// Asks user for rows (number)
// Prints star pattern with that many rows
// Example: If user enters 4:
// *
// * *
// * * *
// * * * *
// Your Code:

// // Write your code here
// Section 7: Sum and Count with Loops (8 Questions)
// Q55. Create a program that calculates sum of numbers from 1 to 10.

// Your Code:

// // Write your code here
// Expected Output:

// Sum: 55
// Q56. What will be the output?

// let sum = 0
// let i = 1

// while (i <= 5) {
//     sum = sum + i
//     console.log('i:', i, 'sum:', sum)
//     i++
// }
// console.log('Total:', sum)
// Your Prediction:

// Q57. Create a program that calculates the sum of even numbers from 2 to 20.

// Your Code:

// // Write your code here
// Q58. Create a program that counts how many numbers from 1 to 100 are divisible by 7.

// Your Code:

// // Write your code here
// Q59. Create a factorial calculator:

// Ask user for a number
// Calculate factorial (e.g., 5! = 5 × 4 × 3 × 2 × 1 = 120)
// Your Code:

// // Write your code here
// Q60. Create a program that calculates sum of odd numbers from 1 to 50.

// Your Code:

// // Write your code here
// Q61. Create a program that:

// Asks user for a number
// Counts how many digits it has
// Example: 12345 has 5 digits
// Your Code:

// // Write your code here
// Q62. Create a program that calculates the sum of all multiples of 3 between 1 and 30.

// Your Code:

// // Write your code here

// //1
// let num = 5


// while (num > 0) {
//     console.log('hello world', num)
//     num--
// }
// console.log('rest of the code')
// //hello world 5
// //hello world 4
// //hello world 3
// //hello world 2
// //hello world 1
// //rest of the code


// //2
// while (num<5) {
//     num++
//     console.log(num);
// }


// //3
// let i = 1


// while (i < 5) {
//     console.log(i)
//     i++
// }
// console.log('rest of the code')
// //1
// //2
// //3
// //4
// //rest of the code


// //4
// i=0
// while (i<10) {
//     console.log("Omer");
//     i++
// }


// //5
// i = 0


// while (i < 10) {
//     console.log('omer')//10times
//     i = i + 1
// }
// console.log(i)//10


// //6
// while (i>0) {
//     console.log(i);
//     i--
// }


// //7
// //let i = 0


// // while (i < 5) {
// //     console.log(i)
// // }
// //This is an infinite while loop as the variable value is constant it is neither incremented or decremented causing an endless loop


// //8
// i = 2
// while(i<=10){
//     console.log(i);
//     i +=2
// }


// //9
// i = 0


// while (i < 5) {
//     console.log(i)
//     i++
// }
// console.log('some other code')


// while (i < 10) {
//     console.log(i)
//     i++
// }
// console.log('rest of the code')
// //0 to 4 \n some other code \n 5 to 9 \n rest of the code


// //10
// i=1
// while (i<10) {
//     console.log(i);
//     i +=2
// }


// //11
// i = 0


// while (i < 10) {
//     console.log(i++)
// }
// //0 to 9
// //post increment adds 1 atthe next operation so it is irectly printing the value of i


// //12
// i = 0


// while (i < 10) {
//     console.log(i++)
// }
// console.log('some other code')


// while (i < 5) {
//     console.log(i++)
// }
// console.log('rest of the code')
// //0 to 9 \n some other code \n rest of the code
// //the second loop does not print as it is a false condition


// //13
// i=5


// while (i<=10) {
//     console.log(i);
//     i++
// }


// //14
// // Version 1
// i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }
// //This is a two step process of printing the output and then incrementing it in another step/statement
// // Version 2
// i = 0
// while (i < 5) {
//     console.log(i++)
// }
// //In this both are done in the same step


// //15
// num = 1


// while (num <= 3) {
//     console.log(num++)
//     console.log(num)
// }
// //1
// //2
// //2
// //3
// //3
// //4


// //16
// i=10


// while (i>=5) {
//     console.log(i--);
// }


// //17
// i = 0


// while (i < 5) {
//     console.log('Count:', i++)
// }
// console.log('Final i:', i)
// //0 1 2 3 4
// //5


// //18
// i=0
// while (i<=10) {
//     console.log(i++);
//     i++
// }


// //19
// i = 0


// while (i < 10) {
//     console.log(++i)
// }//1 to 10


// //20
// i = 0


// while (i < 10) {
//     console.log(++i)
// }
// console.log('some other code')


// while (i < 5) {
//     console.log(++i)
// }
// console.log('rest of the code')
// //1 to 10 \n some other code \n rest of the code


// //21
// // Version 1: Post-increment
// i = 0
// while (i < 5) {
//     console.log(i++)
// }//0 to 4 and the final value of i is 5... it is increment at the next operation


// // Version 2: Pre-increment
// i = 0
// while (i < 5) {
//     console.log(++i)
// }//1 to 5 and final value of i is 5 it is inremented then and there and printed


// //22
// i=0
// while (i<5) {
//     console.log(++i);
// }


// //23
// num = 0


// while (num < 3) {
//     console.log(++num)
//     console.log(num)
// }
// //112233


// //24
// // Code                                 First Print     Second Print    Third Print
// // i = 0; while(i < 3) console.log(i++)     0               1               2
// // i = 0; while(i < 3) console.log(++i)     1               2               3
// // i = 1; while(i < 4) console.log(i++)     1               2               3
// // i = 1; while(i < 4) console.log(++i)     2               3               4


// //25
// i=5
// while (i>0) {
//     console.log(i--);
// }


// //26
// i = 0


// while (++i < 5) {
//     console.log(i)
// }
// console.log('Final:', i)
// //1234
// //5


// //27
// let str = ''


// str = str + '*'
// console.log(str)


// str = str + '*'
// console.log(str)


// str = str + '*'
// console.log(str)
// // *
// // **
// // ***


// //28
// i=0
// str = ''
// while (i<3) {
//     str = str + '*'
//     console.log(str);
//     i++
// }


// //30
// i=0
// str = ''
// while (i<5) {
//     str = str + '#'
//     console.log(str);
//     i++
// }


// //31
// str = ''
// i = 0


// while (i < 4) {
//     str = str + i + ' '
//     console.log(str)
//     i++
// }
// // 0
// // 0 1
// // 0 1 2
// // 0 1 2 3


// //32
// let arr = ['A ', 'B ', 'C ', 'D ']
// let j=0
// str = ''
// while (j<4) {
//     str = str +arr[j]
//     console.log(str);
//     j++
// }


// //33
// str = ''
// i = 1


// while (i <= 5) {
//     str = str + i + ' '
//     console.log(str)
//     i++
// }
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5


// //34
// arr = ['H ', 'E ', 'L ', 'L ', 'O ']
// j=0
// str = ''
// while (j<5) {
//     str = str +arr[j]
//     console.log(str);
//     j++
// }


// //35
// str = '0 '
// i = 1


// while (i < 5) {
//     str = str + i + ' '
//     console.log(str)
//     i++
// }
// // 0 1
// // 0 1 2
// // 0 1 2 3
// // 0 1 2 3 4


// //36
// i=2
// str = ''
// while (i<=10) {
//     str = str + i+ ' '
//     console.log(str);
//     i +=2
// }
// // 2
// // 2 4
// // 2 4 6
// // 2 4 6 8
// // 2 4 6 8 10


// //37
// i = 1
// let n = 6
// str = ''


// while (i < n) {
//     str = str + i + ' '
//     console.log(str)
//     i++
// }
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5


// //38
// i = 1
// let x=0
// j = 1
// str = ''


// while (i <= 10) {
//     str = str + i +' '
//     i++
//     x++
//     if (x === j) {
//         console.log(str);
//         str = ''
//         x=0
//         j++
//     }
// }


// //39
// i = 0
// let max = 4
// str = 'a '


// while (i < max) {
//     console.log(str)
//     str = str + 'a a '
//     i++
// }
// //a
// //a a a
// //a a a a a
// //a a a a a a a


// //40
// i = 1
// n = 6
// str = ''


// while (i <= n) {
//     str = str + i + ' '
//     console.log(str)
//     i++
// }


// //41
// i = 1
// n = 6
// str = ''


// while (i < n) {
//     str = str + '* '
//     console.log(str)
//     i++
// }


// //42
// i = 1
// n = 5
// str = ''


// while (i < n) {
//     str = str +'@ '
//     console.log(str)
//     i++
// }


// //43
// i = 5
// n = 1
// str = ''


// while (i >= n) {
//     str = str + i + ' '
//     console.log(str)
//     i--
// }


// //44
// j=0
// str = ''
// while (j<5) {
//     str = str + String.fromCharCode(65+j)+' '
//     console.log(str);
//     j++
// }


// //45
// i=1
// str = ''
// while (i<=9) {
//     str = str + i+ ' '
//     console.log(str);
//     i +=2
// }


// //46
// i=2
// str = ''
// while (i<=10) {
//     str = str + i+ ' '
//     console.log(str);
//     i +=2
// }


// //47
// import readlineSync from 'readline-sync'


// let name = readlineSync.question('Enter your name: ')
// let age = readlineSync.questionInt('Enter your age: ')


// console.log(`Hello ${name}, you are ${age} years old`)
// //Hello Yash, you are 21 years old


// //50
// let num1 = readlineSync.questionInt("Enter a number:")
// i= 1
// while (i<=num1) {
//     console.log(i);
//     i++
// }


// //51
// name = readlineSync.question("Enter you name:")
// n = readlineSync.questionInt("How many times to print:")
// i=0
// while (i<n) {
//     console.log(name);
//     i++
// }


// //52
// //question() takes string inputs even when an number is given as input
// //questionInt() takes number value if decimal give only takes integer part and when string input is given asks to re enter


// //53
// num = readlineSync.questionInt("Enter the number for table:")
// i=1
// while (i<=10) {
//     console.log(`${num}x${i}=${num*i}`);
//     i++
// }


// //54
// num = readlineSync.questionInt("Enter the number of rows:")
// i=0
// str = ''
// while (i<num) {
//     str = str + '*'
//     console.log(str);
//     i++
// }


// //55
// i=1
// x=0
// while (i<= 10) {
//    x=x+i
//    i++
// }
// console.log('Sum:',x);


// //56
// let sum = 0
// i = 1


// while (i <= 5) {
//     sum = sum + i
//     console.log('i:', i, 'sum:', sum)
//     i++
// }
// console.log('Total:', sum)
// // i: 1 sum: 1
// // i: 2 sum: 3
// // i: 3 sum: 6
// // i: 4 sum: 10
// // i: 5 sum: 15
// // Total: 15


// //57
// i=0
// x=0
// while (i<= 20) {
//    x=x+i
//    i +=2
// }
// console.log('Sum:',x);


// //58
// i=1
// x=[]


// while (i<=100) {
//     if(i%7===0)
//         x.push(i)
//     i++
// }
// console.log(x.length);


// //59
// num = readlineSync.questionInt("Enter a number:")
// x=1


// while (num>=1) {
//     x=x*num
//     num--
// }
// console.log('Factorial:',x);


// //60
// i=1
// x=0
// while (i<=50) {
//    x=x+i
//    i +=2
// }
// console.log(x);


// //61
// num = readlineSync.questionInt("Enter a NUmber")
// i=0


// if (num === 0) {
//     console.log("1");
   
// }else{
// while (num>0) {
//     i++
//     num = Math.floor(num/10)
// }}
// console.log(i);


// //62
// i=3
// x=0
// while (i<=30) {
//    x=x+i
//    i +=3
// }
// console.log(x);


