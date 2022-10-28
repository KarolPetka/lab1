/**
 * Napisz skrypt, który generuje losowy łańcuch o długości z zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString  
 */

let length = 5;
let randomString = '';

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
  randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
}

console.log(randomString);