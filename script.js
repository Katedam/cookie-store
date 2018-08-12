var hours = ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

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
        var HTML = "<table><tr><th colspan='2'>" + this.location + "</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>";
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
        var HTML = "<table><tr><th colspan='2'>" + this.location + "</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>";
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
        var HTML = "<table><tr><th colspan='2'>" + this.location + "</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>";
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
        var HTML = "<table><tr><th colspan='2'>" + this.location + "</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>";
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
        var HTML = "<table><tr><th colspan='2'>" + this.location + "</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>";
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

