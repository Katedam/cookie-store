var hours = ["10:00-11:00", "11:00-12:00", "12:00-1:00", "1:00-2:00", "2:00-3:00", "3:00-4:00", "4:00-5:00", "5:00-6:00"];

var pioneerSquare = {
    location: "Pioneer Square",
    hoursOpen: hours,
    minCustomers: 17,
    maxCustomers: 88,
    randomNumCustomers: function() {
        Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    }
}

var portlandAirport = {
    location: "Portland Airport",
    hoursOpen: hours,    
    minCustomers: 6,
    maxCustomers: 24,
    avgSalesPerCust: 1.2,
    randomNumCustomers: function() {
        return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    }
}

var washingtonSquare = {
    location: "Washington Square",
    hoursOpen: hours,
    minCustomers: 11,
    maxCustomers: 38,
    avgSalesPerCust: 1.9,
    randomNumCustomers: function() {
        Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    }
}

var sellwood = {
    location: "Sellwood",
    hoursOpen: hours,
    minCustomers: 20,
    maxCustomers: 48,
    avgSalesPerCust: 3.3,
    randomNumCustomers: function() {
        Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    }
}

var pearlDistrict = {
    location: "Pearl District",
    hoursOpen: hours,
    minCustomers: 3,
    maxCustomers: 24,
    avgSalesPerCust: 2.6,
    randomNumCustomers: function() {
        Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    }
}
