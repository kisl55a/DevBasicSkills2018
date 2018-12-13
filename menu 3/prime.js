function prime() {
    range = Number(document.getElementById('primeNumberRange').value);
    var y = [];
    for (i = 0; i < range; i++) {
        if (isPrime(i) == true) {
            y.push(i);
        }
    }
    var tab;
    tab = "<table class='primeNumbersTable kf'><tr>"
    for (i = 0; i < y.length; i++) {
        if ((i % 5 != 4) && (i != y.length - 1)) {
            tab = tab + "<th>" + y[i] + "</th>";
        }
        else {
            tab = tab + "<th>" + y[i] + "</th></tr><tr>";
        }
    }
    tab = tab + "</table>"
    document.getElementById('primeNumberPlace').innerHTML = tab;
}

