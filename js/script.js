// Created by: Mark Palfi
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const lineA = document.getElementById("length1-of-triangle").value
  const lineB = document.getElementById("length2-of-triangle").value
  const lineC = document.getElementById("length3-of-triangle").value

 // line comaprasin
  if ((lineA == lineB) && (lineA == lineC) && (lineB == lineC)) {
    document.getElementById("type").innerHTML = "It's equilateral"
  }  else if (lineA != lineB && lineA != lineC && lineB != lineC) {
    document.getElementById("type").innerHTML = "It's scalene."
  }  else if (lineA = lineB && lineA != lineC && lineB != lineC) {
    document.getElementById("type").innerHTML = "you can see an G rated movie alone."
  }
}