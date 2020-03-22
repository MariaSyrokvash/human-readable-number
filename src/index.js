module.exports = function toReadable (number) {
const NUMBERS = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    }; 

    let result = '';

    let oneDigitNumber = number % 10;
    let decades = Math.floor(number % 100 / 10);
    let hundreds = Math.floor(number / 100);


    if (number === 0) {
    return 'zero'
    };


    if (hundreds > 0) {
    result = result + NUMBERS[hundreds];
    result = result + ' hundred';
    };

    if (decades > 1) {
    if (hundreds > 0) {
        result = result +  ' ';
    }
    result = result +  NUMBERS[decades * 10];

    if (oneDigitNumber > 0) {
        result = result + ' ';
        result = result + NUMBERS[oneDigitNumber];
        }
    }

    else if (decades === 1 || oneDigitNumber > 0) {
    if (hundreds > 0) {
        result = result + ' ';
    }
    result = result + NUMBERS[decades * 10 + oneDigitNumber];
    }


    return result;
}
