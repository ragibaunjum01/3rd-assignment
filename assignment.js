// https://github.com/ragibaunjum01/3rd-assignment

     // (1st problem)

function kilometerToMeter(km){
    if(typeof(km) != typeof(1)){
        return 'Please type a integer';
    }
    else if(km < 0){
        return 'Distance can not be negative';
    }
    var result = km * 1000;
    return result;
}
// console.log(kilometerToMeter(km));

     // (2nd problem)

function budgetCalculator(watch, phone, laptop){
    var total = 0;
    if(typeof(watch) != typeof(1) || typeof(phone) != typeof(1) || typeof(laptop) != typeof(1)) {
        return 'All items must be an integer'
    }
    else if(watch < 0 || phone < 0 || laptop < 0){
        return 'Items can not be negative'
    }
    var price = watch * 50;
    total = total + price;
    var price = phone * 100;
    total = total + price;
    var price = laptop * 300;
    total = total + price;
    return total;
}
console.log(budgetCalculator(watch, phone, laptop));

     //  (3rd problem)

function hotelCost(days) {
    var rent = 0;
    if(typeof(days) != typeof(1)){
        return 'Please type a integer';
    }
    else if(days < 0){
        return 'Day can not be negative';
    }
    else{
        if(days <= 10) {
            rent = days * 100
        }
        else if(days <= 20) {
            var firstDays = 10 * 100;
            var remainingDays = days - 10;
            var secondDays = remainingDays * 80;
            rent = firstDays + secondDays;
        }
        else {
            var firstDays = 10 * 100;
            var secondDays = 10 * 80;
            var remainingDays = days - 20
            var thirdDays = remainingDays * 50;
            rent = firstDays + secondDays + thirdDays;
        }
    }
    return rent;
}
// console.log(hotelCost(days));

     //   (4th problem)

function megaFriend(arr){
    var nameLength = 0;
    var largestName = '';
    for(i = 0; i < arr.length; i++){
        if(typeof(arr[i]) != typeof("a")){
            return "All the value is not string"
        }
        if(arr[i].length > nameLength){
            nameLength = arr[i].length;
            largestName = arr[i];
        }
    }
    return largestName;
}
// console.log(megaFriend(['Rafiq','Borkot','Salahuddin','Joshim Islam','Shakib']));