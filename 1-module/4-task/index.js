/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let smallLetters = str.toLowerCase();

  return smallLetters.includes('1xbet') || smallLetters.includes('xxx');

}
