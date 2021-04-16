//1
const num = 0
for(let i = 1; i <=  20; i++){
    console.log(i);
}

//2 
const list = [ "There is one bottl of beer on the wall", "There are two bottles of beer on the wall" , "up until there are three bottles", "There is 4 bottle of beer on the wall", "There are 5 bottles of beer on the wall"];
for(let i = 0; i < list.length; i++){
    console.log(list[i]);
}

//3

for(let i = 0; i<=20 ;++i){
if(i %2 === 0){
    console.log(i + " this is even");
}
else{
    console.log(i + " this is odd");
}
}

//4
for(let i = 0; i<=10 ;++i){
    console.log(i + " * 9 = " + i * 9 );
}

//5
for(let i = 1; i<=100 ;++i){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 5 === 0){
         console.log("Buzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
}

//6 
let sum = 0
for(let i = 0; i < 1000; ++i){
    if(i % 3 === 0 && i % 5 === 0){
    sum = sum + i;
    }
}
console.log("The sum is " +sum);
    

//7
