//conectando button1(variavel) com o html butao
// const button1 = document.querySelector(".test1")
// const input1 = document.querySelector(".input1")
// const text = document.querySelector(".text")

// input1.addEventListener('input',function(event){
// //  console.log(event.target.value)
//     text.textContent = event.target.value
//  })
// button1.addEventListener('click', function(){
//     alert(button1)

// })

//Acessando tipos de variaveis 
//array
// const array = ["ponto0","ponto1","prapra",{objeto1: "lalala", objeto2: "blablabla"}]
// [0,1,2,3]
// console.log(array[3].objeto2)


//objeto
// const objeto = {objeto1: ["ponto0","ponto1","prapra","iuoiu"], objeto2: "tatata",objeto3: "lalala"}
// console.log(objeto.objeto1[3]) 

//text
// const text = 'Matheus'
// console.log(text[2])

//numero
// const numero = 4
// console.log(numero + 6)

// const button1 =document.querySelector(".test1")
// const input1 =document.querySelector('.input1')

// button1.addEventListener('click',function(){

//     // if(input1.value > 10){
//     //     console.log('maior que 10')
//     // }    
//     // if(input1.value == 10){
//     //     console.log('igual 10')
//     // }
//     // if(input1.value < 10){
//     //     console.log('menor que 10')
//     // }
//     if(input1.value > 10){
//         console.log('maior que 10')
//     }else{
//         console.log('nao e maior que 10')
//     }
    
// })

// const button = document.querySelector(".test1")
// const input = document.querySelector(".input1")
// const text = document.querySelector(".text")

// button.addEventListener('click', function() {
//     const valorSecreto = 6
//     if(input.value > valorSecreto){
//         text.textContent = 'O numero secreto e menor que: ' + input.value
//     }else if(input.value == valorSecreto){
//         alert('Voce acertou, o numero secreto e: ' + valorSecreto)
//     }else{
//         text.textContent = 'O numero secreto e maior que: '+ input.value
//     }
// })

const array1 = ['','','',6,'']
const objeto1 = {
    va1: '',
    but: 6,
    va2: '',
    v21:'',
    top: '',
}
const array2 = ['','','',{objeto: 6},'']
const objeto2 = {
    va1: '',
    but: ['','','',6,''],
    va2: '',
    v21:'',
    top: '',
}

const button1=document.querySelector('.test1')
const input=document.querySelector('.input1')
const text =document.querySelector('.text')

button1.addEventListener('click',function(){
     
    const secretoArray1 = "[6]"
    const secretoObjeto1 = "?"
    const secretoArray2 = "?"
    const secretoObjeto2= "?"
    
   console.log(secretoArray1)
// const numeroSecreto=6
// if(input.value>secretoArray1){
// text.textContent='o numero secreto é menor'
// }
// else if(input.value==secretoArray1){
//     alert('voce é pika')
// }
//  else{
//     text.textContent='o numero secreto e maior'
//  }

})