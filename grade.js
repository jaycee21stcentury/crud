const prompt = require("prompt-sync")();
let agree = 'yes';
while ( agree ==='yes'){
console.log('Grade A = 100-90');
console.log('Grade B = 89-60');
console.log('Grade C = 59-30');
console.log('Grade D = 29-10');
console.log('Grade E = 10-1');
console.log('Grade F = 0');
let grade = prompt ("Enter your grade:");
if (grade >= 90 &&  grade <= 100)
console.log('Congratulations your grade is A++');
else if (grade >= 60 && grade <= 89)
console.log('Good job you got a B');
else if (grade >= 30 && grade <= 59)
console.log('Not bad you got a C');
else if (grade >= 10 && grade <= 29)
console.log('You got a D');
else if (grade >= 1 && grade <= 10)
console.log('You got a E');
else if (grade == 0)
console.log('You got an F');
else{
console.log('Invalid number');
}
agree = prompt("Do you want to perform another operation? yes/no: ")
console.log('\n');

}




