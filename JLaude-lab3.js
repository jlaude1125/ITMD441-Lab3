// Jefferey Laude
// ITMD 441-02 Undergraduate Student

// Exercise 1: minMaxAverage Function
function minMaxAverage(numbers) {
  const totalNumbers = numbers.length;
  const minValue = Math.min(...numbers);
  const maxValue = Math.max(...numbers);
  const average = numbers.reduce((sum, num) => sum + num, 0) / totalNumbers;
  
  console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average}`);
}

// Test Case 1
console.log("Test Case 1:");
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);

// Test Case 2
console.log("\nTest Case 2:");
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);

// Test Case 3
console.log("\nTest Case 3:");
minMaxAverage([15, 3, 9, 22, 7, 18, 5, 100, 2]);

// Exercise 2: countVowels Function
function countVowels(string) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of string) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Test Case 1
const word1 = "Winter";
console.log(`\n${word1}: ${countVowels(word1)} vowels.`);

// Test Case 2
const word2 = "JavaScript";
console.log(`${word2}: ${countVowels(word2)} vowels.`);

// Test Case 3
const word3 = "Education";
console.log(`${word3}: ${countVowels(word3)} vowels.`);

// Exercise 3: sortNumbers Function
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Test Case 1
const array1 = [9, 4, 6, 2];
console.log(`\nOriginal Array: [${array1.join(', ')}] Sorted Array: [${sortNumbers([...array1]).join(', ')}]`);

// Test Case 2
const array2 = [15, 3, 9, 22, 7];
console.log(`Original Array: [${array2.join(', ')}] Sorted Array: [${sortNumbers([...array2]).join(', ')}]`);

// Test Case 3
const array3 = [100, 2, 50, 25, 1, 75];
console.log(`Original Array: [${array3.join(', ')}] Sorted Array: [${sortNumbers([...array3]).join(', ')}]`);

// Exercise 4: celsiusToFahrenheit Function
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Test Case 1
const temp1 = 30;
const fahrenheit1 = celsiusToFahrenheit(temp1);
console.log(`\n${temp1.toFixed(1)} Celsius = ${fahrenheit1.toFixed(1)} Fahrenheit`);

// Test Case 2
const temp2 = 0;
const fahrenheit2 = celsiusToFahrenheit(temp2);
console.log(`${temp2.toFixed(1)} Celsius = ${fahrenheit2.toFixed(1)} Fahrenheit`);

// Test Case 3
const temp3 = -10;
const fahrenheit3 = celsiusToFahrenheit(temp3);
console.log(`${temp3.toFixed(1)} Celsius = ${fahrenheit3.toFixed(1)} Fahrenheit`);
