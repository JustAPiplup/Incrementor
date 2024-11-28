// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var story = "Once upon a time, ";
var minus50Btn = document.getElementById("minus50");
var displayEl = document.getElementById("display");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var stringInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");
var randomSize = document.getElementById("random-size");
var resetBtn = document.getElementById("reset");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");

var toyBtn = document.getElementById("toy-btn");
var toyContainer = document.getElementById("toy-container");

// Event Listener
minus50Btn.addEventListener("click", minus50fcn);
minus10Btn.addEventListener("click", minus10fnc);
minus1Btn.addEventListener("click", minus1fcn);
plus1Btn.addEventListener("click", plus1fcn);
plus10Btn.addEventListener("click", plus10fnc);
plus50Btn.addEventListener("click", plus50fcn);
stringInEl.addEventListener("change", updateStory);
resetBtn.addEventListener("click", resetpage);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// Event Function
function minus50fcn() {
  // Update the value of the counter (JS)
  counter = counter - 50;
  console.log(counter);

  // Use the counter to update the website (HTML)
  displayEl.innerHTML = counter;
}

function minus10fnc() {
  // Update counter
  counter -= 10; // same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}

function minus1fcn() {
  // Update counter
  // counter = counter - 1 or counter -= 1 or
  counter--;

  // Update site
  displayEl.innerHTML = counter;
}

function plus1fcn() {
  // Update the value of the counter (JS)
  counter++;
  console.log(counter);

  // Use the counter to update the website (HTML)
  displayEl.innerHTML = counter;
}

function plus10fnc() {
  // Update counter
  counter += 10; // same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}

function plus50fcn() {
  // Update counter
  // counter = counter - 1 or counter -= 1 or
  counter = counter + 50;

  // Update site
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

function updateStory() {
  // Save the user's word to a variable
  var word = stringInEl.value;

  // Update the story variable (JS)
  story += word + " ";
  console.log(story);

  // Clear the input field
  stringInEl.value = "";

  // Update the site to show story
  storyEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);

function round1() {
  // Create random dec 0 - 1
  let rand = Math.random();

  // Round to 3 dec places
  rand = rand.toFixed(3);

  // Update site
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round3() {
  // -5 to 5
  // var rand = Math.random() * (5-(-5)) + (-5)
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  document.getElementById("rand3-out").innerHTML = rand;
}

// Random # from x to y:
// Math.random() * (y - x) + x

// E.g. If I want a random # from 1 to 3:
// var rand = Math.random() * (3 - 1) + 1

picBtn.addEventListener("click", addCandy);

function addCandy() {
  // Every click, add another candy to the container
  picContainer.innerHTML += "<img width='50px' src='images/Candy peach.jpg'>";
}

function round4() {
  var rand1 = document.getElementById("rand-in1").value;
  var rand2 = document.getElementById("rand-in2").value;

  rand11 = Math.round(rand1);
  rand22 = Math.round(rand2);

  var rand = Math.random() * (rand11 - rand22) + rand22;
  rand = rand.toFixed();

  document.getElementById("rand4-out").innerHTML = rand;
}

randomSize.addEventListener("click", sizeBtn);

function sizeBtn() {
  var size = Math.random() * 75;

  document.getElementById("the-body").style.fontSize = randomSize;
}

toyBtn.addEventListener("click", addToy);

function addToy() {
  // Every click, add another Toy to the container
  toyContainer.innerHTML +=
    "<img width='100px' src='images/GanRubiksCube.jpg'>";
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.

function resetpage() {
  var clear1 = `----------`;

  document.getElementById("rand1-out").innerHTML = clear1;

  var clear2 = `----------`;

  document.getElementById("rand2-out").innerHTML = clear2;

  var clear3 = `----------`;

  document.getElementById("rand3-out").innerHTML = clear3;

  var clear4 = `----------`;

  document.getElementById("rand4-out").innerHTML = clear4;

  var input1 = " ";
  document.getElementById("rand-in1").value = input1;
  var input2 = " ";
  document.getElementById("rand-in2").value = input2;

  var display = (document.getElementById("display").innerHTML = 0);
  document.getElementById("display").innerHTML = display;
}

// 5.Code the reset button. This Will reset all variables back to initial values and clear out all\
// Not allowed to use window.location.reload (which simple refreshes the page)

// 6. Create a button that when pressed, add an image of your favourit toy to the website

document.getElementById("random-size").addEventListener("click", size);

function size() {
  document.getElementById("the-body").style.fontSize = "30px";
}
