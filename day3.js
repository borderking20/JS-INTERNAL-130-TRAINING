function fun(n){
    return n*2;
}
let n = fun(72)
console.log(n)
let arr = [1,2,3,4,5,"abc","efg",n];
for(let i=0;i<9;i++) console.log(arr[i])
console.log(arr)
const nums =["apple","bannana","seb","kela","santra"]
for(let i=0;i<6;i++) console.log(nums[i])
nums.push("papaya")
nums.pop()
nums.unshift("kiwi")
nums.shift();
nums.includes("mango")
nums.indexOf("bannana")
for(let i=0;i<6;i++) console.log(nums[i])
for(let num in nums) console.log(num)
//map is used to create new array with some modifiactions    
let numbers = [1,2,3];
let d = numbers.map(n => n*2)
for(let n of d) console.log(n)
// filter()
let array = [10,25,30,40]
let ans = array.filter(n => n%2==0)
console.log(ans)    
//reduce() method iterates through an array and redues it to a single cpp stls jaise accumulate , min ,max
//array.reduce((accumulator,currValue) => {...}, initialValue)
//accumulator stores the result as the loops continues;
//currentValue current element of arrat being processed
//initialValue starting value for accumulator
let total = array.reduce((acc,val) => acc+val,0)
console.log(total)
let student = {
    name : "devansh",
    age : "22",
    course : ".NET"
}
console.log(student)
//JSON
//let jsonString = JSON.stringify(student) //converting object to json
//let obj = JSON.parse(jsonString)