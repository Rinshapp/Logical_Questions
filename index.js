// -----prime or not

const n=4;
let isPrime = true;


for(let i=2; i<n; i++){
    if(n % i == 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(`${n} is prime`);
}
else{
    console.log(`${n} is not prime`);
}

// -----------------------------------

