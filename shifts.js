function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours > 8){
    let regularPay=8*rate;
    let overtimeHours= hours-8;
    let overtimePay= overtimeHours *(rate*2.5);
    return Math.floor((8*rate)+((hours-8)*rate*1.5)+5);
  }
  return Math.floor(hours * rate);
}

module.exports = { isValidShift, calculatePay };
