
// ------right triangle

let str = '';
let num = 5;

for(let i=0;i<=num;i++){
    for(let j=0;j<num-1;j++){
        str = str +' ';
    }
    for(let k=0;k<i;k++){
        str = str +'*';
    }
    str = str + '\n';
}
console.log(str);

