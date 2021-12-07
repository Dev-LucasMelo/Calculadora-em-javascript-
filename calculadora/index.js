var number1 =  document.getElementById("number1")
var number2 =  document.getElementById("number2")
var operacao = document.getElementById("operacoes")
var buttons = document.querySelectorAll("div.corpo button.button")
//ARRAYS
var numbers = [
                buttons[4],buttons[5],
                buttons[6],buttons[8],
                buttons[9],buttons[10],
                buttons[12],buttons[13],
                buttons[14],buttons[16],
                buttons[17]
                ]

var operacoes = [
    buttons[2],buttons[3],buttons[7],
    buttons[11],buttons[15]
]


//LOGICA 


numbers.forEach(item => {
    item.addEventListener("click", ()=>{
        if (operacao.innerText == "") {
            number1.innerText += item.value 
        } else {
            number2.innerText += item.value 
        }

       
    })
});

operacoes.forEach(item_operacao => {
    item_operacao.addEventListener("click", ()=>{
       
        operacao.innerText = item_operacao.value

        
    })
})
   
function soma(a,b) {  
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function mult(a,b) {
    return a * b;
}
function div(a,b) {
    return a / b;
}
function porcent(a,b) {
    return (a * b) / 100 ;
}
//Resultado

buttons[19].addEventListener("click",()=>{
        if (operacao.innerText == "+") {  
            number1.innerText = soma(parseFloat(number1.innerText),parseFloat(number2.innerText))  
            operacao.innerText = " "
            number2.innerText = " " 
        } else if (operacao.innerText == "-") {
            number1.innerText =  sub(parseFloat(number1.innerText),parseFloat(number2.innerText))
            operacao.innerText = " "
            number2.innerText = " " 
        } else if (operacao.innerText == "x") {
            number1.innerText =  mult(parseFloat(number1.innerText),parseFloat(number2.innerText))
            operacao.innerText = " "
            number2.innerText = " " 
        } else if (operacao.innerText == "/") {
            number1.innerText =  div(parseFloat(number1.innerText),parseFloat(number2.innerText))
            operacao.innerText = " "
            number2.innerText = " " 
        } else if (operacao.innerText == "%") {
            number1.innerText =  porcent(parseFloat(number1.innerText),parseFloat(number2.innerText))
            operacao.innerText = " "
            number2.innerText = " " 
        } 
})


//APAGAR TUDO 

buttons[0].addEventListener("click",()=>{
    number1.innerText = " "
    operacao.innerText = " "
    number2.innerText = " " 
})

//apagar caractere

var teste = "abcd"

buttons[18].addEventListener("click",()=>{
   
    if (! number2.innerText == "") {
        number2.innerText = (number2.innerText).substring(0,(number2.innerText).length -1 )
    } else if (!operacao.innerText== ""){
        operacao.innerText = (operacao.innerText).substring(0,(operacao.innerText).length -1)
    } else if (! number1.innerText == "") {
        number1.innerText = (number1.innerText).substring(0,(number1.innerText).length -1 )
    } 
})