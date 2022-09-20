function prime(num){
    let count=0; 
    for(let i=1; i<=num; i++){
        if(num%i==0)
        count++;
    }
    if(count==2){
        return true;
    }
    return false;
}

let a=prime(11);
if(a==true){
    console.log("Prime");
}else{
    console.log("Not Prime");
}

