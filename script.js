function getNumber() {
            // je declare que je vais chercher l'element "firstNumber" via l'Id et que je ne veut que la valeur, je stocke le tout dans firstNumber
            var firstNumber = document.getElementById('firstNumber').value;
            //  pareil pour secondNumber
            var secondNumber = document.getElementById('secondNumber').value;
            //  je déclare que result contient la multiplication de first et secondNumber
            // sauf que je lui indique avec la fonction Math.trunc que je ne garde que le nombre premier de firstnumber
            var result = Math.trunc(firstNumber) * secondNumber;

            alert(result);
}
