
function combinatorics() {
    a = Number(document.getElementById("combinatoricsSel").value);
    var final = [];
    var tab;
    var out = (' ');
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    if (a != 0) {

        for (i = 1; i <= ((2 ** a) - 1); i++) {
            b = i.toString(2)
            while (b.length < (a + 1)) { b = '0' + b }
            {

                var farr = "(" + arr.filter(function (item, n, arr) { return b.charAt(a - n) > 0 });
                farr = farr + ")";
                final.push(farr);
            }
        }

    }
    else { final = " " }
    tab = "<table class='combinatoricsTable'><tr>";
    for (i = 0; i < final.length; i++) {
        if ((i % 4 != 3) && (i != final.length - 1)) {
            tab = tab + "<th>" + final[i] + "</th>";
        }
        else {
            tab = tab + "<th>" + final[i] + "</th></tr><tr>";
        }
    }
    tab = tab + "</table>"
    document.getElementById('combinatoricsOutput').innerHTML = tab;

}
function allVariants() {
    i = Number(document.getElementById("allVarVariants").value);
    if (i != 0) {

        if (i == 4) {
            var a, b, c, d, s = [];
            for (a = 1; a <= 4; a++) {
                for (b = 1; b <= 4; b++) {
                    if (b == a)
                        continue;

                    for (c = 1; c <= 4; c++) {
                        if (c == a || c == b)
                            continue;

                        for (d = 1; d <= 4; d++) {
                            if (d == a || d == b || d == c)
                                continue;

                            s.push([a, b, c, d].join(''));
                        };
                    };
                };
            };
        };
        if (i == 5) {
            var a, b, c, d, s = [];
            for (a = 1; a <= 5; a++) {
                for (b = 1; b <= 5; b++) {
                    if (b == a)
                        continue;

                    for (c = 1; c <= 5; c++) {
                        if (c == a || c == b)
                            continue;

                        for (d = 1; d <= 5; d++) {
                            if (d == a || d == b || d == c)
                                continue;
                            for (e = 1; e <= 5; e++) {
                                if (e == a || e == b || e == c || e == d)
                                    continue;

                                s.push([a, b, c, d, e].join(''));
                            };
                        };
                    };
                };
            }
        }
        document.getElementById('allVarOutput').innerHTML = s.join('\n');
    }
    else {
        document.getElementById('allVarOutput').innerHTML = (' ');
    }
}

function Fact(number) {

    var value = number;

    for (var i = number; i > 1; i--)

        value *= i - 1;

    return value;

};



function nCr() {
    i = Number(document.getElementById("calculatorSel").value);
    var n = document.getElementById("n").value;
    var k = document.getElementById("k").value;

    if (i == 0) {
        if (n == k) {
            var sum = Fact(n)
        }
        else {
            var l = n - k;
            var sum = Fact(n) / Fact(l)
        }
    }
    else {
        if (n == k) {
            sum = 1;
        }
        else {
            var l = n - k;
            var sum = Fact(n) / (Fact(k) * Fact(l))
        }

    }

    console.log(sum);

    var b = sum;
    b = b.toFixed()
    if ((b > 0) && (b >= 1)) {
        document.getElementById('calculatorOutput').innerHTML = b;
    }
    else {
        sum = "Invalid input";
        document.getElementById('calculatorOutput').innerHTML = sum;
    }
}
function choose() {
    i = Number(document.getElementById("combSelMain").value);
    if (i == 0) {
        document.getElementsByid('combinatoricsOutput').style.visibility = 'visible';
        document.getElementsByid('allVarOutput').style.visibility = 'hidden';

    }
    if (i == 1) {
        document.getElementsByid('combinatoricsOutput').style.visibility = 'hidden';
        document.getElementsByid('allVarOutput').style.visibility = 'visible';
    }
}

