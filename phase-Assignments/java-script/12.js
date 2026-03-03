// 12. Create a leap year checker function:
// year = 20xx
// Print "Leap year" or "Not a leap year"
// A year is leap if divisible by 4 AND (not divisible by 100 OR
// divisible by 400)

function checkLeapYear(year) {

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
}

// example
checkLeapYear(2024);
checkLeapYear(2023);