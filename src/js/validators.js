export function validator(cardNumber) {
    
    let digitsArray = cardNumber.toString().split('').map(Number)
    console.log(digitsArray)
    let lastDigit = digitsArray.pop();
    console.log(lastDigit)
    digitsArray.reverse()
    console.log(digitsArray)
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

    console.log(arraySum)
    return lastDigit == 10 - arraySum % 10    
}