// https://github.com/SahilImrose/assignment-3


// kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var meter = kilometerToMeter(1)
console.log(meter);

// budgetCalculator

function budgetCalculator(watch) {
    var calculator = watch * 1;
    return calculator;

}
var calculator = budgetCalculator(90);






function budgetCalculator2(mobile) {
    var calculator = mobile * 3;
    return calculator;

}
var calculator2 = budgetCalculator2(100)







function budgetCalculator3(laptop) {
    var calculator = laptop * 2;
    return calculator;

}
var calculator3 = budgetCalculator3(500)



var total = calculator + calculator2 + calculator3;
console.log(total);




// megafriends
var friends = ["kalam", "zolamMollaSaad", "tolmmulla"];
var max = friends[0];
for (var i = 0; i < friends.length; i++) {
    var element = friends[i];
    if (element > max) {
        max = element;
    }
}
console.log("Highest name is:", max);


// hotelcost
function hotelCost(hotel) {
    var cost = hotel * 20;
    return cost;
}
// after 10 days hotel Cost reduce 10%
var cost = hotelCost(700);
var total = cost - 70*10;
console.log(total);