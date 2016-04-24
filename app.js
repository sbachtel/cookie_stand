var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var pikePlace = {
  name: "Pike Place",
  minCustomer: 17,
  maxCustomer: 88,
  avgCookieSale: 5.2,
  hourlyCookieSales: [],
  totalCookieSales: 0 ,
  randNumber: function(maxCustomer, minCustomer) {
    return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
  },
  getHourlyCookieSales: function() {
    this.hourlyCookieSales=[];
    for (var i = 0; i < hours.length; i++){
      this.hourlyCookieSales.push(this.randNumber(this.maxCustomer, this.minCustomer) * this.avgCookieSale);
    }
  },
  getSum: function(){
      this.getHourlyCookieSales();
      this.totalCookieSales = this.hourlyCookieSales.reduce(function(a, b) {
        return a + b;
    });
    return this.totalCookieSales;
  },
  showItems: function(){
    var ulEl = document.createElement("ul");
    var keys = Object.keys(this);
    for (var i = 0; i < 6; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this[keys[i]];
      ulEl.appendChild(liEl);
    }
    sectionEl.appendChild(ulEl);
  }
};

var seaTac = {
  name: "SeaTac Airport",
  minCustomer: 6,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  hourlyCookieSales: [],
  totalCookieSales: 0,
  randNumber: function(maxCustomer, minCustomer){
    return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
  },
  getHourlyCookieSales: function(){
    this.hourlyCookieSales = [];
    for (var i = 0; i < hours.length; i++){
      this.hourlyCookieSales.push(this.randNumber(this.maxCustomer, this.minCustomer) * this.avgCookieSale);
    }
  },
  getSum: function(){
    this.getHourlyCookieSales();
    this.totalCookieSales = this.hourlyCookieSales.reduce(function(a,b){
      return a + b;
    });
    return this.totalCookieSales;
  },
  showItems: function(){
    var ulEl = document.createElement("ul");
    var keys = Object.keys(this);
    for (var i = 0; i < 6; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this[keys[i]];
      ulEl.appendChild(liEl);
    }
    sectionEl.appendChild(ulEl);
    }
  };


  var southcenter = {
    name: "Southcenter",
    minCustomer: 11,
    maxCustomer: 38,
    avgCookieSale: 1.9,
    hourlyCookieSales: [],
    totalCookieSales: 0,
    randNumber: function(maxCustomer, minCustomer){
      return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
    },
    getHourlyCookieSales: function(){
      this.hourlyCookieSales = [];
      for (var i = 0; i < hours.length; i++){
        this.hourlyCookieSales.push(this.randNumber(this.maxCustomer, this.minCustomer) * this.avgCookieSale);
      }
    },
    getSum: function(){
      this.getHourlyCookieSales();
      this.totalCookieSales = this.hourlyCookieSales.reduce(function(a,b){
        return a + b;
      });
      return this.totalCookieSales;
    },
    showItems: function(){
      var ulEl = document.createElement("ul");
      var keys = Object.keys(this);
      for (var i = 0; i < 6; i++){
        var liEl = document.createElement('li');
        liEl.textContent = this[keys[i]];
        ulEl.appendChild(liEl);
      }
      sectionEl.appendChild(ulEl);
     },
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
        this.hourlyCookieSales = [];
        for (var i = 0; i < hours.length; i++){
          this.hourlyCookieSales.push(this.randNumber(this.maxCustomer, this.minCustomer) * this.avgCookieSale);
        }
      },
      getSum: function(){
        this.getHourlyCookieSales();
        this.totalCookieSales = this.hourlyCookieSales.reduce(function(a,b){
          return a + b;
        });
        return this.totalCookieSales;
      },
      showItems: function(){
        var ulEl = document.createElement("ul");
        var keys = Object.keys(this);
        for (var i = 0; i < 6; i++){
          var liEl = document.createElement('li');
          liEl.textContent = this[keys[i]];
          ulEl.appendChild(liEl);
        }
        sectionEl.appendChild(ulEl);
        }
      };

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
          this.hourlyCookieSales = [];
          for (var i = 0; i < hours.length; i++){
            this.hourlyCookieSales.push(this.randNumber(this.maxCustomer, this.minCustomer) * this.avgCookieSale);
          }
        },
        getSum: function(){
          this.getHourlyCookieSales();
          this.totalCookieSales = this.hourlyCookieSales.reduce(function(a,b){
            return a + b;
          });
          return this.totalCookieSales;
        },
        showItems: function(){
          var ulEl = document.createElement("ul");
          var keys = Object.keys(this);
          for (var i = 0; i < 6; i++){
            var liEl = document.createElement('li');
            liEl.textContent = this[keys[i]];
            ulEl.appendChild(liEl);
          }
          sectionEl.appendChild(ulEl);
          }
        };
