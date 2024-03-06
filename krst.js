// let number = 7;

// if (number % 2 === 0) {
//     alert("Число четное");
// } else {
//     alert("Число нечетное");
// }

// var number = 17
// number % 2 === 0 ? alert("Число четное") : alert("Число нечетное");

// var grade = 75;

// if (grade >= 60){
//    alert("Проходной балл достигнут"); }
// else{
//    alert("Не проходной балл"); }

// var grade = 60
// grade >= 60 ? alert("Проходной балл достигнут") : alert("Не проходной балл")

// var age = 20;

// if ( age>= 18){
//     var legalStatus = "Совершеннолетний" ;
// }
// else {
//     var legalStatus = "Несовершеннолетний";
// }
// alert(legalStatus);

// var age = 8

// legalStatus = (age >= 18) ?  "Совершеннолетний" :  "Несовершеннолетний" ; 
// alert(legalStatus);

// var currency = "USD";

// if (currency === "USD"){
//     exchangeRate = 1.0 
// }
// else{
//     if (currency === "EUR"){
//         exchangeRate = 0.85
//     }
//     else{
//         exchangeRate = "Неизвестная валюта";
//     }
// }

// alert(exchangeRate);



// var currency = 'UGB'

// exchangeRate = (currency === 'USD') ? exchangeRate = 1.0 : currency === 'EUR' ? exchangeRate = 0.85 : exchangeRate = 'Неизвестная валюта'
// alert(exchangeRate)


var player = '0';
var won = false;

function clickBox(box){
    
    if (box.innerText != ''  || won) return;
    box.innerText = player;

    // if (player == '0'){
    //     player = 'X';
    // }
    // else{
    //     player = '0';
    

    player == '0' ? player = 'X' : player = '0'

    checkGame();
}

function checkGame(){
    
    //проверка строк
    
    for (var i = 0; i <=2; i++){
        var first = document.getElementById('0_' + i).innerText;
        var second = document.getElementById('1_' + i).innerText;
        var third = document.getElementById('2_' + i).innerText;
        
        if (first == '') continue;

        if (first == second && first == third){
            alert('Winner');
            won = true;
        }
    }

    //проверка столбов

    for (var i = 0; i <=2; i++){
        var first = document.getElementById(i + '_0').innerText;
        var second = document.getElementById(i + '_1').innerText;
        var third = document.getElementById(i + '_2').innerText;
        
        if (first == '') continue;

        if (first == second && first == third){
            alert('Winner');
            won = true;
        }
    }

    //проверка диагоналей

    var firstD1 = document.getElementById('0_0').innerText;
    var secondD1 = document.getElementById('1_1').innerText;
    var thirdD1 = document.getElementById('2_2').innerText;

    if (firstD1 !='' && firstD1 == secondD1 && firstD1 == thirdD1){
        alert('Winner');
        won = true;
    }

    var firstD2 = document.getElementById('0_2').innerText;
    var secondD2 = document.getElementById('1_1').innerText;
    var thirdD2 = document.getElementById('2_0').innerText;

    if (firstD2 !='' && firstD2 == secondD2 && firstD2 == thirdD2){
        alert('Winner');
        won = true;
    }
}

function Reload(){
    location.reload();
}
