var pikePlace = {
  minCustomer: 17,
  maxCustomer: 88,
  avgCookieSale: 5.2,
  hours: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  hourlyCookieSales: [],
  randNumber: function(maxCustomer, minCustomer){
    return Math.floor(Math.random()*(this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  getHourlyCookies: function() {
    for(var i = 0; this.hours.length; i++){
      var cookiesAnHour = this.randNumber(this.maxCustomer, this.minCustomer) * this.avgCookieSale;
      this.hourlyCookieSales.push(cookiesAnHour);
    }
  }
}
