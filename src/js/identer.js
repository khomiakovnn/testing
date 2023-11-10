export function detectPaymentSystem(cardNumber) {
    const cardNumberString = cardNumber.toString();
    const bin = cardNumberString.slice(0, 6);
  
    if (/^4/.test(bin)) {
      return "VISA";
    } else if (/^5[0-5]|^6(0|1|2|3|4|5)/.test(bin)) {
      return "MasterCard";
    } else if (/^34|^37/.test(bin)) {
      return "American Express";
    } else if (/^220[0-4]/.test(bin)) {
      return "MIR";
    } else if (/^30[0-5]|^36|^38/.test(bin)) {
      return "Diners Club";
    } else if (/^35/.test(bin)) {
      return "JCB";
    } else {
      return "UNKNOWN SYSTEM";
    }
  }