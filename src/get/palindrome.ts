const handler = async (event: any): Promise<{ statusCode: number, body: string }> => {
    try {
        const resDate = getPalindromeDate(event.queryStringParameters?.nextDate)
        return {
            statusCode: 200,
            body: JSON.stringify({ data: resDate })
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ Error: new Error(err) })
        }
    }
}

const getPalindromeDate = (initialDate: string): string => {
    const formattedInitialDate = initialDate ? new Date(initialDate) : new Date()

    let foundPalindrome = false
    const onlyNumbers = /[^0-9]/g

    while (!foundPalindrome) {
        let accDate = new Date(formattedInitialDate.setDate(formattedInitialDate.getDate() + 1))
        const formattedDate = new Intl.DateTimeFormat('pt-br').format(accDate).replace(onlyNumbers, "")
        const reverseDate = formattedDate.replace(onlyNumbers, "").split("").reverse().join("")
        if (formattedDate === reverseDate) {
            foundPalindrome = true
            return new Intl.DateTimeFormat('pt-br').format(accDate)
        }
    }
}

module.exports = { handler, getPalindromeDate }
