// let arrayName = ['shafiq', 'salam', 'jabbar', 'barkat'];
// // spreed operator (...)
// let newArray = ['bangladesh', ...arrayName, 'yahho']

// // console.log(newArray);

// //---------------------------------------------

// /*let arrayOne = ['bangladesh', 'pakistan', 'india'];

// let arrayTwo = ['maldip', 'sentmartin', 'gorai']

// arrayOne = arrayOne.concat(arrayTwo);
// console.log(arrayOne);
// */


// const firstArray = ['solaiman', 'sukhon', 'bangladesh'];

// const secondArray = ['shakib khan', 'shabnur', 'purnima']


// // console.log(...firstArray, ...secondArray);


// //map

// const rahim = new Map();

// rahim.set('');

// let newName = rahim.has('name')
// // console.log(newName);

// // jor bejor ber korar poddhoti
// let jorNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newNumber = jorNumber.filter(function (somethin) {
//     return somethin % 2 == 1
// })
// // console.log(newNumber);

// let number = 340.353;

// // console.log(number.toExponential(1));

// let name_ab = document.write('sabbir' + 'hossen')
// // console.log(name_ab);


// let base = parseFloat(prompt('enter base: '))
// let cels = parseFloat(prompt('enter celsius: '));


// let farn = (cels * 9 / 5) + 32;

// // let area = base * height;
// document.write(farn);

// relational operator ->, >==,<.<=,==,===,=!,==!
// Logical Operator  ->,&&,||,!

// let number = 5;
// if (number % 2 == 0) {
//     console.log('even')
// }
// else {
//     console.write('odd');
// }

// let letter = prompt('enter number: ')

// if (letter > 79 && letter <= 100) {
//     console.log("got a+");
// }
// // else if (letter > 69 && letter <= 78) {
// //     console.log("got a");
// // }
// else if (letter > 59) {
//     console.log("got a-");
// }
// else if (letter >= 49) {
//     console.log("got b");
// }
// else if (letter > 39 && letter <= 49) {
//     console.log("got b-");
// }

// else {
//     console.log('fail');
// }


// let digit = prompt('enter any digit: ');

// if (digit == 0) {
//     console.log('zeo mama');
// }

// else if (digit == 1) {
//     console.log('one');
// }
// else if (digit == 1) {
//     console.log('one');
// }
// else if (digit == 2) {
//     console.log('two');
// }
// else if (digit == 3) {
//     console.log('three');
// }
// else if (digit == 4) {
//     console.log('four');
// }

// else {
//     console.log("no digit here");
// }

// let digit = prompt('enter a right value: ')

// switch (digit) {
//     case "0":
//         console.log('zero');
//         break;
//     case "1":
//         console.log('one');
//         break;
//     case "2":
//         console.log('two');
//         break;
//     case "3":
//         console.log('three');
//         break;
//     case "4":
//         console.log('four');
//         break;
//     case "5":
//         console.log('five');
//         break;

//     default:
//         console.log('no a digit person here');
// }


// let letter = prompt('enter a vowel: ');

// letter = letter.toLocaleLowerCase();

// switch (letter) {
//     case "a":
//         console.log("vowel");
//         break;
//     case "e":
//         console.log("vowel");
//         break;
//     case "i":
//         console.log("vowel");
//         break;
//     case "o":
//         console.log("vowel");
//         break;
//     case "u":
//         console.log("vowel");
//         break;

//     default:
//         console.log("hey mama no one vowel is here");
// }

// let m = parseFloat(prompt('entr a valure: '))
// let n = parseFloat(prompt('entr a valure: '))

// sum = 0
// for (let x = 1; x <= 10; x = x + 1) {
//     // in for loop there have 3 conditions. first condition is initialise second is condition and third must have update.

//     document.write('' + x)

// }

// document.write(sum)

// let num = [];
// let i = 1;
// let sum = 0;


// while (i <= 300) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         document.write('  ' + i)
//         num.push(i)
//         // sum = sum + i;

//     }
//     // i = i + 1;


// }
// document.write('  mot ' + num.length)

// document.write(i.length)


// for (let i = 1; i <= 100; i++) {
//     if (i == 11) {
//         continue;
//     }
//     document.write(" " + i)
// }

// let x = 'some'
// function first() {
//     console.log(x);
// }
// x = 'umu'
// function second() {
//     let x = 'log'
//     first();
// }
// console.log(second);

// async function apiCall() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('b')
//         }, 50)
//     });
// }

// async function logger() {
//     setTimeout(() => console.log('a'), 10)
//     console.log(await apiCall());
//     console.log('c');
// }
// logger()

// let green;
// grnee = false;
// console.log(grnee);

// function* gen1() {
//     console.log(yield 1);
//     console.log(yield 2);
//     console.log(yield 3);
// }

// const iterator = gen1()
// console.log(iterator.next('a').value);
// console.log(iterator.next('b').value);
// console.log(iterator.next('c').value);


for (var i = 1; i >= 5; i++) {

    var guessNumber = parseInt(prompt('enter a guess number'));

    var randomNumber = Math.floor(random() * 5) + 1;

    if (guessNumber == randomNumber) {
        document.write('you have won');
    }
    else {
        document.write('you have lost. Random number was ' + randomNumber);
    }
}


prompt('hello')