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
    makeTable: function () {
        var cookiesSold = 0;
        var list = document.getElementById("store-locations");
        
        var newTable = document.createElement("table");
        newTable.setAttribute("class", "cookies");
        list.appendChild(newTable);

        var rowOne = document.createElement("tr");
        newTable.appendChild(rowOne);
        
        var newTh = document.createElement("th");
        newTh.setAttribute("colspan", "2");
        rowOne.appendChild(newTh);
        newTh.innerText = this.location

        var rowTwo = document.createElement("tr");
        newTable.appendChild(rowTwo);

        var tdOne = document.createElement("td");
        rowTwo.appendChild(tdOne);
        tdOne.innerText = "Hour";

        var tdTwo = document.createElement("td");
        rowTwo.appendChild(tdTwo);
        tdTwo.innerText = "Cookies Sold";

        for (var hourly = 0; hourly < hours.length; hourly++) {
            var hourlyCookies = this.cookiesPerHour();
            var hourlyRows = document.createElement("tr");
            newTable.appendChild(hourlyRows);
            var time = document.createElement("td");
            hourlyRows.appendChild(time);
            time.innerText = hours[hourly];
            var sales = document.createElement("td");
            hourlyRows.appendChild(sales);
            sales.innerText = hourlyCookies;
            cookiesSold += hourlyCookies;
        }
        var totalRow = document.createElement("tr");
        newTable.appendChild(totalRow);
        totalRow.innerText = "Total: " + cookiesSold;
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
    makeTable: function () {
        var cookiesSold = 0;
        var list = document.getElementById("store-locations");
        
        var newTable = document.createElement("table");
        newTable.setAttribute("class", "cookies");
        list.appendChild(newTable);

        var rowOne = document.createElement("tr");
        newTable.appendChild(rowOne);
        
        var newTh = document.createElement("th");
        newTh.setAttribute("colspan", "2");
        rowOne.appendChild(newTh);
        newTh.innerText = this.location

        var rowTwo = document.createElement("tr");
        newTable.appendChild(rowTwo);

        var tdOne = document.createElement("td");
        rowTwo.appendChild(tdOne);
        tdOne.innerText = "Hour";

        var tdTwo = document.createElement("td");
        rowTwo.appendChild(tdTwo);
        tdTwo.innerText = "Cookies Sold";

        for (var hourly = 0; hourly < hours.length; hourly++) {
            var hourlyCookies = this.cookiesPerHour();
            var hourlyRows = document.createElement("tr");
            newTable.appendChild(hourlyRows);
            var time = document.createElement("td");
            hourlyRows.appendChild(time);
            time.innerText = hours[hourly];
            var sales = document.createElement("td");
            hourlyRows.appendChild(sales);
            sales.innerText = hourlyCookies;
            cookiesSold += hourlyCookies;
        }
        var totalRow = document.createElement("tr");
        newTable.appendChild(totalRow);
        totalRow.innerText = "Total: " + cookiesSold;
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
    makeTable: function () {
        var cookiesSold = 0;
        var list = document.getElementById("store-locations");
        
        var newTable = document.createElement("table");
        newTable.setAttribute("class", "cookies");
        list.appendChild(newTable);

        var rowOne = document.createElement("tr");
        newTable.appendChild(rowOne);
        
        var newTh = document.createElement("th");
        newTh.setAttribute("colspan", "2");
        rowOne.appendChild(newTh);
        newTh.innerText = this.location

        var rowTwo = document.createElement("tr");
        newTable.appendChild(rowTwo);

        var tdOne = document.createElement("td");
        rowTwo.appendChild(tdOne);
        tdOne.innerText = "Hour";

        var tdTwo = document.createElement("td");
        rowTwo.appendChild(tdTwo);
        tdTwo.innerText = "Cookies Sold";

        for (var hourly = 0; hourly < hours.length; hourly++) {
            var hourlyCookies = this.cookiesPerHour();
            var hourlyRows = document.createElement("tr");
            newTable.appendChild(hourlyRows);
            var time = document.createElement("td");
            hourlyRows.appendChild(time);
            time.innerText = hours[hourly];
            var sales = document.createElement("td");
            hourlyRows.appendChild(sales);
            sales.innerText = hourlyCookies;
            cookiesSold += hourlyCookies;
        }
        var totalRow = document.createElement("tr");
        newTable.appendChild(totalRow);
        totalRow.innerText = "Total: " + cookiesSold;
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
    makeTable: function () {
        var cookiesSold = 0;
        var list = document.getElementById("store-locations");
        
        var newTable = document.createElement("table");
        newTable.setAttribute("class", "cookies");
        list.appendChild(newTable);

        var rowOne = document.createElement("tr");
        newTable.appendChild(rowOne);
        
        var newTh = document.createElement("th");
        newTh.setAttribute("colspan", "2");
        rowOne.appendChild(newTh);
        newTh.innerText = this.location

        var rowTwo = document.createElement("tr");
        newTable.appendChild(rowTwo);

        var tdOne = document.createElement("td");
        rowTwo.appendChild(tdOne);
        tdOne.innerText = "Hour";

        var tdTwo = document.createElement("td");
        rowTwo.appendChild(tdTwo);
        tdTwo.innerText = "Cookies Sold";

        for (var hourly = 0; hourly < hours.length; hourly++) {
            var hourlyCookies = this.cookiesPerHour();
            var hourlyRows = document.createElement("tr");
            newTable.appendChild(hourlyRows);
            var time = document.createElement("td");
            hourlyRows.appendChild(time);
            time.innerText = hours[hourly];
            var sales = document.createElement("td");
            hourlyRows.appendChild(sales);
            sales.innerText = hourlyCookies;
            cookiesSold += hourlyCookies;
        }
        var totalRow = document.createElement("tr");
        newTable.appendChild(totalRow);
        totalRow.innerText = "Total: " + cookiesSold;
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
    makeTable: function () {
        var cookiesSold = 0;
        var list = document.getElementById("store-locations");
        
        var newTable = document.createElement("table");
        newTable.setAttribute("class", "cookies");
        list.appendChild(newTable);

        var rowOne = document.createElement("tr");
        newTable.appendChild(rowOne);
        
        var newTh = document.createElement("th");
        newTh.setAttribute("colspan", "2");
        rowOne.appendChild(newTh);
        newTh.innerText = this.location

        var rowTwo = document.createElement("tr");
        newTable.appendChild(rowTwo);

        var tdOne = document.createElement("td");
        rowTwo.appendChild(tdOne);
        tdOne.innerText = "Hour";

        var tdTwo = document.createElement("td");
        rowTwo.appendChild(tdTwo);
        tdTwo.innerText = "Cookies Sold";

        for (var hourly = 0; hourly < hours.length; hourly++) {
            var hourlyCookies = this.cookiesPerHour();
            var hourlyRows = document.createElement("tr");
            newTable.appendChild(hourlyRows);
            var time = document.createElement("td");
            hourlyRows.appendChild(time);
            time.innerText = hours[hourly];
            var sales = document.createElement("td");
            hourlyRows.appendChild(sales);
            sales.innerText = hourlyCookies;
            cookiesSold += hourlyCookies;
        }
        var totalRow = document.createElement("tr");
        newTable.appendChild(totalRow);
        totalRow.innerText = "Total: " + cookiesSold;     
    }
}

    pioneerSquare.makeTable();
    portlandAirport.makeTable();
    washingtonSquare.makeTable();
    sellwood.makeTable();
    pearlDistrict.makeTable(); 

// toHTML: function () {
    //     var cookiesSold = 0;
    //     var HTML = "<table><tr><th colspan='2'>" + this.location + "</th></tr><tr><th>Hour</th><th>Cookies Sold</th></tr>";
    //     
    //         HTML += "<tr><td>" + hours[hourly] + "</td><td>" + hourlyCookies + " cookies" + "</td></tr>";
    //         cookiesSold += hourlyCookies;
    //     } 
    //     HTML += "<tr><td colspan='2'>" + "Total: " + cookiesSold + "</td></tr>" + "</table>";
    //     return HTML;
    // }


// var storeLocation = [
//     pioneerSquare,
//     portlandAirport,
//     washingtonSquare,
//     sellwood,
//     pearlDistrict,
// ]



// for (var index = 0; index < storeLocation.length; index++) {
//     list.innerHTML += storeLocation[index].toHTML();
//     console.log("make a list of store locations");
// }

