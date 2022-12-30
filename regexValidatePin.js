//

//validate a pin number with either 4 or 6 digits only

// using .test method regex
// regex for only digits with either 4 or 6 numbers
const validatePIN = (pin) => /^([0-9]{4}|[0-9]{6})$/.test(pin);
