
var hours = ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac Airport', 6, 24, 1.2);
var southcenter = new Store('Southcenter', 11, 38, 1.9);
var bellevue = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);
var shops = [];
var tbl;

function Store (name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  //this.id = name.replace(' ','').toLowerCase();
  this.hourlyCookieSales = [];
  this.totalCookieSales = 0;
  //shops.push(this);//not sure about this part

  //Store.getHourlyCookieSales(this);
  //Store.renderStore(tbl,this);
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

var tableOne = document.getElementById('myTable');
var rowTr = document.createElement('tr');
var emptyCell = document.createElement('th');
var totalTitle = document.createElement('th');

emptyCell.textContent = 'Stores';
totalTitle.textContent = 'Total';
tableOne.appendChild(rowTr);
rowTr.appendChild(emptyCell);

for (var i = 0; i < hours.length; i++){
  var thHours = document.createElement('th');
  thHours.textContent = hours[i];
  rowTr.appendChild(thHours);
}
rowTr.appendChild(totalTitle);

Store.prototype.render = function(){
  this.getHourlyCookieSales();
  var rowTr2 = document.createElement('tr');
  var tdStores = document.createElement('td');
  tdStores.appendChild(document.createTextNode(this.name));
  rowTr2.appendChild(tdStores);
  tableOne.appendChild(rowTr2);

  for (var i = 0; i < hours.length; i++){
    var dataTd = document.createElement('td');
    dataTd.textContent = this.hourlyCookieSales[i];
    rowTr2.appendChild(dataTd);
  }

  var dataTotals = document.createElement('td');
  dataTotals.textContent = this.totalCookieSales;
  rowTr2.appendChild(dataTotals);
};

Store.renderNew = function(obj){
  var newTrRow = document.createElement('tr');
  var newNameTd = document.createElement('td');
  newNameTd.textContent = obj.name;
  newTrRow.appendChild(newNameTd);

  for(hour in hours) {
    var salesTd = document.createElement('td');
    salesTd.textContent = obj.hourlyCookieSales[hour];
    newTrRow.appendChild(salesTd);
  }
  var newTotalTd =  document.createElement('td');
  newTotalTd.textContent = obj.totalCookieSales;
  newTrRow.appendChild(newTotalTd);
  tableOne.appendChild(newTrRow);
};

var formEl = document.getElementById('myForm');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  var newStoreName = event.target.storeName.value;
  var newMinCust = parseInt(event.target.minCust.value);
  var newMaxCust = parseInt(event.target.maxCust.value);
  var newAvgSold = parseFloat(event.target.avgSold.value);
  var newShop = new Store(newStoreName, newMinCust, newMaxCust, newAvgSold);
  newShop.getHourlyCookieSales();
  Store.renderNew(newShop);
  formEl.reset();
});

pikePlace.render();
seaTac.render();
southcenter.render();
bellevue.render();
alki.render();
