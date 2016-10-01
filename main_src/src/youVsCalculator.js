function youVsZuckerberg(userIncome) {
  var zuckIncomeYearly = 18000000000;
  var zuckIncomeMonthly = 1500000000;
  var zuckIncomeDaily = 49315068;
  var zuckIncomeHourly = 2054794;
  var zuckIncomeInMinutes = 34246;
  var zuckIncomeInSeconds = 570;

  if(userIncome >= zuckIncomeYearly) {
    return console.log("You must be apart of the Rothschild's family, or be a king");
  } else if(userIncome >= zuckIncomeMonthly) {
    var monthlyIncomeAnswer = userIncome/zuckIncomeMonthly;
     return console.log("it would take Zuckerberg " +
     Math.round(monthlyIncomeAnswer * 10)/10 + " months to earn your income");
  } else if(userIncome >= zuckIncomeDaily) {
    var dailyIncomeAnswer = userIncome/zuckIncomeDaily;
    return console.log("it would take Zuckerberg " +
    Math.round(dailyIncomeAnswer * 10)/10 + " days to earn your income");
  } else if(userIncome >= zuckIncomeHourly) {
    var hourlyIncomeAnswer = userIncome/zuckIncomeHourly;
    return console.log("it would take Zuckerberg " +
    Math.round(hourlyIncomeAnswer * 10)/10 + " hours to earn your income");
  } else if(userIncome >= zuckIncomeInMinutes){
    var incomeInMinutesAnswer = userIncome/zuckIncomeInMinutes;
    return console.log("it would take Zuckerberg " +
    Math.round(incomeInMinutesAnswer * 10)/10 + " minutes to earn your income");
  } else if(userIncome >= zuckIncomeInSeconds ) {
    var incomeInSecondsAnswer = userIncome/zuckIncomeInSeconds;
    return console.log("It would take Zuckerberg " +
    Math.round(incomeInSecondsAnswer * 10)/10 + " seconds to earn your income");
  } else {
    return console.log("Zuckerberg earned your income so fast its not even calculable")
  }
}

youVsZuckerberg(19000000000000);
youVsZuckerberg(1800000000);
youVsZuckerberg(100000000);
youVsZuckerberg(9000000);
youVsZuckerberg(105000);
youVsZuckerberg(80000);
youVsZuckerberg(30000);
youVsZuckerberg(23000);
youVsZuckerberg(5)

//19285
function perspective (userIncome) {
  if(userIncome >= zuckIncomeYearly) {
    console.log("We have nothing to put in perspective for you, you win");
  } else if(userIncome >= zuckIncomeMonthly) {
    console.log("We still have nothing to put in perspective for you")
  } else if(userIncome >= zuckIncomeDaily) {

  } else if(userIncome >= zuckIncomeHourly) {

  } else {

  }
}
