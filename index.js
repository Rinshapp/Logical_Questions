

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

