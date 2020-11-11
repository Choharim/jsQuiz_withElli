'use strict';

//Q1. make a string out of an array
const fruits_1 = ['apple', 'banana', 'orange'];

fruits_1.toString();
fruits_1.join();

//Q2. make an array out of a string
const fruits_2 = '🍎, 🥝, 🍌, 🍒';

fruits_2.split(",");
console.log(fruits_2.split(","));

// Q3. make this array look like this: [5, 4, 3, 2, 1]
const array_3 = [1, 2, 3, 4, 5];

array_3.reverse();

// Q4. make new array without the first two elements
const array_4 = [1, 2, 3, 4, 5];

array_4.slice(0,2)
console.log(array_4.slice(2));

//
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
// Q5. find a student with the score 90

const who90 = students.filter (function(i){ return i.score == 90});
console.log(who90);

// Q6. make an array of enrolled students

const enrolledStudents = students.filter (function(i){ return i.enrolled === true});
console.log(enrolledStudents);

// Q7. make an array containing only the students' scores

let scoreArray = [];
students.forEach(
  function(i){
    scoreArray.push(i.score);
  }
)
console.log(scoreArray);

console.log(students.map((i)=> i.score));

// Q8. check if there is a student with the score lower than 50
students.forEach( function(i){
  if(i.score < 50 ){
    console.log(true) ;
  }
}
);

const check = students.some(
  function(i){
   return i.score < 50;
  }
);
console.log(check);

// Q9. compute students' average score

const sum = students.reduce( function(result,current){
  return result + current.score;
},0);
const avg = sum/students.length;
console.log(avg);

// Q10. make a string containing all the scores
let scoreArray_3 = [];
students.forEach(
  function(i){
    scoreArray_3.push(i.score);
  }
);
const str = scoreArray_3.toString();
console.log(str);

students.map(function(i){ return i.score;}).toString();
console.log(students.map(function(i){ return i.score;}).toString());

// Bonus! do Q10 sorted in ascending order

const bonus = students.map((i) => i.score).sort((a,b)=> a-b).toString();
console.log(bonus);

const bonus_2 = students.map((i) => i.score).sort((a,b)=> b-a).toString();
console.log(bonus_2);