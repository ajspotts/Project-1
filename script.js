var green = $('#green'),
    red = $('red'),
    blue = $('blue'),
    yellow = $('yellow'),
    simonPattern = [],
    userPattern = [];

var generatePattern = function(){
  for (i=0;i<=3;i++) {
    var number = Math.random() * (4-1) + 1;
    number = Math.round(number);
    simonPattern.push(number);
  }
};
