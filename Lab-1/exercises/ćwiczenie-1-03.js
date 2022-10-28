/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzemską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie mieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decimalNumber = 4;
let romanNumber = 'IV';

if(decimalNumber == 1){
    romanNumber == "I"
} else if(decimalNumber == 2){
    romanNumber == "II"
} else if(decimalNumber == 3){
    romanNumber == "III"
} else if(decimalNumber == 4){
    romanNumber == "IV"
} else if(decimalNumber == 5){
    romanNumber == "V"
} else if(decimalNumber == 6){
    romanNumber == "VI"
} else if(decimalNumber == 7){
    romanNumber == "VII"
} else if(decimalNumber == 8){
    romanNumber == "VIII"
} else if(decimalNumber == 9){
    romanNumber == "IX"
} else if(decimalNumber == 10){
    romanNumber == "X"
} else if(decimalNumber < 1 || decimalNumber > 10){
    romanNumber = 'Decimal number is out of range!'
} else if(decimalNumber == undefined || decimalNumber == null){
    romanNumber = 'Decimal number is undefined or null!'
}

console.log(romanNumber);