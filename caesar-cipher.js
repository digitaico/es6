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

const getCharCodes = (s, k) => {
  const n = parseInt(k % 26);
  return [...s].map((char) => {
    const c = char.charCodeAt(0);
    if (c >= 65 && c <= 90) {
      return c + (c + n > 90 ? n - 26 : n);
    } else if (c >= 97 && c <= 122) {
      return c + (c + n > 122 ? n - 26 : n);
    } else {
      return c;
    }
  });
};

const buildStringFromCharCodes = (charmap) => {
  return String.fromCodePoint(...charmap);
};

const caesarCipher = (s, k) => {
  const cm = getCharCodes(s, k);
  return buildStringFromCharCodes(cm);
};
console.log(caesarCipher(s, k));
