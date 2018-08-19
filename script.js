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
if (placeTable) {
    for (var index = 0; index < shops.length; index++) {
    shops[index].makeTable(placeTable);
    }
}

function addNewShop() {
    var locName = document.getElementById("name").value;
    var minimum = document.getElementById("min").value;
    var maximum = document.getElementById("max").value;
    var averageSales = document.getElementById("average").value;
    shops.push(new shopLocation(locName, minimum, maximum, averageSales));
    console.log(locName, minimum, maximum, averageSales);
    event.preventDefault();
    shops[shops.length - 1].makeTable(placeTable);
}

var addShop = document.getElementById("submit");
addShop.addEventListener("click", addNewShop, false);
