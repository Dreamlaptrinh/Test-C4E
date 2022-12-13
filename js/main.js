
function ktSNT(n){
    if (n<2){
        return false;
    }
    else{
        for (var i=2; i<n-1; i++) {
            if (n%i==0){
                return false;
            }

        }
    }
    return true;

}
    let a = prompt('Số thứ nhất');
    console.log(a);
    let b = prompt('Số thứ hai');
    console.log(b);

function sumArray(a,b){
    var sum = 0;
    for (var j = a; j <= b; j++){
        if (ktSNT(j)){ 
            sum += j;}
    }
    return sum;   
}

console.log(sumArray(a,b));