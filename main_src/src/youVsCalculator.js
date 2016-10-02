var zuckIncomeYearly = 18000000000;
var zuckIncomeMonthly = 1500000000;
var zuckIncomeDaily = 49315068;
var zuckIncomeHourly = 2054794;
var zuckIncomeInMinutes = 34246;
var zuckIncomeInSeconds = 570;

var youVsZuckerberg = function(userIncome) {

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
youVsZuckerberg(5);

//19285
var perspective = function(userIncome) {
  if(userIncome >= zuckIncomeYearly) {
    console.log("We have nothing to put in perspective for you, you win");
  } else if(userIncome >= zuckIncomeMonthly) {
    console.log("We still have nothing to put in perspective for you")
  } else if(userIncome >= zuckIncomeDaily) {
    perspectiveHelperYearly(userIncome);
  } else if(userIncome >= zuckIncomeHourly) {
    perspectiveHelperYearly(userIncome);
  } else if(userIncome >= zuckIncomeInMinutes) {
    perspectiveHelperMonthly(userIncome);
  } else {
    perspectiveHelperMonthly(userIncome);
  }
}

var perspectiveHelperYearly = function(userIncome) {
  if(userIncome >= zuckIncomeDaily) {
    console.log("You buying a Bugatti Chiron is the equivalent of Mark spending $972,000,000")
  } else if(userIncome >= zuckIncomeHourly) {
    console.log("You buying a Ferrari 488 is the equivalent of Mark spending $2,142,000,000");
  } else {
    console.log("You buying a Mercedes S63 AMG is the equivalent of Mark spending $2,590,200,000");
  }
  // dividedUserIncome = dividedUserIncome*0.10/100
  // console.log(dividedUserIncome);
  //shows the difference between 0.10% of both incomes in multitudes
  // var magnitudeOfDifference = zuckIncomeMonthly/dividedUserIncome;
  // console.log("difference ", magnitudeOfDifference);
}

var perspectiveHelperMonthly = function(userIncome) {
  var monthlyUserIncome = Math.round(userIncome/12);
  var zuckIncomeMonthly = 1500000000*0.10/100;
  if(userIncome >= 1000000) {
    console.log("You buying a MacBook is the equivalent of Mark spending $23,400,000");
  } else if(userIncome >= 750000) {
    console.log("You buying a MacBook is the equivalent of Mark spending $30,600,000");
  } else if(userIncome >= 500000) {
    console.log("You buying a MacBook is the equivalent of Mark spending $46,800,000");
  } else if(userIncome >= 400000) {
    console.log("You buying a MacBook is the equivalent of Mark spending $57,600,000");
  } else if(userIncome >= 350000) {
    console.log("You buying a MacBook is the equivalent of Mark spending $66,600,000");
  } else if(userIncome >= 300000) {
    console.log("You buying a iPad is the equivalent of Mark spending $28,800,000");
  } else if(userIncome >= 250000) {
    console.log("You buying a iPad is the equivalent of Mark spending $36,000,000");
  } else if(userIncome >= 200000) {
    console.log("You buying a iPad is the equivalent of Mark spending $45,000,000");
  } else if(userIncome >= 175000) {
    console.log("You buying a iPad Mini is the equivalent of Mark spending $36,000,000");
  } else if(userIncome >= 150000) {
    console.log("You buying a iPad Mini is the equivalent of Mark spending $41,400,000");
  } else if(userIncome >= 100000) {
    console.log("You buying two tickets to Disneyland is the equivalent of Mark spending $36,000,000");
  } else if(userIncome >= 75000) {
    console.log("You buying two tickets to Disneyland is the equivalent of Mark spending $46,800,000");
  } else if(userIncome >= 50000) {
    console.log("You buying gas for a large SUV is the equivalent of Mark spending $25,200,000");
  } else if(userIncome >= 45000) {
    console.log("You buying gas for a large SUV is the equivalent of Mark spending $28,800,000");
  } else if(userIncome >= 40000) {
    console.log("You buying gas for a large SUV is the equivalent of Mark spending $32,400,000");
  } else if(userIncome >= 35000) {
    console.log("You buying gas for a large SUV is the equivalent of Mark spending $36,000,000");
  } else if(userIncome >= 30000) {
    console.log("You going to the movies is the equivalent of Mark spending $23,400,000");
  } else if(userIncome >= 25000) {
    console.log("You buying a cup of coffee is the equivalent of Mark spending $3,419,999");
  } else if(userIncome >= 20000) {
    console.log("You buying a cup of coffee is the equivalent of Mark spending $4,140,000");
  } else if(userIncome >= 15000) {
    console.log("You buying a cup of coffee is the equivalent of Mark spending $5,580,000");
  } else if(userIncome >= 10000) {
    console.log("You buying a cup of coffee is the equivalent of Mark spending $8,460,000");
  } else if(userIncome >= 5000) {
    console.log("You buying a cup of coffee is the equivalent of Mark spending $17,100,000");
  } else {
    console.log("You cant even fathom the difference");
  }
}
perspectiveHelperYearly(49315068);
perspectiveHelperYearly(53657);
perspectiveHelperYearly(243000);
perspectiveHelperYearly(150000);
//the number below is the equivalent of someone with the national income
//buying a $4.75 coffee
//1593454.7216579383
var counter = 0;
var zuckPayTimer = setInterval(function() {
    return counter+= 1;
  }, 106)
