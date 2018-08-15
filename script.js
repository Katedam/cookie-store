var hours = ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

var shopLocation = function(location, minCustomers, maxCustomers, avgSalesPerCust) {
    this.location = location,
    this.minCustomers = minCustomers,
    this.maxCustomers = maxCustomers,
    this.avgSalesPerCust = avgSalesPerCust,
    this.randomNumCustomers = function() {
        return  Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    };
    this.cookiesPerHour = function() {
        return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
    };

    this.makeTable = function(table) {
        var cookiesSold = 0;
        var newTable = document.createElement("table");
        newTable.setAttribute("class", "cookies");
        console.log(table);
        var body = document.createElement("tbody");
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.setAttribute("colspan", "2");
        cell.innerText = this.location;
        row.appendChild(cell);
        body.appendChild(row);

        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerText = "Hour";
        row.appendChild(cell);

        cell = document.createElement("td");
        cell.innerText = "Cookies Sold";
        row.appendChild(cell);
        body.appendChild(row);

        for (var hourly = 0; hourly < hours.length; hourly++) {
            var hourlyCookies = this.cookiesPerHour();
            row = document.createElement("tr");
            cell = document.createElement("td");
            cell.innerText = hours[hourly];                
            row.appendChild(cell);

            cell = document.createElement("td");
            cell.innerText = hourlyCookies;
            row.appendChild(cell);
            body.appendChild(row);
            cookiesSold += hourlyCookies;
        }
        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerText = "Total: ";
        row.appendChild(cell);

        cell = document.createElement("td");
        cell.innerText = cookiesSold;
        row.appendChild(cell);

        body.appendChild(row);
        newTable.appendChild(body);
        table.appendChild(newTable);
    }
}

var shops = [];
shops.push(new shopLocation("Pioneer Square", 17, 88, 5.2));
shops.push(new shopLocation("Portland Airport", 6, 24, 1.2));
shops.push(new shopLocation("Washington Square", 11, 38, 1.9));
shops.push(new shopLocation("Sellwood", 20, 48, 3.3));
shops.push(new shopLocation("Pearl District", 3, 24, 2.6));

var placeTable = document.getElementById("store-locations");
for (var index = 0; index < shops.length; index++) {
    shops[index].makeTable(placeTable);
}


// var pioneerSquare = {
//     location: "Pioneer Square",
//     hoursOpen: hours,
//     minCustomers: 17,
//     maxCustomers: 88,
//     avgSalesPerCust: 5.2,
//     randomNumCustomers: function() {
//       return  Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
//     },
//     cookiesPerHour: function() {
//         return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
//     },
//     makeTable: function () {
//         var cookiesSold = 0;
//         var list = document.getElementById("store-locations");
        
//         var newTable = document.createElement("table");
//         newTable.setAttribute("class", "cookies");
//         list.appendChild(newTable);

//         var rowOne = document.createElement("tr");
//         newTable.appendChild(rowOne);
        
//         var newTh = document.createElement("th");
//         newTh.setAttribute("colspan", "2");
//         rowOne.appendChild(newTh);
//         newTh.innerText = this.location

//         var rowTwo = document.createElement("tr");
//         newTable.appendChild(rowTwo);

//         var tdOne = document.createElement("td");
//         rowTwo.appendChild(tdOne);
//         tdOne.innerText = "Hour";

//         var tdTwo = document.createElement("td");
//         rowTwo.appendChild(tdTwo);
//         tdTwo.innerText = "Cookies Sold";

//         for (var hourly = 0; hourly < hours.length; hourly++) {
//             var hourlyCookies = this.cookiesPerHour();
//             var hourlyRows = document.createElement("tr");
//             newTable.appendChild(hourlyRows);
//             var time = document.createElement("td");
//             hourlyRows.appendChild(time);
//             time.innerText = hours[hourly];
//             var sales = document.createElement("td");
//             hourlyRows.appendChild(sales);
//             sales.innerText = hourlyCookies;
//             cookiesSold += hourlyCookies;
//         }
//         var totalRow = document.createElement("tr");
//         newTable.appendChild(totalRow);
//         totalRow.innerText = "Total: " + cookiesSold;
//     }
// }

// var portlandAirport = {
//     location: "Portland Airport",
//     hoursOpen: hours,    
//     minCustomers: 6,
//     maxCustomers: 24,
//     avgSalesPerCust: 1.2,
//     randomNumCustomers: function() {
//         return  Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
//     },
//     cookiesPerHour: function() {
//         return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
//     },
//     makeTable: function () {
//         var cookiesSold = 0;
//         var list = document.getElementById("store-locations");
        
//         var newTable = document.createElement("table");
//         newTable.setAttribute("class", "cookies");
//         list.appendChild(newTable);

//         var rowOne = document.createElement("tr");
//         newTable.appendChild(rowOne);
        
//         var newTh = document.createElement("th");
//         newTh.setAttribute("colspan", "2");
//         rowOne.appendChild(newTh);
//         newTh.innerText = this.location

//         var rowTwo = document.createElement("tr");
//         newTable.appendChild(rowTwo);

//         var tdOne = document.createElement("td");
//         rowTwo.appendChild(tdOne);
//         tdOne.innerText = "Hour";

//         var tdTwo = document.createElement("td");
//         rowTwo.appendChild(tdTwo);
//         tdTwo.innerText = "Cookies Sold";

//         for (var hourly = 0; hourly < hours.length; hourly++) {
//             var hourlyCookies = this.cookiesPerHour();
//             var hourlyRows = document.createElement("tr");
//             newTable.appendChild(hourlyRows);
//             var time = document.createElement("td");
//             hourlyRows.appendChild(time);
//             time.innerText = hours[hourly];
//             var sales = document.createElement("td");
//             hourlyRows.appendChild(sales);
//             sales.innerText = hourlyCookies;
//             cookiesSold += hourlyCookies;
//         }
//         var totalRow = document.createElement("tr");
//         newTable.appendChild(totalRow);
//         totalRow.innerText = "Total: " + cookiesSold;
//     }
// }

// var washingtonSquare = {
//     location: "Washington Square",
//     hoursOpen: hours,
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgSalesPerCust: 1.9,
//     randomNumCustomers: function() {
//         return  Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
//     },
//     cookiesPerHour: function() {
//         return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
//     },
//     makeTable: function () {
//         var cookiesSold = 0;
//         var list = document.getElementById("store-locations");
        
//         var newTable = document.createElement("table");
//         newTable.setAttribute("class", "cookies");
//         list.appendChild(newTable);

//         var rowOne = document.createElement("tr");
//         newTable.appendChild(rowOne);
        
//         var newTh = document.createElement("th");
//         newTh.setAttribute("colspan", "2");
//         rowOne.appendChild(newTh);
//         newTh.innerText = this.location

//         var rowTwo = document.createElement("tr");
//         newTable.appendChild(rowTwo);

//         var tdOne = document.createElement("td");
//         rowTwo.appendChild(tdOne);
//         tdOne.innerText = "Hour";

//         var tdTwo = document.createElement("td");
//         rowTwo.appendChild(tdTwo);
//         tdTwo.innerText = "Cookies Sold";

//         for (var hourly = 0; hourly < hours.length; hourly++) {
//             var hourlyCookies = this.cookiesPerHour();
//             var hourlyRows = document.createElement("tr");
//             newTable.appendChild(hourlyRows);
//             var time = document.createElement("td");
//             hourlyRows.appendChild(time);
//             time.innerText = hours[hourly];
//             var sales = document.createElement("td");
//             hourlyRows.appendChild(sales);
//             sales.innerText = hourlyCookies;
//             cookiesSold += hourlyCookies;
//         }
//         var totalRow = document.createElement("tr");
//         newTable.appendChild(totalRow);
//         totalRow.innerText = "Total: " + cookiesSold;
//     }
// }


// var sellwood = {
//     location: "Sellwood",
//     hoursOpen: hours,
//     minCustomers: 20,
//     maxCustomers: 48,
//     avgSalesPerCust: 3.3,
//     randomNumCustomers: function() {
//         return  Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
//     },
//     cookiesPerHour: function() {
//         return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
//     },
//     makeTable: function () {
//         var cookiesSold = 0;
//         var list = document.getElementById("store-locations");
        
//         var newTable = document.createElement("table");
//         newTable.setAttribute("class", "cookies");
//         list.appendChild(newTable);

//         var rowOne = document.createElement("tr");
//         newTable.appendChild(rowOne);
        
//         var newTh = document.createElement("th");
//         newTh.setAttribute("colspan", "2");
//         rowOne.appendChild(newTh);
//         newTh.innerText = this.location

//         var rowTwo = document.createElement("tr");
//         newTable.appendChild(rowTwo);

//         var tdOne = document.createElement("td");
//         rowTwo.appendChild(tdOne);
//         tdOne.innerText = "Hour";

//         var tdTwo = document.createElement("td");
//         rowTwo.appendChild(tdTwo);
//         tdTwo.innerText = "Cookies Sold";

//         for (var hourly = 0; hourly < hours.length; hourly++) {
//             var hourlyCookies = this.cookiesPerHour();
//             var hourlyRows = document.createElement("tr");
//             newTable.appendChild(hourlyRows);
//             var time = document.createElement("td");
//             hourlyRows.appendChild(time);
//             time.innerText = hours[hourly];
//             var sales = document.createElement("td");
//             hourlyRows.appendChild(sales);
//             sales.innerText = hourlyCookies;
//             cookiesSold += hourlyCookies;
//         }
//         var totalRow = document.createElement("tr");
//         newTable.appendChild(totalRow);
//         totalRow.innerText = "Total: " + cookiesSold;
//     }
// }


// var pearlDistrict = {
//     location: "Pearl District",
//     hoursOpen: hours,
//     minCustomers: 3,
//     maxCustomers: 24,
//     avgSalesPerCust: 2.6,
//     randomNumCustomers: function() {
//         return  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//     },
//     cookiesPerHour: function() {
//         return Math.floor(this.randomNumCustomers() * this.avgSalesPerCust);
//     },
//     makeTable: function () {
//         var cookiesSold = 0;
//         var list = document.getElementById("store-locations");
        
//         var newTable = document.createElement("table");
//         newTable.setAttribute("class", "cookies");
//         list.appendChild(newTable);

//         var rowOne = document.createElement("tr");
//         newTable.appendChild(rowOne);
        
//         var newTh = document.createElement("th");
//         newTh.setAttribute("colspan", "2");
//         rowOne.appendChild(newTh);
//         newTh.innerText = this.location

//         var rowTwo = document.createElement("tr");
//         newTable.appendChild(rowTwo);

//         var tdOne = document.createElement("td");
//         rowTwo.appendChild(tdOne);
//         tdOne.innerText = "Hour";

//         var tdTwo = document.createElement("td");
//         rowTwo.appendChild(tdTwo);
//         tdTwo.innerText = "Cookies Sold";

//         for (var hourly = 0; hourly < hours.length; hourly++) {
//             var hourlyCookies = this.cookiesPerHour();
//             var hourlyRows = document.createElement("tr");
//             newTable.appendChild(hourlyRows);
//             var time = document.createElement("td");
//             hourlyRows.appendChild(time);
//             time.innerText = hours[hourly];
//             var sales = document.createElement("td");
//             hourlyRows.appendChild(sales);
//             sales.innerText = hourlyCookies;
//             cookiesSold += hourlyCookies;
//         }
//         var totalRow = document.createElement("tr");
//         newTable.appendChild(totalRow);
//         totalRow.innerText = "Total: " + cookiesSold;     
//     }
// }

//   /*   pioneerSquare.makeTable();
//     portlandAirport.makeTable();
//     washingtonSquare.makeTable();
//     sellwood.makeTable();
//     pearlDistrict.makeTable();  */
// }