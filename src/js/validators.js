export function validator(cardNumber) {
    
    let digitsArray = cardNumber.toString().split('').map(Number)
    let lastDigit = digitsArray.pop();
    digitsArray.reverse()
    let arraySum = 0
    for (let i = 0; i < digitsArray.length; i++) {
        if (i % 2 == 0) {
            digitsArray[i] *= 2;
        }
        if (digitsArray[i] > 9) {
            digitsArray[i] = digitsArray[i] - 9
        }
        arraySum += digitsArray[i]
    }

    return lastDigit == 10 - arraySum % 10    
}