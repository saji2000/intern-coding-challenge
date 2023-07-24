/**
 * Finds the first non-repeated character in the input string.
 * If there is no non-repeated character, returns null.
 *
 * @param {string} string - The input string to search for the first non-repeated character.
 * @returns {string | null} The first non-repeated character found, or null if none exists.
 */
function firstNonRepeated(string) {
  // Check if the input string is empty, return null if it is.
  if (string.length == 0) {
    return null;
  }

  // Create an empty object to act as a dictionary to store character frequencies.
  const dictionary = {};

  // Loop through the input string to count the occurrences of each character.
  for (let i = 0; i < string.length; i++) {
    if (string[i] in dictionary) {
      dictionary[string[i]] += 1;
    } else {
      dictionary[string[i]] = 1;
    }
  }

  // Loop through the input string again to find the first non-repeated character.
  for (let i = 0; i < string.length; i++) {
    if (dictionary[string[i]] === 1) {
      return string[i];
    }
  }

  // If there is no non-repeated character, return null.
  return null;
}

console.log(firstNonRepeated("AABCDEE"));
