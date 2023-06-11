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

/* achtergrond kleur verandering bij de Pasta Webshop sectie*/
$(window).scroll(function () {
    $('body').each(function () {

        var topOfWindow = $(window).scrollTop(), bottomOfWindow = topOfWindow + $(window).height();
        var boxPos = $('#WerkpleklerenWebsiteSectie').offset().top;

        /* De 500 verwijst naar hoeveel pixels van de bodem van je scherm de sectie moet zijn eer hij de kleur veranderd.
        De tweede 500 verwijst dan naar hoeveel pixels hij moet zijn vanaf de top van je scherm voordat hij de kleur terug zet zoals daarvoor.*/
if(boxPos <= bottomOfWindow-500 && boxPos >= topOfWindow-500){
    $("body").css("background-color", "#1D1D1B");
    $("#Terug-Naar-Boven-Knop").css("background-color", "#F8B960");
}
else{
    $("body").css("background-color", "#F3FAFE");
    $("#Terug-Naar-Boven-Knop").css("background-color", "#B6A8FF");
}
});
});