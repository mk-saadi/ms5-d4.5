// all the important codes are in utility.js

document.getElementById("btn-deposit").addEventListener("click", function () {
  /*
   * get the element by its id
   * get the value from the element
   * convert "string" value to "number"
   */

  const newDepositAmount = getInputFieldValueById("deposit-field");

  if(newDepositAmount< 450){
    alert('Can not Deposit less than 450');
    return;
}

if(isNaN(newDepositAmount)){
    alert('Write amount in Number');
    return;
}

  // get the previous deposit total by "id"
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  //! set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  //! set balance total value
  setTextElementValueById("balance-total", newBalanceTotal);
});
