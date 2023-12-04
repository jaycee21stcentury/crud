//using for loop
// for (let i = 0; i < 3; i++){
//     console.log("Hi");
//     for ( let j = 0; j < 3; j++){
//         console.log("Hello");
//     }
//     }
for (let i = 0; i < 2; i++) {
    let row = '';
    for (let j = 0; j < 4; j++) {
        row += '* ';
    }
    console.log(row);
    let column = '';
    for (let c = 0; c < 4; c++) {
        column += '* ';
    }
    console.log(column);
}

const height = 4; 

for (let i = 1; i <= height; i++) {
    let row = '';
    for (let h = 1; h <= height - i; h++) {
        row += ' '; 
    }
    for (let r = 1; r <= 2 * i - 1; r++) {
        row += '*';
    }
    console.log(row);
}

for (let i = 0; i < 2; i++) {
    let row = '';
    for (let j = 0; j < 2; j++) {
        row += '* ';
    }
    console.log(row);
    let column = '';
    for (let c = 0; c < 2; c++) {
        column += '* ';
    }
    console.log(column);
}

for (let i = 0; i < 2; i++) {
    let row = '';
    for (let j = 0; j < 6; j++) {
        row += '* ';
    }
    console.log(row);
    let column = '';
    for (let c = 0; c < 6; c++) {
        column += '* ';
    }
    console.log(column);
}


