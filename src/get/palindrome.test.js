const { getPalindromeDate } = require('./palindrome.js')

const {
    expect, test, describe
} = require('@jest/globals')

describe('Palindrome file test', function () {

    function palindromeCheck(str) {
        const noSpecialCharacters = /[^A-Za-z0–9]/g
        const lowerStr = str.toLowerCase().replace(noSpecialCharacters, '')
        const reverseStr = lowerStr.split('').reverse().join('')
        return reverseStr === lowerStr
    }

    describe("getPalindromeDate function", function () {

        test('Expected received palindrome', function () {
            expect(true).toBe(palindromeCheck(getPalindromeDate()))
        })

        test('getPalindromeDate: should return format date (DD/MM/YYYY) and no params  ', function () {
            expect("03/02/2030").toBe(getPalindromeDate())
        })

        test('getPalindromeDate endpoint: next date 04/02/2030', function () {
            expect("13/02/2031").toBe(getPalindromeDate("04/02/2030"))
            expect("23/02/2032").toBe(getPalindromeDate("02/14/2031"))
            expect("04/02/2040").toBe(getPalindromeDate("02/24/2032"))
        })
    })
})