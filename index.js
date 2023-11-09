
// --Hollow square

let str1 = '';
let num1= 5;
for(let i=0;i<num1;i++){
    for(let j=0;j<num1;j++){
        if(i === 0 || i === num-1){

            str1 = str1 + '*';
        }
        else{
            if(j === 0 || j === num1-1){
                str1 = str1 + '*';
            }
            else{

                str1 = str1 +' ';
            }
        }
    }
    str1 = str1 +'\n';
}
console.log(str1);

// ----------
