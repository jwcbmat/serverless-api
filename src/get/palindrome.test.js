const { getPalindromeDate } = require('./palindrome.js')

test('it should return a palindrome date', () => {
    expect(getPalindromeDate('2022-12-14')).toBe('14/12/2222');
});

test('it should return the next palindrome date if the initial date is not a palindrome', () => {
    expect(getPalindromeDate('2022-12-13')).toBe('14/12/2222');
});

test('it should return the current date if no initial date is provided', () => {
    const currentDate = new Date();
    expect(getPalindromeDate()).toBe(currentDate.toLocaleDateString('pt-br'));
});

test('it should return the correct date format', () => {
    expect(getPalindromeDate('2022-12-14')).toMatch(/\d{2}\/\d{2}\/\d{4}/);
});

test('it should return a status code of 200 and the palindrome date in the response body', async () => {
    const event = {
        queryStringParameters: {
            nextDate: '2022-12-14',
        },
    };

    const res = await handler(event);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(JSON.stringify({ data: '14/12/2222' }));
});

test('it should return a status code of 500 and an error message in the response body if an error occurs', async () => {
    const event = {};

    const res = await handler(event);

    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual(JSON.stringify({ Error: new Error('event.queryStringParameters is undefined') }));
});
