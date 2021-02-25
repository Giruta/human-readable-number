const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numbers (num) {
    if (num >= 0 && num < 20)
        return units[num];
    else if (num >= 20 && num%10===0)
        return tens[num/10 - 1]
    else if (num >=20) {
        let intPart = Math.trunc(num/10);
        let remDiv = num%10;
        return tens[intPart - 1] + ' ' + units[remDiv];
    }
}

module.exports = function toReadable (number) {
  if (number >= 0 && number < 100)
      return numbers(number)
  else if (number >= 100 && number < 1000 && number%100===0) {
      let intPart = Math.trunc(number/100);
      return units[intPart] + ' hundred';
  }
  else if (number >=100 && number < 1000) {
      let intPart1 = Math.trunc(number/100);
      return units[intPart1] + ' hundred ' + numbers(number%100);
  }
}

// console.log('result = ', toReadable(12));
