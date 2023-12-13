/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDays = 0;

let full = document.getElementById('full');
let half = document.getElementById('half');
let calculatedCost = document.getElementById('calculated-cost');
let clearButton = document.getElementById('clear-button');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];


const clicked  = (day) =>{
    day.classList.toggle("clicked");
    if(day.classList.contains("clicked")){
        numberOfDays= numberOfDays+1;
    }else{
        numberOfDays= numberOfDays-1;
    }
    updateCost();

};


daysOfWeek.forEach(day => {
    const currentDay = document.getElementById(day);
    if (currentDay) {
        currentDay.addEventListener('click', () => clicked (currentDay));
    }
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () =>{
    daysOfWeek.forEach(day => {
        const currentDay = document.getElementById(day);
        currentDay.classList.remove('clicked');
        numberOfDays = 0;
        calculatedCost.innerHTML = 0;
    });
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener('click', () => {

    if(full.classList.contains('clicked')){
        costPerDay = 20;
        full.classList.remove('clicked');
        half.classList.add('clicked');
    }
    else{
        costPerDay = 35;
        full.classList.add('clicked');
        half.classList.remove('clicked');
    }
    updateCost();
});

half.addEventListener('click', () => {

    if(half.classList.contains('clicked')){
        costPerDay = 35;
        half.classList.remove('clicked');
        full.classList.add('clicked');
    }
    else{
        costPerDay = 20;
        half.classList.add('clicked');
        full.classList.remove('clicked');
    }

    updateCost();
    
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const updateCost = () =>{
    calculatedCost.innerHTML = costPerDay*numberOfDays;
};
