function myFunction() {
    var x = document.getElementById("fn").value;
    x = Number(x)
    let text=""
    for (let i = 1; i < 11; i++) {
      text +=  x*i + "<br>";
    }
  
    document.getElementById("demo").innerHTML = text;
  
  }
  