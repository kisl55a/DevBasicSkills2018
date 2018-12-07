
function combinatorics() {
    a = Number(document.getElementById("combinatoricsSel").value);
    var final = [];
    var out = (' ');
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    if (a!=0)
    {

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
    else
    { final=" "}
        document.getElementById('combinatoricsOutput').innerHTML = final;
   
}
function allVariants() {
    i = Number(document.getElementById("allVarVariants").value);
if (i!=0)
{

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
else
{
    document.getElementById('allVarOutput').innerHTML = (' ');
}
}

function Fact(number) {

    var value = number;

    for (var i = number; i > 1; i--)

        value *= i - 1;

    return value;

};



function nCr()
{ i = Number(document.getElementById("calculatorSel").value);
if (i==0)
{
    var n = document.getElementById("n").value;
    var k = document.getElementById("k").value;
    var l=n-k;
    var sum= Fact(n)/Fact(l)
}
else
{
    var n = document.getElementById("n").value;
    var k = document.getElementById("k").value;
    var l=n-k;
    var sum= Fact(n)/(Fact(k)*Fact(l))
}

    document.getElementById('calculatorOutput').innerHTML=sum;
}

