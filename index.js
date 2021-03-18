/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let time = timeString.split(":")
  let hour = parseInt(time[0])

  if (hour < 12) {
    return "Good Morning"

  } else if (hour > 17) {
    return "Good Evening"

  } return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  //get element and inner html
  document.getElementById("greeting").innerText = msg
}