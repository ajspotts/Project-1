const FLASH_COUNT_DEFAULT = 3;
const FLASH_INTERVAL_DEFAULT = 1000;
const FLASH_LENGTH_DEFAULT = 2000;

var green = $('.green'),
    red = $('.red'),
    blue = $('.blue'),
    yellow = $('.yellow'),
    randomFlashingPattern = [],
    userClickedPattern = [],
    flashCount = FLASH_COUNT_DEFAULT,
    flashInterval = FLASH_INTERVAL_DEFAULT,
    flashLength = FLASH_LENGTH_DEFAULT;

var generatePattern = function(){
  // 3 Here is static and should be a variable that gets incremented each time the game is played
  for (i=0;i<=flashCount;i++) {
    // Pick random tile to flash
    var number = Math.random() * (4-1) + 1; // Random between tile 1 and 4
    number = Math.round(number);
    randomFlashingPattern.push(number);
  }
};

function displayPattern() {
  for (var i=0;i<randomFlashingPattern.length;i++) {
    // setTimeout(flashLength * i).then(function() {
    //
    // })
    (function(i) {
      console.log('work');
      setTimeout(function() {
      var identifier = randomFlashingPattern[i];
      switch (identifier) {
        case 1:
          $(green).css("background-color", "white");
          setTimeout(function(){
            $(green).css("background-color", "green");
          }, flashInterval);
          break;
        case 2:
          $(red).css("background-color", "white");
          setTimeout(function(){
            $(red).css("background-color", "red");
          }, flashInterval);
          break;
        case 3:
          $(yellow).css("background-color", "white");
          setTimeout(function(){
            $(yellow).css("background-color", "yellow");
          }, flashInterval);
          break;
        case 4:
          $(blue).css("background-color", "white");
          setTimeout(function(){
            $(blue).css("background-color", "blue");
          }, flashInterval);
          break;
        };
      }, flashLength * i);
    }(i));
  };
};

function checkArrays(randomFlashingPattern, userClickedPattern){
  var message = true;
    for (var i = 0; i<= flashCount; i++)
    {
      if(randomFlashingPattern[i] !== userClickedPattern[i])
      {
        message = false;
      }
    }

    return message;
}

$('.panel').on('click', function() {
  var number = $(this).attr('id');
  userClickedPattern.push(eval(number));
  if(userClickedPattern.length == (flashCount + 1)){
    console.log('start check');
    var arraysCorrect = checkArrays(randomFlashingPattern, userClickedPattern);

    // Continue if below
    if (arraysCorrect) {
      flashCount++;
      flashInterval -= 200;
      flashLength -= 200;
      alert('Correct')
    } else {
    // Else do not continue and reset to beginning
      flashCount = FLASH_COUNT_DEFAULT;
      flashInterval = FLASH_INTERVAL_DEFAULT;
      flashLength = FLASH_LENGTH_DEFAULT;
      alert('Incorrect, starting over')
    }


  }
});

$('button').on('click', function() {
  randomFlashingPattern=[];
  userClickedPattern=[];
  generatePattern();
  displayPattern();
});
