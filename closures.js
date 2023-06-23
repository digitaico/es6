'use strict';
const str = 'jea';

function outerFunc (a) {
  function innerFunc (a) {
    console.log(`++ inner ${a}`)
  }
  return innerFunc;
}

const inn = outerFunc();
inn(str);
