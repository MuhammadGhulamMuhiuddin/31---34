// const currentDate = new Date();

// Check if the day of the month is less than 16
// if (currentDate.getDate() < 16) {
//     console.log("First fifteen days of the month");
// } else {
//     console.log("Last days of the month");
// }
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// var datee = new Date();

// alert("since 1970 to time is " + currentDate.getTime( ) );
// alert(currentDate.getHours())
// var hourss  = currentDate.getHours()
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// if (hourss > 12) {
//     alert("PM" )
// } else {
//     alert("AM")
// }


// Create a Date object for the last day of the last month of 2020
// const laterDate = new Date(2020, 11, 31); // Month is 0-indexed (11 = December)

// console.log(laterDate);

// Create a Date object for the starting date of Ramadan (June 18, 2015)
// const ramadanStartDate = new Date(2015 5, 18); // Month is 0-indexed (5 = June)

// Get the current date


// Calculate the time difference in milliseconds
// const timeDifference = currentDate - ramadanStartDate;

// Calculate the number of days passed
// const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Alert the number of days passed
// alert(`Number of days passed since 1st Ramadan: ${daysPassed}`);
// alert( Math.floor(currentDate.getTime()  / (1000 * 60 * 60 * 24)) )

// var firstDate = new Date('2015, 11 5' )
// var res = currentDate -firstDate 
// var seconEclapsed = Math.floor(res/1000)
// alert(seconEclapsed)

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// console.log("this is current date " + currentDate );    
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// console.log("this is ahed of 1 hour ago  " +  currentDate);
// // 12. Write a program that creates a date object and show the
// // date in an alert box that is reset to 100 years back?

// currentDate.setFullYear(currentDate.getFullYear() - 100)
// console.log(currentDate);
// // 13. Write a program to ask the user about his age. Calculate
// // and show his birth year in your browser.
// var age = prompt("Please enter your age:");
// var currentYear =new Date().getFullYear()
// var birthYear = currentYear - age
// console.log(birthYear);

// document.write(newDate)


// Question No.2

// var newDate = new Date();
// var currentMonth = newDate.getMonth();
// document.write(currentMonth)


// var monthsName = ["Jan", "Feb", "March", "April", "May", "June", "July" , "Aug", "Sep", "Nov", "Dec"];
// var newDate = new Date();
// var month = newDate.getDay();
// var nameOfToday = monthsName[month];