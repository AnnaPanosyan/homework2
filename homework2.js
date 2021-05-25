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

let number = +prompt ("Enter a number");
let newNumber;
    if (number > 0 && number === Math.floor(number) ){
        if (number % 10 === 0 || number % 10 === number ) {
            console.log(number);
        }else{
            newNumber = " " + number % 10 + (number - number % 10) / 10;
            console.log(newNumber);
            }
    } else{
        console.log("Wrong number");
    }
// task3
// Given five numbers as input. Calculate and print the average of the numbers(without
// using arrays).

let number1 = +prompt ("Enter a number");
let number2 = +prompt ("Enter a number");
let number3 = +prompt ("Enter a number");
let number4 = +prompt ("Enter a number");
let number5 = +prompt ("Enter a number"); 
let average = (number1 + number2 + number3 + number4 + number5)/5;
    console.log (average);

// task4
// Given three numbers. Sort them by the ascending order.
let number1 = +prompt ("Enter a number");
let number2 = +prompt ("Enter a number");
let number3 = +prompt ("Enter a number");
 if (numbe1 >= number2 $$ number1 >= number3 && number2 >= number3) {
    console.log(number1,number2,number3)
}



