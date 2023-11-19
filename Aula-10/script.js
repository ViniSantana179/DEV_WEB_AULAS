var var1 = 15;
let let1 = 5;
const const1 = "15";


document.getElementById('js').innerHTML = "Olá Mundo \n"; 
document.querySelector('#js').innerHTML += `Var: ${var1}, let ${let1}, const ${const1} \n` 
document.querySelector('#js').innerHTML +=  ` <hr> Var Tipo: ${typeof(var1)}, let Tipo:  ${typeof(let1)}, const Tipo: ${typeof(const1)}` 


const js = document.querySelector('#js');
js.innerHTML += "<hr>"

js.innerHTML += "var1 com const1 (Operadores Matematicos)" + 
"<br> var1 == cont1 " + (var1 === const1) +
"<br> var1 == cont1 " + (var1 == const1) +
"<br> var1 != cont1 " + (var1 != const1) + 
"<br> var1 > cont1 " + (var1 > const1) +
"<br> var1 < cont1 " + (var1 < const1) +
"<br> var1 >= cont1 " + (var1 >= const1) +
"<br> var1 <= cont1 " + (var1 <= const1);

js.innerHTML += "<hr>"

js.innerHTML += "var1 com const1 (Operadores Logicos)" + 
"<br> var1 == cont1 && var1 == let1 " + (var1 == const1 && var1 == let1) +
"<br> var1 == cont1 ||  var1 == let1 " + (var1 == const1 || var1 == let1);


js.innerHTML += "<hr>"

if(var1 == const1)
js.innerHTML += "<h2> É Igual </h2>";
else
js.innerHTML += "<h2> Não é Igual </h2>";

js.innerHTML += "<hr>"

js.innerHTML += (var1 == const1) ? "<h2> If </h2>" : "<h2> Else </h2>";

js.innerHTML += '<hr>'

const semana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']

switch(semana[0])
{
    case "Segunda":
        js.innerHTML += "<h3>Segunda</h3>"
    break;
    case "Terça":
        js.innerHTML += "<h3>Terça</h3>"
    break;
    case "Quarta":
        js.innerHTML += "<h3>Quarta</h3>"
    break;
    case "Quinta":
        js.innerHTML += "<h3>Quinta</h3>"
    break;
    case "Sexta":
        js.innerHTML += "<h3>Sexta</h3>"
    break;
    default:
        js.innerHTML += "<h3>Escolha uma opção: </h3>"
    break;

}
