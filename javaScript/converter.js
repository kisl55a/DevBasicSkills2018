//This function converts your number to the system you want
function convertion() {
    var number = document.getElementById("firstNumber").value;
    var finalSystem = Number(document.getElementById("finalSystem").value);
    var startSystem = Number(document.getElementById("startSystem").value);
    var arr = number.split('');
//checking if this number is negative
    if (arr[0] == "-")
        var v = 1;
    console.log(arr)
//Checking if this number has values more than the number system
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
    //Checking if number systems are correct
    if ((startSystem < 2) || (finalSystem > 16) || (finalSystem < 2) || (startSystem > 16)) {
        str2 = "Wrong number system";
        document.getElementById('info').innerHTML = str2;

    }
    else {
//If it is decimal number system it converts the number to any system
        if (startSystem == 10) {
            c = number;
            d = finalSystem;
            i = 0;
//This formula is universal for converting to any number system from decimal
            var a = [];
            while (c >= d) {
                a[i] = (c % d);
                c = Math.floor(c / d);
                i++;
            }
            a.push(c);
            var k = [];
            k = a.reverse();
//This function converts letters to numbers
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
//Output 
            var str2 = k.join('');
            if (check != 1) {
                document.getElementById('info').innerHTML = str2;
            }
            else {
                str2 = "Wrong number";
                document.getElementById('info').innerHTML = str2;
            }
        }
//This piece of code works when initial number system is not decimal
        else {
            str = number;
//This part converts initial number to decimal system and then to "final" system using the same 
//algorithm which is written above
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
