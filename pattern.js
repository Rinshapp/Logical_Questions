// -----prime or not

// const n=89;
// let isPrime = true;


// for(let i=2; i<n; i++){
//     if(n % i == 0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log(`${n} is prime`);
// }
// else{
//     console.log(`${n} is not prime`);
// }

// -----------------------------------




// --Hollow square

// let str1 = '';
// let num1= 5;
// for(let i=0;i<num1;i++){
//     for(let j=0;j<num1;j++){
//         if(i === 0 || i === num-1){

//             str1 = str1 + '*';
//         }
//         else{
//             if(j === 0 || j === num1-1){
//                 str1 = str1 + '*';
//             }
//             else{

//                 str1 = str1 +' ';
//             }
//         }
//     }
//     str1 = str1 +'\n';
// }
// console.log(str1);

// ----------

// ------right triangle

// let str = '';
// let num = 5;

// for(let i=0;i<=num;i++){
//     for(let j=0;j<num-1;j++){
//         str = str +' ';
//     }
//     for(let k=0;k<i;k++){
//         str = str +'*';
//     }
//     str = str + '\n';
// }
// console.log(str);


let limit=30;
let str ='';
let isPrime = true;

for(let i=2;i<limit;i++){
    isPrime=true;

    for(let x=2;x<i;x++){
        if(i%x==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        str=str+' 0 ';
    }else{
        str=str+(` ${i} `);  
    }
}
console.log(str);

//-----------------------------

