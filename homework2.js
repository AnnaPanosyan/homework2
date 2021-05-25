//task1
// Given a number. Print “odd” if the number is odd and “even” if it’s even.

let number =+prompt ("Enter a number");
    if ( number % 2 === 1 ) { 
         console.log( "odd" )
        }else{
         console.log( "even" ) 
        }

// task2
// Given a positive integer. Bring the last digit of the number to the beginning. Print the new
// number. If the last digit of the inserted number is 0, number remains the same.

let number =+prompt ("Enter a number");
let number = +prompt ("Enter a number");
let newNumber;
    if (number > 0 &&  number === Math.round(number) ){
        if (number === Math.round(number) || number % 10 === 0 ) {
            console.log(number);
            }else{
                newNumber = " " + number % 10 + (number - number % 10) / 10;
                console.log(newNumber)
                }
        } else{
            console.log("Wrong number")
        }

