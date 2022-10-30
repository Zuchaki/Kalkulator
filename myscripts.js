function linia0(wartosc, wartosc_dodana){
    if (wartosc_dodana==true){
        var a = document.getElementsByClassName("line")[0];
        a = a.replace("<br>", "");
        a = a + wartosc;
        document.getElementsByClassName("line")[0].innerHTML=a;
    }
    else{
        document.getElementsByClassName("line")[0].innerHTML=wartosc;
    }
}
function linia1(wartosc, wartosc_dodana){
    if (wartosc_dodana==true){
        var a = document.getElementsByClassName("line")[1];
        a = a.replace("<br>", "");
        a = a + wartosc;
        document.getElementsByClassName("line")[1].innerHTML=a;
    }
    else{
        document.getElementsByClassName("line")[1].innerHTML=wartosc;
    }
}
function linia2(wartosc, wartosc_dodana){
    if (wartosc_dodana==true){
        var a = document.getElementsByClassName("line")[2];
        a = a.replace("<br>", "");
        a = a + wartosc;
        document.getElementsByClassName("line")[2].innerHTML=a;
    }
    else{
        document.getElementsByClassName("line")[2].innerHTML=wartosc;
    }
}
function linia3(wartosc, wartosc_dodana){
    var a = document.getElementsByClassName("line")[3].innerHTML;
    if (wartosc_dodana==true & a!=undefined){
        a = a.replace("<br>", "")
        a = a + wartosc;
        document.getElementsByClassName("line")[3].innerHTML=a;
    }
    else{
        document.getElementsByClassName("line")[3].innerHTML=wartosc;
    }
}

function lineUP(){
    var l3 = document.getElementsByClassName("line")[3].innerHTML;

    var l2 = document.getElementsByClassName("line")[2].innerHTML;

    var l1 = document.getElementsByClassName("line")[1].innerHTML;

    var l0 = document.getElementsByClassName("line")[0].innerHTML;
    linia3("", false);
    linia1(l2, false);
    linia2(l3, false);
    linia0(l1, false);
}


function start(){
    /*linia0("", false);
    linia0("", false);
    linia0("", false);
    linia0("", false);*/
}
function click1(){
    linia3("1", true);
}
function click2(){
    linia3("2", true);
}
function click3(){
    linia3("3", true);
}
function click4(){
    linia3("4", true);
}
function click5(){
    linia3("5", true);
}
function click6(){
    linia3("6", true);
}
function click7(){
    linia3("7", true);
}
function click8(){
    linia3("8", true);
}
function click9(){
    linia3("9", true);
}
function click0(){
    linia3("0", true);
}
function clickC(){
    linia3("", false);
}
function clickKROPKA(){
    linia3(".", true);
}
function clickPLUS(){
    
    var l3 = document.getElementsByClassName("line")[3].innerHTML;

    var l2 = document.getElementsByClassName("line")[2].innerHTML;
    if(l2==""){l2=0}
    if(l3==""){l3=0}

        l2 = parseFloat(l2)
        l3 = parseFloat(l3)

        lineUP();
        linia3(l2+l3, true)
}

function clickMinus(){
    var l3 = document.getElementsByClassName("line")[3].innerHTML;

    var l2 = document.getElementsByClassName("line")[2].innerHTML;
    if(l2==""){l2=0}
    if(l3==""){l3=0}

        l2 = parseFloat(l2)
        l3 = parseFloat(l3)

        lineUP();
        linia3(l2-l3, true)
}

function clickDZIELENIE(){
    var l3 = document.getElementsByClassName("line")[3].innerHTML;

    var l2 = document.getElementsByClassName("line")[2].innerHTML;
    if(l2==""){l2=0}
    if(l3==""){l3=0}

        l2 = parseFloat(l2)
        l3 = parseFloat(l3)

        if(l3==0){}
        else{
            lineUP();
            linia3(l2/l3, true)
        }
}

function clickMNOZENIE(){
    var l3 = document.getElementsByClassName("line")[3].innerHTML;

    var l2 = document.getElementsByClassName("line")[2].innerHTML;
    if(l2==""){l2=0}
    if(l3==""){l3=0}

        l2 = parseFloat(l2)
        l3 = parseFloat(l3)

        lineUP();
        linia3(l2*l3, true)
}

function clickMODULO(){
    var l3 = document.getElementsByClassName("line")[3].innerHTML;

    var l2 = document.getElementsByClassName("line")[2].innerHTML;
    if(l2==""){l2=0}
    if(l3==""){l3=0}

        l2 = parseFloat(l2)
        l3 = parseFloat(l3)

        lineUP();
        linia3(l2%l3, true)
}

function clickPOW(){
    var l3 = document.getElementsByClassName("line")[3].innerHTML;

    var l2 = document.getElementsByClassName("line")[2].innerHTML;
    if(l2==""){l2=0}
    if(l3==""){l3=0}

        l2 = parseFloat(l2)
        l3 = parseFloat(l3)

        lineUP();
        linia3(Math.pow(l2, l3), true)
}
function clickSWAP(){
    var l3 = document.getElementsByClassName("line")[3].innerHTML;

    var l2 = document.getElementsByClassName("line")[2].innerHTML;

    linia2(l3, false);
    linia3(l2, false);
}
function clickAC(){
    linia0("", false);
    linia1("", false);
    linia3("", false);
    linia2("", false);
}

function clickROZ(){
    // przypisanie obiektu pola tekstowego do zmiennej
var pole_liczba = document.getElementsByClassName("line")[3].innerHTML;
// pobranie liczby
var liczba = pole_liczba;
var l1 = document.getElementsByClassName("line")[3].innerHTML;
 
// sprawdzenie czy pole zawiera jakas wartosc
if (!isNaN(liczba) && liczba > 1){
    var wynik = "";
    var i = 2;
    var e = Math.floor(Math.sqrt(liczba));
while (i <= e) {
while ((liczba % i) == 0) {
    wynik += " " + i;
    liczba = Math.floor(liczba/i);
    e = Math.floor(Math.sqrt(liczba));
}
i   ++;
}
if (liczba > 1) wynik += " " + liczba;
    linia3(l1 + " =" + wynik);
    lineUP();
    lineUP();
    lineUP();
}
else
{
    linia3('Podano nieprawidłową wartość!');
    lineUP();
    lineUP();
    lineUP();
    document.getElementsByClassName("line")[3].focus();
}
}

function Enter(){
    lineUP();
}
/*
function Enter(){
    var l3 = document.getElementsByClassName("line")[3].innerHTML;

    var l2 = document.getElementsByClassName("line")[2].innerHTML;
    wynik=l2+l3;

    console.log(wynik)
    sprPLUS = wynik.lastIndexOf("+");
    if(sprPLUS!=-1){
        l2 = l2.replace("+", "");
        l2 = parseFloat(l2)
        l3 = parseFloat(l3)

        lineUP();
        linia3(l2+l3, true)

    }

}
*/