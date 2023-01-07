// https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript - 7 kyu

// this is correct because it accounts for falsy values that arent undefined - the bottom version doesnt do that
const createDict = (keys, values) => {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];
    obj[key] = value !== undefined ? value : null;
  }
  return obj;
};

// THIS VERSION WONT WORK
// wont work for falsy values like 'false' or 0 or ''
const createDict2 = (keys, values) => {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i] ? values[i] : null;
  }
  return obj;
};
