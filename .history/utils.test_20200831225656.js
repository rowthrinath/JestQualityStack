const puppeteer = require('puppeteer');
const {sumOfTwoNumbers, writeNameAndAge} = require('./utils');

test('test the sum of two numbers' , () =>{
const sum = sumOfTwoNumbers(2, 3);
expect(sum).toBe(5);
});

test('test sting with name and age works', () => {
const wording =  writeNameAndAge('Jack', 39);
expect(wording).toBe("My name is Jack and I am 39 years old");
});

test ('launch ')