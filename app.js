var hours = ["10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

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

  var tdEl_two = document.createElement('td');
  tdEl_two.textContent = "Total: " + this.totalCookieSales;
  trEl.appendChild(tdEl_two);

  var thOne = document.createElement('th');
  var thTwo = document.createElement('th');
  var thThree = document.createElement('th');

  thOne.appendChild(document.createTextNode('Stores'));
  thThree.appendChild(document.createTextNode('Totals'));
    for(var i = 0; i < hours.length - 1; i++){
        thTwo.appendChild(document.createTextNode(hours[i]));
  }

  trEl.appendChild(thOne);
  trEl.appendChild(thTwo);
  trEl.appendChild(thThree);

};
var formEl = document.getElementById('myForm');
var inputSN = document.getElementById('storeName');
var inputMin = document.getElementById('minCust');
var inputMax = document.getElementById('maxCust');
var inputAvg = document.getElementById('avgSold');
 tableEl = document.getElementById('myTable');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  var trEl = document.createElement('tr');
  var tdOne = document.createElement('td');
  var tdTwo = document.createElement('td');
  var tdThree = document.createElement('td');
  var tdFour = document.createElement('td');

});





pikePlace.render();
seaTac.render();
southcenter.render();
bellevue.render();
alki.render();
