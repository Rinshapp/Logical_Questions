
// --Hollow square

let str = '';
let num= 5;
for(let i=0;i<num;i++){
    for(let j=0;j<num;j++){
        if(i === 0 || i === num-1){

            str = str + '*';
        }
        else{
            if(j === 0 || j === num-1){
                str = str + '*';
            }
            else{

                str = str +' ';
            }
        }
    }
    str = str +'\n';
}
console.log(str);