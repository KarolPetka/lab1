/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 34;
let m = 190;
let progressBar = ""

let percent = Math.ceil((n / m * 100) / 2)
for (let i = 0; i < 52; i++) {
    if (i == 0 || i == 51) {
        progressBar += '|'
    } else if(i <= percent){
        progressBar += '#'
    } else {
        progressBar += ' '
    }
}
progressBar += '\n'
for(let i = 0; i < 50; i++){
    if(i == 0){
        progressBar += '0%'
    } else if(i == 25){
        progressBar += percent + '%'
    } else if(i == 46){
        progressBar += '100%'
    } else {progressBar += ' '}
}

console.log(progressBar)
