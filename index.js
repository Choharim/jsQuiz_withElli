'use strict';

//Q1. make a string out of an array
const fruits_1 = ['apple', 'banana', 'orange'];

fruits_1.toString();

//Q2. make an array out of a string
const fruits_2 = '🍎, 🥝, 🍌, 🍒';
let array_2 = [];
array_2.push(fruits_2);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
const array_3 = [1, 2, 3, 4, 5];

array_3.reverse();

// Q4. make new array without the first two elements
const array_4 = [1, 2, 3, 4, 5];
array_4.shift()
console.log(array_4);

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

students.forEach (
  function(i){
    if(i.score == 90 ){
      const name90 = i.name;
      console.log(name90);
    } 
  }
)

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

// Q8. check if there is a student with the score lower than 50



// Q9. compute students' average score
let scoreArray_2 = [];
students.forEach(
  function(i){
    scoreArray_2.push(i.score);
  }
);

const sum = scoreArray_2.reduce( function(result,current){
  return result + current;
}
);
const avg = sum/scoreArray_2.length;
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

// Bonus! do Q10 sorted in ascending order
const bonus = scoreArray_3.sort();
const strbonus = bonus.toString();
console.log(strbonus);