function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
function Random() {
    a = Number(document.getElementById("firstRange").value);
    b = Number(document.getElementById("secondRange").value);
    c = Number(document.getElementById("rangeLength").value);
    var neg = 0, pos = 0, three = 0, five = 0, seven = 0, prime = 0,f=0;
    var output = " <h3>Random values:</h3>";
    var l;

    var t = [];
    for (i = 0; i < c; i++) {
        t[i] = getRandomInt(a, b);
        if ((i % 20 == 0) && (i != 0))
            output = output + "<br>" + t[i]
        else
            output = output + " " + t[i];
    }
    for (i = 0; i < t.length; i++) {
        if (t[i] < 0) { neg = neg + 1; }
        if (t[i] > 0) { pos++; }
        if (t[i] % 3 == 0) { three++; }
        if (t[i] % 5 == 0) { five++; }
        if (t[i] % 7 == 0) { seven++; } 
        if (isPrime(t[i]) == true) { prime++; }
    }
    k = ("<table border=1 class='tableContentRandom' > <h1>Statistics:</h1><tr><th>Number type</th><th>Result</th></tr>");
    k = k + ("<tr><th> Negative</th><th>" + neg + "</th></tr>");
    k = k + ("<tr><th> Positive</th><th>" + pos + "</th></tr>");
    k = k + ("<tr><th> Devided by 3</th><th>" + three + "</th></tr>");
    k = k + ("<tr><th> Devided by 5</th><th>" + five + "</th></tr>");
    k = k + ("<tr><th> Devided by 7</th><th>" + seven + "</th></tr>");
    k = k + ("<tr><th> Prime</th><th>" + prime + "</th></tr>");
    k = k + ("</table>");
    l= ("<table border=1 class='tableContentRandom' > <h1>Devided values:</h1><tr><th>Number </th><th>How many times</th></tr>");
    t.sort();
    for(i=0;i<t.length;i++)
    {
      if (t[i]==t[i+1])
      {
          f++;
      }
      else
      {
        l = l + ("<tr><th>" +t[i]+"</th><th>" + (f+1)+ "</th></tr>");
        f=0;
      }
    }
    document.getElementById("valueRangeOutput").innerHTML = output;
    document.getElementById("Statistics").innerHTML = k;
    document.getElementById("devidedValues").innerHTML = l;


}