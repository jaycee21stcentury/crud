const prompt = require("prompt-sync")();

let employee = [];
let bh = 'yes';

do{
    console.log('\t Employee Management System \t')
console.log('\t\t Employee List \t')
console.log('Employee Name: \tEmployee ID:  \tDate:  ')

for (let i = 0; i < employee.length; i++) {
    console.log(`${employee[i].name}\t\t${employee[i].id}\t\t${employee[i].date}`);
}

console.log('\n')
console.log('1. Add employee')
console.log('2. Remove employee')
console.log('3. Update employee')
console.log('\n')

let choice = parseInt(prompt('Choose from 1-3: '))

switch (choice) {
    case 1:
        console.log('Add Employee');
            const name = prompt('Enter employee name: ');
            const id = employee.length + 1;
            const date = prompt('Enter date: ');

            employee.push({ name, id, date });

            console.log('Employee added successfully!');
            break;

        case 2:
            console.log('Remove Employee')

            break;

            case 3:
                console.log('Update Employee')
}
bh = prompt('do you want to use this operation again?(yes/no): ');
console.log('\n')

}while(bh === 'yes')