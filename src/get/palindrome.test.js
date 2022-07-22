const adapconUtils = require('adapcon-utils-js')
const handler = require('./palindrome.js')

const {
    expect, test, describe
} = require('@jest/globals')

describe('Handler file test', function () {

    function palindromeCheck(str) {
        const noSpecialCharacters = /[^A-Za-z0–9]/g
        const lowerStr = str.toLowerCase().replace(noSpecialCharacters, '')
        const reverseStr = lowerStr.split('').reverse().join('')
        return reverseStr === lowerStr
    }

    // const nextPalindromeDate = handler.handler
    // console.log(nextPalindromeDate)

    // test('Expected received palindrome', function () {
    //     expect(true).toBe(palindromeCheck(nextPalindromeDate))
    // })

    test('Expected received palindrome', function () {
        expect(2).toBe(handler.handler(new Date))
    })

    test('Should return a format date (DD/MM/YYYY)', function () {
        expect(new Intl.DateTimeFormat('pt-br').format(new Date)).toBe(adapconUtils.formatDate(new Date))
    })

    test.todo('test: no params')
})