const decreaseBtn = document.querySelector("#btnDec");
const increaseBtn = document.querySelector("#btnInc");
let amountInt = document.querySelector("#amountInt").innerHTML;


decreaseBtn.addEventListener("click",function(){
    if(amountInt > 1){
        amountInt--
        document.querySelector("#amountInt").innerHTML = amountInt;
    }
})

increaseBtn.addEventListener("click",function(){
    amountInt++
    document.querySelector("#amountInt").innerHTML = amountInt;
})
