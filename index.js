//------------------------------------reloj:fecha_y_hora-----------------------------------

const $tiempo = document.querySelector(".tiempo"), $fecha = document.querySelector(".fecha");

function digitalClock() {
  let f = new Date();
  let dia = f.getDate();
  let mes = f.getMonth() + 1;
  let anio = f.getFullYear();
  let diaSemana = f.getDay();

  dia = ("0" + dia).slice(-2);
  mes = ("0" + mes).slice(-2);

  let hours = f.getHours();
  let minutes = f.getMinutes();
  let seconds = f.getSeconds();
  let modohorario = hours >= 12 ? "PM" : "AM";

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  let timeString = `${hours}:${minutes}:${seconds}`;

  $tiempo.innerHTML = `${timeString} ${modohorario}`;

  let semana = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let showsemana = semana[diaSemana];
  $fecha.innerHTML = `${dia}/${mes}/${anio}-${showsemana}`;
}

setInterval(() => {
  digitalClock();
}, 1000);


/*
  hola
  ggg
*/


//--------------------------------parrafo suma-----------------------------------


document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('text');
  const words = textElement.textContent.split(' ');
  textElement.textContent = '';

  words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.classList.add('hidden');
      textElement.appendChild(span);

      setTimeout(() => {
          span.classList.remove('hidden');
          span.classList.add('visible');
      }, index * 250); // 250 ms de retraso entre cada palabra
  });
});




//----------------------------operacion suma------------------------------
var textnum1 = document.getElementById("n1")
var textnum2 = document.getElementById("n2")
var respuesta = document.getElementById("resp")
var btncalcular = document.getElementById("calcular")


btncalcular.addEventListener("click", Calcular)

function Calcular()
{
    let op1 = parseFloat(textnum1.value)
    let op2 = parseFloat(textnum2.value)

    let respu = op1 + op2
    respuesta.innerText = respu
    
}


//-----------------------------------------------seccion_2-------------------------------------------------

//--------------------------------parrafo resta-----------------------------------


document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('texto_resta'); //consumiendo al párrafo por palabras=textElement
  const words = textElement.textContent.split(' ');  //separa las palabras
  textElement.textContent = '';

  words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.classList.add('hidden'); //oculta todas las palabras
      textElement.appendChild(span);

      setTimeout(() => {
          span.classList.remove('hidden');
          span.classList.add('visible');
      }, index * 250); // 250 ms de retraso entre cada palabra
  });
});



//----------------------------operacion resta------------------------------
const text2_num1 = document.getElementById("n_1")
const text2_num2 = document.getElementById("n_2")
const respuesta2 = document.getElementById("resp2")
const btn2_calcular = document.getElementById("calcular_2")

btn2_calcular.addEventListener("click", Calcular2)

function Calcular2()
{
    const op_1 = parseFloat(text2_num1.value)
    const op_2 = parseFloat(text2_num2.value)

    let respu2 = op_1 - op_2
    respuesta2.innerText = respu2
}




//-----------------------------------------------seccion_3-------------------------------------------------

//--------------------------------parrafo multiplicacion-----------------------------------


document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('texto_multi'); //consumiendo al párrafo por palabras=textElement
  const words = textElement.textContent.split(' ');  //separa las palabras
  textElement.textContent = '';

  words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.classList.add('hidden'); //oculta todas las palabras
      textElement.appendChild(span);

      setTimeout(() => {
          span.classList.remove('hidden');
          span.classList.add('visible');
      }, index * 250); // 250 ms de retraso entre cada palabra
  });
});



//----------------------------operacion_multi------------------------------
const text3 = document.getElementById("n__1")
const text3_2 = document.getElementById("n__2")
const respuesta3 = document.getElementById("resp3")
const btn3_calcular = document.getElementById("calcular_3")

btn3_calcular.addEventListener("click", Calcular3)

function Calcular3()
{
    var op__1 = parseFloat(text3.value)
    var op__2 = parseFloat(text3_2.value)

    let resp3 = op__1 * op__2
    respuesta3.innerText = resp3
}


//-----------------------------------------------seccion_4-------------------------------------------------

//--------------------------------parrafodiv-----------------------------------


document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('texto_div'); //consumiendo al párrafo por palabras=textElement
  const words = textElement.textContent.split(' ');  //separa las palabras
  textElement.textContent = '';

  words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.classList.add('hidden'); //oculta todas las palabras
      textElement.appendChild(span);

      setTimeout(() => {
          span.classList.remove('hidden');
          span.classList.add('visible');
      }, index * 250); // 250 ms de retraso entre cada palabra
  });
});



//----------------------------operacion_multi------------------------------
const text4 = document.getElementById("n___1")
const text4_2 = document.getElementById("n___2")
const respuesta4 = document.getElementById("resp4")
const btn4_calcular = document.getElementById("calcular_4")

btn4_calcular.addEventListener("click", Calcular4)

function Calcular4()
{
    var op___1 = parseFloat(text4.value)
    var op___2 = parseFloat(text4_2.value)

    let resp4 = op___1 / op___2
    respuesta4.innerText = resp4
}
