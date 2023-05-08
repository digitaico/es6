"use strict";

// a cipher to encrypt comms.
// shifts each letter by a number of letters,  if past z,  rotate to begining.
// rotating by 3: w =  z; x = a; y = b; z = c; a = d, b = e;
// define cipher with varying rotation.
// cipher only encrypt letters,  not symbols.
// ====
// extrar el charcode (utf-8) de cada caracter
// sumar la rotacion a cada codigo utf, considerar si sale de rango.
// componer la frase con nuevos valores ascii / utf-8 fromCharCode()
// a= 97,.... z:122 A: 65, Z=90

const s = "There's-a-starman-waiting-in-the-sky"; // string to encrypt;
const k = 3; // cipher rotation.

const getCharCodes = (k, s) => {
  //console.log(s.length);
  //console.log(s.charCodeAt(4));
  //console.log(String.fromCharCode(65, 66, 67, 90, 100, 122));

  const charMap = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i].charCodeAt(0);
    if ((c >= 65 - k && c <= 90 - k) || (c >= 97 - k && c <= 122 - k)) {
      charMap.push(c + k);
    } else if (c + k > 122) {
      const diff = c + k - 122;
      charMap.push(97 + diff);
    } else if (c + k > 90) {
      const diff = c + k - 90;
      charMap.push(65 + diff);
    } else {
      charMap.push(c);
    }
  }
  return charMap;
};

const buildStringFromCharCodes = (charmap) => {
  const r = charmap.map((el) => +el);
  const cm = [...r].join(",");
  console.log(cm);
  const res = String.fromCodePoint(
    87,
    107,
    104,
    117,
    104,
    39,
    118,
    45,
    100,
    45,
    118,
    119,
    100,
    117,
    112,
    100,
    113,
    45,
    122,
    100,
    108,
    119,
    108,
    113,
    106,
    45,
    108,
    113,
    45,
    119,
    107,
    104,
    45,
    118,
    110,
    99
  );
  console.log(res);
  const res1 = String.fromCodePoint(cm);
  console.log(res1);
};

const encryptText = (k, s) => {
  const cm = getCharCodes(k, s);
  buildStringFromCharCodes(cm);
};
console.log(encryptText(k, s));
