/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// variables for cost calculation
const costPerDayFull = 35;
const costPerDayHalf = 20;
let dailyRate = costPerDayFull;
let numDays = 0;
let totalCost = 0;

// variables for tracking selected days
const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let selectedDays = [];

// get elements
const dayButtons = document.querySelectorAll(".day-selector li");
const fullButton = document.querySelector("#full");
const halfButton = document.querySelector("#half");
const clearButton = document.querySelector("#clear-button");
const calculatedCost = document.querySelector("#calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayButtons.forEach(button => {
button.addEventListener("click", () => {
    if (button.classList.contains("clicked")) {
      // Remove the day from the list of selected days
    const index = selectedDays.indexOf(button.id);
    if (index !== -1) {
        selectedDays.splice(index, 1);
    }
      // Remove the "clicked" class from the button
    button.classList.remove("clicked");
    } else {
      // Add the day to the list of selected days
    selectedDays.push(button.id);
      // Add the "clicked" class to the button
    button.classList.add("clicked");
    }
    // Update the number of selected days and the total cost
    numDays = selectedDays.length;
    totalCost = numDays * dailyRate;
    calculatedCost.innerHTML = totalCost;
});
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", () => {
  // Remove the "clicked" class from all day buttons
dayButtons.forEach(button => {
    button.classList.remove("clicked");
});
  // Reset the selected days and total cost variables
selectedDays = [];
numDays = 0;
totalCost = 0;
calculatedCost.innerHTML = totalCost;
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener("click", () => {
dailyRate = costPerDayHalf;
halfButton.classList.add("clicked");
fullButton.classList.remove("clicked");
  totalCost = numDays * dailyRate;
calculatedCost.innerHTML = totalCost;
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener("click", () => {
dailyRate = costPerDayFull;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    totalCost = numDays * dailyRate;
    calculatedCost.innerHTML = totalCost;
});
