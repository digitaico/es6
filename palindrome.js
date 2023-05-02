const checkIfPalindrome = (str) => {
  str = str.replace(/\W/g, "").toLowerCase();
  return str == str.split("").reverse().join("");
};
console.log(checkIfPalindrome("saippuakivikauppias"));
