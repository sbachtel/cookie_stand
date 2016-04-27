var hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ",];
var pikePlace = {
  name: "Pike Place",
  minCustomer: 17,
  maxCustomer: 88,
  avgCookieSale: 5.2,
  hourlyCookieSales: [],
  totalCookieSales: 0 ,
  randNumber: function(max, min) {
    return Math.random() * (max - min) + min;
  },
  getHourlyCookieSales: function(arr, totals, avg, rand, hour) {
    for (var i = 0; i < hour.length; i++){
      var cookies = Math.floor(this.randNumber(this.maxCustomer, this.minCustomer) * avg);
      arr.push(cookies);
      this.totalCookieSales += cookies;
    }
  },
  render: function(){
    this.getHourlyCookieSales(this.hourlyCookieSales, this.totalCookieSales, this.avgCookieSale, this.randNumber, hours);
    var ulEl = document.createElement("ul");
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('pikeList').appendChild(ulEl);
      for (var i = 0; i < hours.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + this.hourlyCookieSales[i];
        ulEl.appendChild(liEl);
      }
      var liEl_two =  document.createElement('li');
      liEl_two.textContent = "Total: " + this.totalCookieSales;
      ulEl.appendChild(liEl_two);
    }
};


var seaTac = {
  name: "SeaTac Airport",
  minCustomer: 6,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  hourlyCookieSales: [],
  totalCookieSales: 0,
  randNumber: function(max, min){
    return Math.random() * (max - min) + min;
  },
  getHourlyCookieSales: function(arr, totals, avg, rand, hour){
    for (var i = 0; i < hour.length; i++){
      var cookies = Math.floor(this.randNumber(this.maxCustomer,this.minCustomer) * avg);
      arr.push(cookies);
      this.totalCookieSales += cookies;
    }
  },
  render: function(){
    this.getHourlyCookieSales(this.hourlyCookieSales, this.totalCookieSales, this.avgCookieSale, this.randNumber,hours);
    var ulEl = document.createElement("ul");
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('seaTacList').appendChild(ulEl);
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourlyCookieSales[i];
      ulEl.appendChild(liEl);
    }
    var liEl_two = document.createElement('li');
    liEl_two.textContent = "Total: " + this.totalCookieSales;
    ulEl.appendChild(liEl_two);
  }
};


  var southcenter = {
    name: "Southcenter",
    minCustomer: 11,
    maxCustomer: 38,
    avgCookieSale: 1.9,
    hourlyCookieSales: [],
    totalCookieSales: 0,
    randNumber: function(max, min){
      return Math.random() * (max - min) + min;
    },
    getHourlyCookieSales: function(arr, totals, avg, rand, hour){
      for (var i = 0; i < hour.length; i++){
        var cookies = Math.floor(this.randNumber(this.maxCustomer,this.minCustomer) * avg);
        arr.push(cookies);
        this.totalCookieSales += cookies;
      }
    },
    render: function(){
      this.getHourlyCookieSales(this.hourlyCookieSales,this.totalCookieSales, this.avgCookieSale, this.randNumber, hours);
      var ulEl = document.createElement('ul');
      ulEl.appendChild(document.createTextNode(this.name));
      var sectionEl = document.getElementById('southCenterList').appendChild(ulEl);
      for (var i = 0; i < hours.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + this.hourlyCookieSales[i];
        ulEl.appendChild(liEl);
      }
      var liEl_two = document.createElement('li');
      liEl_two.textContent = "Total: " + this.totalCookieSales;
      ulEl.appendChild(liEl_two);
    }
  };

    var bellevue = {
      name: "Bellevue Square",
      minCustomer: 20,
      maxCustomer: 48,
      avgCookieSale: 3.3,
      hourlyCookieSales: [],
      totalCookieSales: 0,
      randNumber: function(maxCustomer, minCustomer){
        return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
      },
      getHourlyCookieSales: function(){
        for (var i = 0; i < hours.length; i++){
          var cookies = this.randNumber(this.maxCustomer, this.minCustomer) * this.avgCookieSale;
          this.hourlyCookieSales.push(cookies);
          this.totalCookieSales += cookies;
        }
      }
    }

      var alki = {
        name: "Alki",
        minCustomer: 3,
        maxCustomer: 24,
        avgCookieSale: 2.6,
        hourlyCookieSales: [],
        totalCookieSales: 0,
        randNumber: function(maxCustomer, minCustomer){
          return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
        },
        getHourlyCookieSales: function(){
          for (var i = 0; i < hours.length; i++){
            var cookies = this.randNumber(this.maxCustomer, this.minCustomer) * this.avgCookieSale;
            this.hourlyCookieSales.push(cookies);
            this.totalCookieSales += cookies;
          }
        }
      }
//pikePlace.render();
var stores = [
  pikePlace, seaTac,
];
for (var k = 0; k < stores.length; k++) {
  stores[k].render();
}
