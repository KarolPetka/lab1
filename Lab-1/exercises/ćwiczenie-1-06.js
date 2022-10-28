/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######  
 */
let rectWidth = 7;
let rectHeight = 5;
let rectBorderSymbol = '#';
let rectString = '';

if(rectWidth > -1 && rectWidth < 81 && rectHeight > -1 && rectHeight < 81 && rectBorderSymbol.length != 0 && rectBorderSymbol !== ' '){
    for (let i = 0; i < rectHeight; i++) {
        if(i === 0 || i === rectHeight - 1){
            for (let j = 0; j < rectWidth; j++) {
                rectString += rectBorderSymbol
            }
        } else {
            for (let k = 0; k < rectWidth; k++) {
                if(k === 0 || k === rectWidth - 1){
                    rectString += rectBorderSymbol
                } else {rectString += ' ' }
            }
        }
        rectString =+ '\n'
    }
}

console.log(rectString);