var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var pikePlace = {
  minCustomer: 17,
  maxCustomer: 88,
  avgCookieSale: 5.2,
  hourlyCookieSales: [],
  totalCookieSales:[] ,
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
    this.totalCookieSales=[];
    for (var i = 0; i < hours.length; i++){
      this.totalCookieSales.push(this.hourlyCookieSales.reduce(totalCookieSales));
    }
  }
};
