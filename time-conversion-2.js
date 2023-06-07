// Hacker Rank: Time Conversion
'use strict';

const s = '04:59:59AM';

// convertir string en array
const ns = s.split(':');
let hour = ns[0];
let minutes = ns[1];
let secs = ns[2].slice(0,2);
let franja = ns[2].slice(2);

console.log(franja);

if (franja == 'PM' && hour < 12) {
	hour = parseInt(hour) + 12; 
}

if (franja == 'AM' && hour == 12) {
	hour = '00'; 
}
const new_hour = `${hour}:${minutes}:${secs}`;
console.log(new_hour);
