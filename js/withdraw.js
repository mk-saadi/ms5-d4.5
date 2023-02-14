/*
 * 1. add withdraw button event handlers
 * 2. get withdraw amount by using "getTextElementValueById" function
 * 3. get previous withdraw amount by using "getTextElementValueById" function
 * 4. calculate new withdraw total and set value
 ! 5. set new withdraw total by using "getTextElementValueById" function
 * 6. get previous balance total by using "getTextElementValueById" function
 ! 7. calculate new balance total by using "getTextElementValueById" function
 */

document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const newWithdrawAmount= getInputFieldValueById('withdraw-field');

    if(newWithdrawAmount< 450){
        alert('Can not Withdraw less than 450');
        return;
    }

    if(isNaN(newWithdrawAmount)){
        alert('Write amount in Number');
        return;
    }

    const previousWithdrawTotal= getTextElementValueById('withdraw-total');
    
    const newWithdrawTotal= previousWithdrawTotal+ newWithdrawAmount;

    // !set withdraw total value
    setTextElementValueById('withdraw-total',newWithdrawTotal);

    // * deduct balance from current balance 
    const previousBalanceTotal = getTextElementValueById("balance-total")
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // ! set balance total value
    setTextElementValueById('balance-total',newBalanceTotal);
    
});