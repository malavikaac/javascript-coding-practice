var x = [30,40,60,70,100];
var y = [40,55,65,10,30,30];
var merge = [];
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j <y.length; j++) {   
        if (x[i]== y[j]) {
           
            merge.push(y[j])
            console.log("-----");
        }
    }
}

let answer = [...new Set(merge)]
console.log(answer);

