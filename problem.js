// problem-1

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.indexOf('Banana'));
fruits[1]= 'Mango';
console.log(fruits);

fruits.pop();
fruits.push('Watermelon');
console.log(fruits);


// problem-2

var num1 = 13;
var num2 = 79;
var num3 = 45

if (num1 > num2){
    console.log('num1 is big');
 } else if ( num2 > num3){
    console.log('num2 is big!')
 }else {
console.log('num3 is big');
}

// isosceles
var a = 9;
var b = 8;
var c = 9;

if (a == b){
    console.log('two sides are equal');
} else if( b === c){
    console.log('Two sides are equal');
}else if (a === c){
    console.log('tWo sides are equal');
} else{
    console.log('your triangle is not isosceles');
}