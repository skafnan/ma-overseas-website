// find the sum of first n natural numbers
import readlinesync from 'readline-sync'
let n = readlinesync.questionInt('write the number ')
let i = 1
let max = n
let sum = 0

while(i<=max){
    sum=sum+i
    i++

}
console.log(sum)

