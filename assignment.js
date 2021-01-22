// https://github.com/ShahbajKhan/assignment-3-javascript

function kilometerToMeter(distanceInKilometer) {

    //Error Handling for negative distance
    if (distanceInKilometer < 0) {
        return "Distance can never be negative";
    }

    //1 kilometer = 1000 meter
    var distanceInMeter = distanceInKilometer * 1000;

    return distanceInMeter;
}

function budgetCalculator(watches, mobiles, laptops) {
    //Price List
    var priceOfWatch = 50;
    var priceOfMobile = 100;
    var priceOfLaptop = 500;

    var budget = 0;

    // float or negative amount error handling for watches
    if (watches < 0 || watches % 1 !== 0) {
        console.log("Amount of watches cannot be negative or float. So, watches are not added in the budget.");
    }
    else {
        budget += (priceOfWatch * watches);
    }
    // float or negative amount error handling for mobiles
    if (mobiles < 0 || mobiles % 1 !== 0) {
        console.log("Amount of mobiles cannot be negative or float. So, mobiles are not added in the budget.");
    }
    else {
        budget += (priceOfMobile * mobiles);
    }
    // float or negative amount error handling for laptops
    if (laptops < 0 || laptops % 1 !== 0) {
        console.log("Amount of laptops cannot be negative or float. So, laptops are not added in the budget.");
    }
    else {
        budget += (priceOfLaptop * laptops);
    }

    return budget;
}

function hotelCost(daysStayed) {
    var cost = 0;
    //Error Handling for negative.
    if (daysStayed < 0) {
        return "Days cannot be negative or Float. Please give integer Inputs";
    }
    //For The First Ten days cost = 100taka per day 
    else if (daysStayed <= 10) {
        cost += (daysStayed * 100);
    }
    //For first twenty days cost = (100 taka*10 days)+(80 taka * (daysStayed-10))
    else if (daysStayed <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = daysStayed - 10;
        var lastDays = remaining * 80;
        cost += firstTenDays + lastDays;
    }
    //For more than 20 days cost  = (100 taka *10 days)+(80 taka * 10 days)+ (daysStayed- 20)
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = daysStayed - 20;
        var lastDays = remaining * 50;
        cost += firstTenDays + secondTenDays + lastDays;
    }
    return cost;
}



function megaFriend(nameOfFriends) {

    //Error Handling for empty array
    if (nameOfFriends.length == 0) {
        return "No names of friends are given. Array is empty";
    }
    //Error Handling for Inputs other than string
    else {
        for (var i = 0; i < nameOfFriends.length; i++) {
            if (typeof nameOfFriends[i] == "number") {
                return "Invalid input. Please provide string type data in the array for names";
            }
        }
    }

    //Finding The largest element in the array.
    var longestElement;
    var lengthOfCurrentIndex = 0;
    for (var i = 0; i < nameOfFriends.length; i++) {
        if (nameOfFriends[i].length > lengthOfCurrentIndex) {
            lengthOfCurrentIndex = nameOfFriends[i].length;
            longestElement = nameOfFriends[i];
        }
    }
    return longestElement;

}




