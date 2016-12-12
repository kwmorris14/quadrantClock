var bbox, radii, svg, target;
var date = new Date();
var face;

function colorArc(arc){
  //TODO Correct colors
  switch(percentage){
    case (percentage <= 25 ):
    return "blue";
    break;
    case (percentage > 25 && percentage <= 50):
    return "green";
    break;
    case (percentage > 50 && percentage <= 75):
    return "yellow";
    break;
    case (percentage < 75):
    return "yellow";
    break;
  }
}

//Start: Objects===

//Box
var box = {};

//Clock Face
var face = {
  background: "black",
  radius: 200
};

//Year Object
var year = function(date) {
  this.fullYear = date.getFullYear(),
  getPercentage = function (fullYear) {
    return fullYear/100;
  },
  this.color = colorArc(getPercentage(this.fullYear))
};

//Month Object
var Month = function(date) {
  this.month = date.getDate(),
  this.getPercentage = function(month) {
    return month/12;
  },
  this.color = colorArc(getPercentage(month))
};

//Day Object
var day = function(date) {
  this.today = date.getDate(),
  this.year = date.getFullYear(),
  this.isLeapYear = function (year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
      {return true}
    else {return false;}
  },

  this.getPercentage = function (today) {
    if (isLeapYear(year)){
      return today/366;
    }
    else{return today/365};
  },

  this.color = colorArc(getPercentage(hour))
};

//Calendar Border
var bdr = {
  //TODO: Fix color
  color:"black",
  radius: 100,
}

//Hour Object
var hh = function(date) {
  this.hour = date.getHour(),
  this.getPercentage = function (hour) {
    return hour/24;
  },
  this.color = colorArc(getPercentage(hour))
};

//Minute Object
var mm = function(date) {
  this.minute = date.getMinutes(),
  this.getPercentage = function (minute) {
    return minute/60;
  },
 this.color = colorArc(getPercentage(minute))
};

//Second Object
var sec = function(date) {
  this.second = date.getSeconds(),
  this.getPercentage = function (second) {
    return second/60;
  },
  this.color = colorArc(getPercentage(second))
};

//Millisecond Object
var ms = function(date) {
  this.millisecond = date.getMilliseconds(),
  this.getPercentage = function (millisecond) {
    return millisecond/10;
  },
  this.color = colorArc(getPercentage(millisecond))
};

//Flashing second dot
var dot = function(date) {
  //TODO: correct colors
  this.second = date.getSeconds(),
  this.color = "orange",
  this.radius = 10,
  //Shows dot on even seconds
  this.isShown = function (second) {
    if (this.second % 2 == 0) {
      return true;
    }
    else{
      return false;
    }
  }
};

//End: Objects===


svg = d3.select('svg');
bbox = svg[0][0].getBoundingClientRect();

radii = [10, 30, 60, 90, 100, 140, 170, 190, 200];

target = svg.append('g')
    .attr('transform', "translate(" + (bbox.width / 2) + "," + (bbox.height / 2) + ")");

target.selectAll('circle')
    .data(radii)
  .enter().append('circle')
    .attr('r', function(d) {return d;});