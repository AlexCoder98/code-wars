function validPhoneNumber(phoneNumber) {
    return new RegExp(/^\(\d{3}\)\s\d{3}-\d{4}$/).test(phoneNumber);
}

const result = validPhoneNumber("(123) 456-7890");
// console.log(result);