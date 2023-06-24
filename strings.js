'use strict'

const str = "El cacique Queria Conquistar Mas Terrotorios allende su Miradax yuv";
const str2 = 'Jea ae';
const str20 = 'Buenos dias';

// 1. print duplicates from string
const getStringDuplicates = (str) => {
  str = [...str].sort();
  const res = str.filter((char, index) => index != str.indexOf(char));
  return [...new Set(res)];
}
//console.log(getStringDuplicates(str2));

// 2. Check anagrams
const str3 = 'Maria';
const str4 = 'xMira'

const checkAnagram = (str1, str2) => {
  str1 = [...str1].sort().join('');
  str2 = [...str2].sort().join('');
  return str1 == str2;
}
//console.log(checkAnagram(str3, str4));

// 3. Print first non-repeated char from string.
const getFirstNonRepeated = (str) => {
  str = [...str];
  const res = str.reduce((obj, char) => {
    if(!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
    return obj;
  }, {})
  return res;
}

const getFirstChar = (obj) => {
  obj = Object.entries(obj);
  for(let i = 0 ; i < obj.length; i++) {
    if (obj[i][1] == 1) {
      return obj[i][0];
    }
  }
}
//console.log(getFirstChar(getFirstNonRepeated(str)));


// 4. Reverse string using recursion.
const reverseStringRecursion = (str) => {
  // return [...str].reverse().join(''); // using builtin function reverse()
  // recursion::
  return (str == '') ? '' : reverseStringRecursion(str.substr(1)) + str.charAt(0);
}
//console.log(reverseStringRecursion(str));

// 5. Check if a string contains only digits
const checkIfContainsDigits = (str) => {
  const regex = /\d/g;
  const res = [...str.matchAll(regex)];
  return res.length === [...str].length;
}
const str5 = '15744e';
//console.log(checkIfContainsDigits(str5));


// 6. Find duplicate chars in string.
// see 1.


// 7. Count vowels and consonants in string.
const countVowelsConsonants = (str) => {
  str = str.toLowerCase();
  const vowelsRegex = /[aeiou]/g;
  const consonantsRegex = /[b-df-hj-np-tv-xz]/g;

  const resVowels = [...str.matchAll(vowelsRegex)];
  const resConsonants = [...str.matchAll(consonantsRegex)];
  return [resVowels.length, resConsonants.length];
}
//console.log(countVowelsConsonants(str))

// 8. count the ocurrence of a given char in a string.
const countChar = (char, str) => {
  const regex = new RegExp(`${char}`, 'g');
  return [...str.matchAll(regex)].length;
}
//console.log(countChar('i', str2))


// 9. find all permutations of a string.
const str9 = 'dig';

const findStringPermutations = (str) => {
  if(str.length < 2) return str;
  const permutations = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // avoid duplicates
    if (str.indexOf(char) != i) 
      continue;

    const remStr = str.slice(0, i) + str.slice(i + 1, str.length);
    for (const permut of findStringPermutations(remStr)) {
      permutations.push(char + permut);
    }
  }
  return permutations;
}
//console.log(findStringPermutations(str9));


// 10. reverse words in given sentence without using library method.
// 'Maria is the queen of Harlem' => 'Harlem of queen the is Maria'
const str10 = 'Jorge Eduardo Ardila Muñoz';

const reverseSentence = (str) => {
  return str.split(' ' ).reverse().join(' ');
}
//console.log(reverseSentence(str10));


// 11. Check if two strings are a rotation of each other.
const str11 = 'Jorge';
const str110 = 'eJorg';

const findIndex = (str1, str2) => {
  return [...str2].reduce((acc, val, index) => acc.concat(val === [...str1][0] ? index : []), []);
}

const checkStrings = (s1, s2, index, length) => {
  for (let i = 0; i < length; i++) {
    if (s1[i] != s2[(index + i) % length])
      return false;
  }
  return true;
}

const checkStringRotation = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  // find index of str1 first char on str2.
  let isRotated = false;
  const indexes = findIndex(str1, str2);
  const l = str1.length;

  for (let idx of indexes ) {
    isRotated = checkStrings(str1, str2, idx, l );
    if (isRotated)
      break;
  }

  return isRotated;
}
//console.log(checkStringRotation(str11, str110))


// 12. check if a string is a palindrome.
const str12 = 'tattarrattat';
const isPalindrome = (str) => {
  return str == [...str].reverse().join('');
}
//console.log(isPalindrome(str12));
