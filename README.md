# Project-1

Explanation of technologies used & approach taken

- HTML: the HTML portion of the game is fairly simple.  It is made up of 4 Divs and a Button element which are assigned classes & IDs to represent the different colored panels of the game. These are contained inside another Div for styling and JS behavioral control.

- CSS: the CSS was used most importantly to form the circular design of the game as well as adjust the size and placement of the panels and button.

- Javascript: first, the global variables were declared for use at the top of the page.  Then a function is written to generate the pattern of the game using a for loop and the Math.random function which will choose a random number and push it to an array to select a game panel.  Then a function is used to display the pattern generated by the previous function using a switch function to alternate the color of the panels that are selected by the generated pattern.  An if function is then utilized to compare the generated pattern with the user response pattern for length and value.  The user pattern is captured with an event listener along with an if/else which determines whether the game proceeds or is reverted to its default settings and starts over.  

- Installation instructions:
1. go to www.github.com and search for the username ajspotts
2. under repositories, choose "Project-1"
3. on the Project-1 page, click the button labeled "Clone or download" and copy the SSH key provided.
4. in your terminal, choose the directory where you would like to place the game.
5. use git clone followed by the SSH key to clone the game down to your local directory.
6. once you are in the directory where you have cloned the game, simply enter "open index.html" to open the game in your browser.

- Unsolved problems:
1. the user interface could have been more aesthetically pleasing.
2. a scoreboard to track user scores and high score was not created.
3. the dialogue between the UI and the user could be improved and styled better.

-User stories;
1. user is able to press the start button and view a randomly generated pattern.
2. user can respond to the game by repeating the generated pattern.
3. the game will inform the user whether they responded correctly or incorrectly.
4. the game will increase the difficulty for the user with each successive round if they win.
5. if they lose, the user will be sent back to the beginning of the game.
