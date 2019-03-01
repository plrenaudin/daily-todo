/**
 * Hash the string to return a number based on the character in the string
 *
 * @param {string} input string to hash
 * @returns {string} string hash
 */
const hash = input => input.split("").reduce((a, b) => a + b.charCodeAt(0), 0);

/**
 * Generate the css hsl color base on the input value.
 *
 * @param {string} input the string the color will be related to
 * @param {number} lightness lightness of the color
 * @returns {string} css for the corresponding color
 */
const generateColor = (input, lightness = 75) =>
  `hsl(${hash(input) % 360}, 100%, ${lightness}%)`;

export { generateColor };
