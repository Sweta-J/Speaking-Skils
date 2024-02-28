function fill() {
    x = document.getElementById("Input").value;
    console.log(x);
    if (x != "") {
        document.getElementById("1").innerHTML = x;
        document.getElementById("2").innerHTML = x;
        document.getElementById("3").innerHTML = x;
        document.getElementById("4").innerHTML = x;
    }
}