var hours = ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];
var tableStyle = "style='line-height: 1.3; font-size: 14px; width: 175px; box-shadow: 0 4px 8px 0 #222222; float: left; background-color: rgb(40,46,43); color: whitesmoke; margin-left: 10px; padding: 1em; border: 1px solid white;'";

var headerStyle = "style='text-align: left; padding-bottom: 5px;'";

var pioneerSquare = {
    location: "Pioneer Square",
    hoursOpen: hours,
    minCustomers: 17,
    maxCustomers: 88,
    avgSalesPerCust: 5.2,
    randomNumCustomers: function() {
      return  Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    },
    cookiesPerHour: function() {
        return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
    },
    toHTML: function () {
        var cookiesSold = 0;
        var HTML = "<table " + tableStyle + "><tr><th colspan='2'>" + this.location + "</th></tr><tr><th " + headerStyle + ">Hour</th><th " + headerStyle + ">Cookies Sold</th></tr>";
        for (var hourly = 0; hourly < hours.length; hourly++) {
            HTML += "<tr><td>" + hours[hourly] + "</td><td>" + this.cookiesPerHour() + " cookies" + "</td></tr>";
            cookiesSold += this.cookiesPerHour();
        } 
        HTML += "<tr><td colspan='2'>" + "Total: " + cookiesSold + "</td></tr>" + "</table>";
        return HTML;
    }
}

var portlandAirport = {
    location: "Portland Airport",
    hoursOpen: hours,    
    minCustomers: 6,
    maxCustomers: 24,
    avgSalesPerCust: 1.2,
    randomNumCustomers: function() {
        return  Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    },
    cookiesPerHour: function() {
        return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
    },
    toHTML: function () {
        var cookiesSold = 0;
        var HTML = "<table " + tableStyle + "><tr><th colspan='2'>" + this.location + "</th></tr><tr><th " + headerStyle + ">Hour</th><th>Cookies Sold</th></tr>";
        for (var hourly = 0; hourly < hours.length; hourly++) {
            HTML += "<tr><td>" + hours[hourly] + "</td><td>" + this.cookiesPerHour() + " cookies" + "</td></tr>";
            cookiesSold += this.cookiesPerHour();
        } 
        HTML += "<tr><td colspan='2'>" + "Total: " + cookiesSold + "</td></tr>" + "</table>";
        return HTML;
    }
}

var washingtonSquare = {
    location: "Washington Square",
    hoursOpen: hours,
    minCustomers: 11,
    maxCustomers: 38,
    avgSalesPerCust: 1.9,
    randomNumCustomers: function() {
        return  Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    },
    cookiesPerHour: function() {
        return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
    },
    toHTML: function () {
        var cookiesSold = 0;
        var HTML = "<table " + tableStyle + "><tr><th colspan='2'>" + this.location + "</th></tr><tr><th " + headerStyle + ">Hour</th><th>Cookies Sold</th></tr>";
        for (var hourly = 0; hourly < hours.length; hourly++) {
            HTML += "<tr><td>" + hours[hourly] + "</td><td>" + this.cookiesPerHour() + " cookies" + "</td></tr>";
            cookiesSold += this.cookiesPerHour();
        } 
        HTML += "<tr><td colspan='2'>" + "Total: " + cookiesSold + "</td></tr>" + "</table>";
        return HTML;
    }
}

var sellwood = {
    location: "Sellwood",
    hoursOpen: hours,
    minCustomers: 20,
    maxCustomers: 48,
    avgSalesPerCust: 3.3,
    randomNumCustomers: function() {
        return  Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    },
    cookiesPerHour: function() {
        return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
    },
    toHTML: function () {
        var cookiesSold = 0;
        var HTML = "<table " + tableStyle + "><tr><th colspan='2'>" + this.location + "</th></tr><tr><th " + headerStyle + ">Hour</th><th>Cookies Sold</th></tr>";
        for (var hourly = 0; hourly < hours.length; hourly++) {
            HTML += "<tr><td>" + hours[hourly] + "</td><td>" + this.cookiesPerHour() + " cookies" + "</td></tr>";
            cookiesSold += this.cookiesPerHour();
        } 
        HTML += "<tr><td colspan='2'>" + "Total: " + cookiesSold + "</td></tr>" + "</table>";
        return HTML;
    }
}

var pearlDistrict = {
    location: "Pearl District",
    hoursOpen: hours,
    minCustomers: 3,
    maxCustomers: 24,
    avgSalesPerCust: 2.6,
    randomNumCustomers: function() {
        return  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    },
    cookiesPerHour: function() {
        return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
    },
    toHTML: function () {
        var cookiesSold = 0;
        var HTML = "<table " + tableStyle + "><tr><th colspan='2'>" + this.location + "</th></tr><tr><th " + headerStyle + ">Hour</th><th>Cookies Sold</th></tr>";
        for (var hourly = 0; hourly < hours.length; hourly++) {
            HTML += "<tr><td>" + hours[hourly] + "</td><td>" + this.cookiesPerHour() + " cookies" + "</td></tr>";
            cookiesSold += this.cookiesPerHour();
        } 
        HTML += "<tr><td colspan='2'>" + "Total: " + cookiesSold + "</td></tr>" + "</table>";
        return HTML;
    }
}

var storeLocation = [
    pioneerSquare,
    portlandAirport,
    washingtonSquare,
    sellwood,
    pearlDistrict,
]

var list = document.getElementById("store-locations");
for (var index = 0; index < storeLocation.length; index++) {
    list.innerHTML += storeLocation[index].toHTML();
    console.log("make a list of store locations");
}

