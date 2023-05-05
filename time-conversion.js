"use strict";
// given a time in 12 hour format, convert to 24 hour format.

const addZero = (s) => {
  return s < 10 ? `0${s}` : s;
};

const formatMil = (s, timeframe) => {
  return timeframe == "PM"
    ? (s = s < 12 ? s + 12 : s)
    : (s = s === 12 ? "0" : s);
};

const s = "05:00:00AM";

const timeConversion = (str) => {
  const timeframe = str.substring(8, 10);
  const parsedTime = new Date("1970-01-01Z" + str.substring(8, -1));
  const hour = parsedTime.getUTCHours();
  const min = parsedTime.getUTCMinutes();
  const sec = parsedTime.getUTCSeconds();

  return ` ${addZero(formatMil(hour, timeframe))}:${addZero(min)}:${addZero(
    sec
  )}`;
};

console.log(timeConversion(s));
