// let numbers = [0,1,2,3,4,5,6,7,8,9,10];
// for(let i = 0; i<numbers.length;i++){
//     if(numbers[i] %2 ==0 ){
//         console.log('Even number: ' + numbers[i]);
//     }
// }
// for( let i = 0; i<numbers.length; i++){
//     if(numbers[i] %2 !=0){
//         console.log(numbers[i] + ' is an odd number.' );
//     }
// }

const prompt = require("prompt-sync")();

let user = [];  

let agree = 'yes';

for(let i = 0; i < 5; i++){
    let name = prompt("Enter user name: ");
    user[i] = name;
}
console.log("\n");

do{
    let x = prompt("Enter a number 0 - 4:");
    let y = user[x];

    console.log(y);

    agree = prompt("Do you want to perform anoter operation? (yes/no): ");
    console.log('\n');
}
while( agree === 'yes');





