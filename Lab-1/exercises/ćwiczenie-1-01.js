/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area
 * Wynik zapisz do zmiennej łańuchowej radius z dwoma miejscami po przecinku.
 */
let area = 1;
let radius = '';

if(!area <= 0){
    radius = Math.round(Math.sqrt(area / Math.PI) * 100) / 100
}

console.log(radius)

