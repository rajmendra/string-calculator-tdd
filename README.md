String Calculator TDD Kata

A simple Node.js implementation of the String Calculator kata using Test-Driven Development (TDD) with Jest.

Setup

Clone the repository:

git clone git@github.com:rajmendra/string-calculator-tdd.git
cd string-calculator-tdd

Install dependencies:

npm install

Running Tests

Execute all test cases with:

npm test

You should see Jest run through the suite, reporting passed tests for:

Function existence

Empty string handling

Single and multiple numbers

Newline and comma delimiters

Custom single-character delimiters

Negative number error cases

Undefined input error

Project Structure

├── src
│   └── stringCalculator.js   # Implementation
├── tests
│   └── stringCalculator.test.js  # Jest test suite
└── README.md

