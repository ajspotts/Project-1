const FLASH_COUNT_DEFAULT = 3;
const FLASH_INTERVAL_DEFAULT = 1000; //Flash Interval controls how quickly the panel flashes
const FLASH_LENGTH_DEFAULT = 2000; //Flash Length controls how quickly the panels switch

//HTML elements used
var green = $('.green'),
    red = $('.red'),
    blue = $('.blue'),
    yellow = $('.yellow'),
//arrays to keep track of generated pattern and user's input pattern
    randomFlashingPattern = [],
    userClickedPattern = [],
//variables that control the length of the generated pattern and the speed of the game
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
//function that displays the generated pattern on the screen at a certain speed and length
function displayPattern() {
  for (var i=0;i<randomFlashingPattern.length;i++) {

    (function(i) {
      console.log('work');
      setTimeout(function() {
      var identifier = randomFlashingPattern[i];//set local variable 'identifier' to the value of the generated pattern at a given index
      //switch conditional to test what the value of 'identifier' is and 'flash' the related html element ('panel')
      switch (identifier) {
        case 1: //if id = 1 (green)
          $(green).css("background-color", "white");
          setTimeout(function(){
            $(green).css("background-color", "#0CF72B");
          }, flashInterval);
          break;
        case 2: //if id = 2 (red)
          $(red).css("background-color", "white");
          setTimeout(function(){
            $(red).css("background-color", "#FF0000");
          }, flashInterval);
          break;
        case 3: //if id = 3 (yellow)
          $(yellow).css("background-color", "white");
          setTimeout(function(){
            $(yellow).css("background-color", "#EEFF00");
          }, flashInterval);
          break;
        case 4: //if id = 4 (blue)
          $(blue).css("background-color", "white");
          setTimeout(function(){
            $(blue).css("background-color", "#0050FF");
          }, flashInterval);
          break;
        };
      }, flashLength * i);
    }(i));
  };
};
//function that compares user's pattern array and generated pattern array for equal length and identical value
function checkArrays(randomFlashingPattern, userClickedPattern){
  var message = true;
    for (var i = 0; i<= flashCount; i++)
    {
      if(randomFlashingPattern[i] !== userClickedPattern[i])
      {
        message = false; //if incorrect value is found, set variable 'message' to false, otherwise 'message' is true
      }
    }

    return message; //return message (false or true)
}
//event listener to react to each user's click on a panel
$('.panel').on('click', function() {
  var number = $(this).attr('id'); //identifies the ID of the panel clicked and sets it to variable 'number'
  userClickedPattern.push(eval(number)); //puts 'number' into array to track user's input pattern
  if(userClickedPattern.length == (flashCount + 1)){ //if user has input pattern of equal length as generated pattern, check for 'win'
    console.log('start check');
    var arraysCorrect = checkArrays(randomFlashingPattern, userClickedPattern); //runs function to compare arrays and decide whether to advance levels (increment difficulty variables) or to set variable back to beginning stage difficulty

    // If correct, increases the speed of the game
    if (arraysCorrect) {
      flashCount++;
      flashInterval -= 200;
      flashLength -= 400;
      alert('Correct')
    } else {
    // Else do not continue and reset to beginning
      flashCount = FLASH_COUNT_DEFAULT;
      flashInterval = FLASH_INTERVAL_DEFAULT;
      flashLength = FLASH_LENGTH_DEFAULT;
      alert('Incorrect, starting over')
    }
    setTimeout(goToNextLevel, 1000)

  }
});
//reset the game
var goToNextLevel = function() {
  randomFlashingPattern=[];
  userClickedPattern=[];
  generatePattern();
  displayPattern();
};

$('button').on('click', function() {
  randomFlashingPattern=[];
  userClickedPattern=[];
  generatePattern();
  displayPattern();
});
