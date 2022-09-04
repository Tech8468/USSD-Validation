let fNum=document.getElementById("fNum")
let btnCan=document.getElementById("btnCan")
let btnSd=document.getElementById("btnSd")
let fnumError=document.getElementById("fnumError")
let qbankError=document.getElementById("qbankError")
let airtimeO=document.getElementById("airTimeO")
let enquiry=document.getElementById("enquiry")
let data=document.getElementById("data")
let pBills=document.getElementById("pBills")
let nPage=document.getElementById("nPage")
let transfer=document.getElementById("transfer")
let airtimeS=document.getElementById("airtimeS")
let qBank=document.getElementById("qBank")

let amt=document.getElementById("amt")
let amtError=document.getElementById("amtError")
let pNum=document.getElementById("pNum")
let pnumError=document.getElementById("pnumError")

btnSd.addEventListener("click", function(){
    validateform()
})

function validateform(){
    if(qBank.value==""){
        qbankError.innerHTML="Please, select option";
    } else{
        qbankError.innerHTML=""
    }
    
    if(amt.value==""){
        amtError.innerHTML="Please, Enter Amount";
    }else {
        amtError.innerHTML=""
    }

    if(pNum.value==""){
        pnumError.innerHTML="Please, Enter Amount";
    }else {
        pnumError.innerHTML=""
    }
    if(qBank.value!="" && amt.value!="" && pNum.value!=""){
        acceptValues()
    }
    // if(fNum.value==""){
    //     fNum.value="";
    //     return false
}

function acceptValues(){
    amt = Number(digit.value);
    pNum = Number(digit.value);
    qBank = qBank.value;
    process()
}
function process(){
    let and, message
    if(qBank ==="airtimeS"){
  
    message = "Recharge of" +amt + "Successful"
    messageT.innerHTML = message 
    
    }
}

    // console.log(num1);
    // console.log(num2);
    // console.log(opr);

    //  calculate()
    // }
