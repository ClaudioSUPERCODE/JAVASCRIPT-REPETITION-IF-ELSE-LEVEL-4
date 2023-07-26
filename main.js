
// IF & ELSE LEVEL 2_3

// Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten. Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2. Lass dir das Ergebnis in der Konsole ausgeben.

// Teste die Nummern: 35, 74, 123.


function berechne() {
    let inputNum = document.getElementById("inputNum").value 

    let result = inputNum - 27

    if (Math.abs(result) > 27) {
        let result2 = Math.abs(result) * 2
        console.log(result2)
    }
}