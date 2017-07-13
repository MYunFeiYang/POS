
'use strict';
function fizzBizzWhizz(sum,fizz,bizz,whizz) {
    var result;
    if (sum.toString().indexOf(fizz,0)!=-1){
        result='fizz';
    }
    else if (sum%fizz==0 && sum%bizz==0 && sum%whizz==0){
        result='fizzbizzwhizz';
    }
    else if (sum%fizz==0 && sum%bizz==0){
        result='fizzbizz';
    }
    else if (sum%bizz==0 && sum%whizz==0){
        result='bizzwhizz';
    }
    else if (sum%fizz==0 && sum%whizz==0){
        result='fizzwhizz';
    }
    else if (sum%fizz==0){
        result=`fizz`;
    }
    else if (sum%bizz==0){
        result='bizz';
    }
    else if (sum%whizz==0){
        result='whizz';
    }
    else  {
        result=sum;
    }


    console.log(result);
}


