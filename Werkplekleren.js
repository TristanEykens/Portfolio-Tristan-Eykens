function SwitchEindReflectie() {
    var x = document.getElementById("Eindreflectie-2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    var y = document.getElementById("Eindreflectie-1");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

function switchtext()
{
    var btn = document.getElementById("WerkpleklerenReflectieToggleBtn");
    btn.value = 'my value';
    if(btn.innerText==="Bekijk eindreflectie Werkplekleren 1!"){
        btn.innerText="Bekijk eindreflectie Werkplekleren 2!";
    }
    else{
        btn.innerText="Bekijk eindreflectie Werkplekleren 1!";
    }
}

function PowerBarScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}