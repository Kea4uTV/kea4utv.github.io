// Function to display messages in a custom message box
function showMessageBox(message, type = 'warning') {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.style.display = 'block';
    messageBox.className = `message-box ${type === 'error' ? 'bg-red-100 text-red-700 border-red-400' : 'bg-yellow-100 text-yellow-700 border-yellow-400'}`;
}

// Function to hide the message box
function hideMessageBox() {
    document.getElementById('messageBox').style.display = 'none';
}

// Function to calculate the difference between two dates in years, months, and days
function calculateDateDifference(date1, date2) {
    // Ensure date1 is the later date for consistent calculation
    if (date1.getTime() < date2.getTime()) {
        [date1, date2] = [date2, date1]; // Swap dates if date1 is earlier
    }

    let years = date1.getFullYear() - date2.getFullYear();
    let months = date1.getMonth() - date2.getMonth();
    let days = date1.getDate() - date2.getDate();

    // Adjust for negative days: if days are negative, borrow from months
    if (days < 0) {
        months--;
        // Get the number of days in the previous month of date1
        const lastMonthDate = new Date(date1.getFullYear(), date1.getMonth(), 0);
        days += lastMonthDate.getDate();
    }

    // Adjust for negative months: if months are negative, borrow from years
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

// Khmer Solar Month Names (Gregorian month index 0-11)
const khmerSolarMonths = [
    "មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា",
    "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"
];

// Khmer Lunar Month Names (approximate mapping based on Gregorian month)
// This is a simplification and not astronomically accurate for lunar months.
const khmerLunarMonthsApprox = [
    "មិគសិរ", // Jan - often overlaps with Migasei or Pus
    "បុស្ស",   // Feb - often overlaps with Pus or Meak
    "មាឃ",    // Mar - often overlaps with Meak or Phalkun
    "ផល្គុន",  // Apr - often overlaps with Phalkun or Chet
    "ចេត្រ",   // May - often overlaps with Chet or Pisak
    "ពិសាខ",  // Jun - often overlaps with Pisak or Chet
    "ជេស្ឋ",   // Jul - often overlaps with Chet or Asath
    "អាសាឍ",  // Aug - often overlaps with Asath or Srapon
    "ស្រាពណ៍", // Sep - often overlaps with Srapon or Phatrabot
    "ភទ្របទ",  // Oct - often overlaps with Phatrabot or Ossouj
    "អស្សុជ",  // Nov - often overlaps with Ossouj or Kattik
    "កក្តិក"   // Dec - often overlaps with Kattik or Migasei
];

// Function to get the Buddhist Era year based on the input Gregorian date
// Considering Khmer New Year around mid-April (approx. April 13th)
function getBuddhistEraYear(gregorianDate) {
    const gregorianYear = gregorianDate.getFullYear();
    const gregorianMonth = gregorianDate.getMonth() + 1; // 1-indexed month
    const gregorianDay = gregorianDate.getDate();

    // Define the approximate Khmer New Year transition point (April 13th)
    // If the date is before April 13th, the BE year is (Gregorian Year - 1) + 544.
    // Otherwise, it's Gregorian Year + 544.
    if (gregorianMonth < 4 || (gregorianMonth === 4 && gregorianDay < 13)) {
        return (gregorianYear - 1) + 544;
    } else {
        return gregorianYear + 544;
    }
}

// Function to get Khmer Solar Date
// Takes the input date and the calculated Buddhist Era year
function getKhmerSolarDate(date, beYear) {
    const gregorianMonthIndex = date.getMonth(); // 0-indexed
    const gregorianDay = date.getDate();
    const khmerMonthName = khmerSolarMonths[gregorianMonthIndex];
    return `${gregorianDay} ${khmerMonthName} ឆ្នាំ ${beYear}`;
}

// Function to get Approximate Khmer Lunar Date
// This is a simplified approximation and not a precise astronomical calculation.
// Takes the input date and the calculated Buddhist Era year
function getKhmerLunarApproxDate(date, beYear) {
    const gregorianDay = date.getDate();
    const gregorianMonthIndex = date.getMonth(); // 0-indexed
    const khmerLunarMonthName = khmerLunarMonthsApprox[gregorianMonthIndex];

    let lunarPhase = "";
    let lunarDay = gregorianDay; // Using Gregorian day as a placeholder for lunar day

    if (gregorianDay <= 15) {
        lunarPhase = "កើត"; // Waxing moon
    } else {
        lunarPhase = "រោច"; // Waning moon
        lunarDay = gregorianDay - 15; // Adjust day for waning phase (simplified)
    }
    return `${lunarDay} ${lunarPhase} ខែ${khmerLunarMonthName} ឆ្នាំ ${beYear}`;
}

// Function to update the maximum day value based on selected month and year
function updateDaysInMonth() {
    const yearInput = document.getElementById('year');
    const monthInput = document.getElementById('month');
    const dayInput = document.getElementById('day');

    const year = parseInt(yearInput.value);
    const month = parseInt(monthInput.value);

    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        // If year or month are invalid, set max days to a default or disable day input
        dayInput.max = 31; // Default to max possible days
        return;
    }

    // Date object month is 0-indexed, so subtract 1 from month
    // Setting day to 0 gets the last day of the *previous* month.
    // So, new Date(year, month, 0) gives the last day of 'month - 1'
    // To get the last day of the *current* month, use new Date(year, month, 0)
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    dayInput.max = lastDayOfMonth;

    // If the current day value is greater than the new max, adjust it
    if (parseInt(dayInput.value) > lastDayOfMonth) {
        dayInput.value = lastDayOfMonth;
    }
}

// Function to perform all calculations and update the display for a given date
function performCalculationsAndDisplay(inputDate, isCurrentDate = false) {
    hideMessageBox(); // Hide previous messages

    // Define the Parinirvana date (May 13, 544 BCE)
    // In JavaScript Date object, year -N represents N+1 BCE. So -543 represents 544 BCE.
    // Month is 0-indexed, so May is 4.
    const parinirvanaDate = new Date(-543, 4, 13); // May 13, 544 BCE

    // Check if the input date is earlier than the Parinirvana date (only for user input)
    if (!isCurrentDate && inputDate.getTime() < parinirvanaDate.getTime()) {
        showMessageBox('កាលបរិច្ឆេទដែលបានបញ្ចូលត្រូវតែធំជាង ឬស្មើនឹងកាលបរិច្ឆេទបរិនិព្វាន (13 ឧសភា 544 មុនគ.ស)។', 'error');
        document.getElementById('result').classList.add('hidden');
        return;
    }

    // Get the Buddhist Era year based on the input date and Khmer New Year rule
    const buddhistEraYear = getBuddhistEraYear(inputDate);

    // Calculate the actual difference (age) from Parinirvana to the input date
    const { years: ageYears, months: ageMonths, days: ageDays } = calculateDateDifference(inputDate, parinirvanaDate);

    // --- Calculation for remaining time until 5000 years ---
    // The 5000-year mark is fixed relative to Parinirvana date (May 13th, 544 BCE).
    // 5000 years after 544 BCE is 4457 CE.
    const target5000YearsGregorianYear = 4457;
    const target5000YearsDate = new Date(target5000YearsGregorianYear, 4, 13); // May 13, 4457 CE

    let remainingYears = 0;
    let remainingMonths = 0;
    let remainingDays = 0;

    if (inputDate.getTime() > target5000YearsDate.getTime()) {
        if (!isCurrentDate) { // Only show warning for user input, not for current date auto-display
            showMessageBox('កាលបរិច្ឆេទដែលបានបញ្ចូលបានកន្លងផុតពី ៥០០០ ឆ្នាំនៃព្រះពុទ្ធសាសនាហើយ។', 'warning');
        }
    } else {
        const { years, months, days } = calculateDateDifference(target5000YearsDate, inputDate);
        remainingYears = years;
        remainingMonths = months;
        remainingDays = days;
    }

    // --- Display Results ---
    if (isCurrentDate) {
        document.getElementById('currentGregorianYear').textContent = inputDate.getFullYear();
        document.getElementById('currentGregorianMonth').textContent = inputDate.getMonth() + 1; // 1-indexed
        document.getElementById('currentGregorianDay').textContent = inputDate.getDate();
        document.getElementById('currentBuddhistEraYear').textContent = buddhistEraYear;
        document.getElementById('currentResultYears').textContent = ageYears;
        document.getElementById('currentResultMonths').textContent = ageMonths;
        document.getElementById('currentResultDays').textContent = ageDays;
        document.getElementById('currentRemainingYears').textContent = remainingYears;
        document.getElementById('currentRemainingMonths').textContent = remainingMonths;
        document.getElementById('currentRemainingDays').textContent = remainingDays;
        document.getElementById('currentKhmerSolarDate').textContent = getKhmerSolarDate(inputDate, buddhistEraYear);
        document.getElementById('currentKhmerLunarDate').textContent = getKhmerLunarApproxDate(inputDate, buddhistEraYear);
        document.getElementById('currentDateResult').classList.remove('hidden'); // Ensure it's visible
    } else {
        document.getElementById('buddhistEraYear').textContent = buddhistEraYear;
        document.getElementById('resultYears').textContent = ageYears;
        document.getElementById('resultMonths').textContent = ageMonths;
        document.getElementById('resultDays').textContent = ageDays;
        document.getElementById('remainingYears').textContent = remainingYears;
        document.getElementById('remainingMonths').textContent = remainingMonths;
        document.getElementById('remainingDays').textContent = remainingDays;
        document.getElementById('khmerSolarDate').textContent = getKhmerSolarDate(inputDate, buddhistEraYear);
        document.getElementById('khmerLunarDate').textContent = getKhmerLunarApproxDate(inputDate, buddhistEraYear);
        document.getElementById('result').classList.remove('hidden'); // Show the result box
    }
}


// Event listener for Calculate button
document.getElementById('calculateBtn').addEventListener('click', () => {
    const yearInput = document.getElementById('year').value;
    const monthInput = document.getElementById('month').value;
    const dayInput = document.getElementById('day').value;

    const year = parseInt(yearInput);
    const month = parseInt(monthInput);
    const day = parseInt(dayInput);

    if (isNaN(year) || isNaN(month) || isNaN(day) || yearInput === '' || monthInput === '' || dayInput === '') {
        showMessageBox('សូមបញ្ចូលឆ្នាំ ខែ និងថ្ងៃឱ្យបានត្រឹមត្រូវ។', 'error');
        document.getElementById('result').classList.add('hidden');
        return;
    }

    if (month < 1 || month > 12) {
        showMessageBox('ខែត្រូវតែស្ថិតនៅចន្លោះពី 1 ដល់ 12។', 'error');
        document.getElementById('result').classList.add('hidden');
        return;
    }

    const inputDate = new Date(year, month - 1, day);

    if (inputDate.getFullYear() !== year || inputDate.getMonth() !== (month - 1) || inputDate.getDate() !== day) {
        showMessageBox('កាលបរិច្ឆេទដែលបានបញ្ចូលមិនត្រឹមត្រូវទេ។ សូមពិនិត្យមើលថ្ងៃ និងខែ។', 'error');
        document.getElementById('result').classList.add('hidden');
        return;
    }

    performCalculationsAndDisplay(inputDate, false); // false indicates it's not the current date auto-display
});

// Add event listeners for year and month input changes
document.getElementById('year').addEventListener('input', updateDaysInMonth);
document.getElementById('month').addEventListener('input', updateDaysInMonth);

// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
    // Update days in month for initial input fields
    updateDaysInMonth();

    // Get current date and display its information
    const currentDate = new Date();
    performCalculationsAndDisplay(currentDate, true); // true indicates it's the current date auto-display
});
