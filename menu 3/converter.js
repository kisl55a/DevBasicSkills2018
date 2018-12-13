function convertion() {
    var number = document.getElementById("firstNumber").value;
    var finalSystem = Number(document.getElementById("finalSystem").value);
    var startSystem = Number(document.getElementById("startSystem").value);
    var arr = number.split('');
    if (arr[0] == "-")
        var v = 1;
    console.log(arr)
    for (i = 0; i < arr.length; i++) {

        arr[i] = parseInt(arr[i], startSystem);
        if ((arr[i] < startSystem) && (v != 1)) {
            check = 0;

        }
        else {
            check = 1;
            console.log(number);
        }
    }
    if ((startSystem < 2) || (finalSystem > 16) || (finalSystem < 2) || (startSystem > 16)) {
        str2 = "Wrong number system";
        document.getElementById('info').innerHTML = str2;

    }
    else {
        if (startSystem == 10) {
            c = number;
            d = finalSystem;
            i = 0;


            var a = [];
            while (c >= d) {
                a[i] = (c % d);
                c = Math.floor(c / d);
                i++;
            }
            a.push(c);
            var k = [];
            k = a.reverse();
            for (i = 0; i < k.length; i++) {
                if (k[i] == 10) {
                    k[i] = "A";
                }
                if (k[i] == 11) {
                    k[i] = "B";
                }
                if (k[i] == 12) {
                    k[i] = "C";
                }
                if (k[i] == 13) {
                    k[i] = "D";
                }
                if (k[i] == 14) {
                    k[i] = "E";
                }
                if (k[i] == 15) {
                    k[i] = "F";
                }
            }
            var str2 = k.join('');
            if (check != 1) {
                document.getElementById('info').innerHTML = str2;
            }
            else {
                str2 = "Wrong number";
                document.getElementById('info').innerHTML = str2;
            }
        }
        else {
            str = number;
            var sum = parseInt(str, startSystem);
            c = sum;
            d = finalSystem;
            i = 0;

            var a = [];
            while (c >= d) {
                a[i] = (c % d);
                c = Math.floor(c / d);
                i++;
            }
            a.push(c);
            var k = [];
            k = a.reverse();
            for (i = 0; i < k.length; i++) {
                if (k[i] == 10) {
                    k[i] = "A";
                }
                if (k[i] == 11) {
                    k[i] = "B";
                }
                if (k[i] == 12) {
                    k[i] = "C";
                }
                if (k[i] == 13) {
                    k[i] = "D";
                }
                if (k[i] == 14) {
                    k[i] = "E";
                }
                if (k[i] == 15) {
                    k[i] = "F";
                }

            }

            var str2 = k.join('');
            if (check != 1) {
                document.getElementById('info').innerHTML = str2;
            }
            else {
                str2 = "Wrong number";
                document.getElementById('info').innerHTML = str2;
            }
        }

    }
}
