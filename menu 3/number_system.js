function table(t, i) {
    var k;
    k = (t.toString(i));
    k = k.toString().toUpperCase();

    return (k);
}
function turnOn() {
    if (document.getElementById('checkButton').textContent == 'Show') {
        document.getElementById('table').style.visibility = 'visible';
        document.getElementById('checkButton').textContent = 'Clean';

    }
    else {
        document.getElementById('table').style.visibility = 'hidden';
        document.getElementById('checkButton').textContent = 'Show';

    }

}
