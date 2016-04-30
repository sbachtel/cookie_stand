var hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac Airport', 6, 24, 1.2);
var southcenter = new Store('Southcenter', 11, 38, 1.9);
var bellevue = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

function Store (name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.hourlyCookieSales = [];
  this.totalCookieSales = 0;
}

Store.prototype.randNumber = function(max, min){
  return Math.random() * (max - min) + min;
};

Store.prototype.getHourlyCookieSales = function() {
  for (var i = 0; i < hours.length; i++){
    var cookies = Math.floor(this.randNumber(this.maxCustomer, this.minCustomer) * this.avgCookieSale);
    this.hourlyCookieSales.push(cookies);
    this.totalCookieSales += cookies;
  }
};

Store.prototype.render = function(){
  this.getHourlyCookieSales();
  var trEl = document.createElement("tr");
  trEl.appendChild(document.createTextNode(this.name));
  var tableEl = document.getElementById('myInfoList').appendChild(trEl);
    for (var i = 0; i < hours.length; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.hourlyCookieSales[i];
      trEl.appendChild(tdEl);
    }
  var tdEl_two =  document.createElement('td');
  tdEl_two.textContent = "Total: " + this.totalCookieSales;
  trEl.appendChild(tdEl_two);

};

pikePlace.render();
seaTac.render();
southcenter.render();
bellevue.render();
alki.render();
