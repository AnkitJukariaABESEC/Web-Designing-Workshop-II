function calculateSum(){
    n=document.getElementById("Number").value;
    let output=0;
    for(let i=1;i<=n;i++){
       output+=i;
    }
    document.querySelector(".result").innerHTML=`The sum of numbers from 1 to ${n} is: `+output;
}