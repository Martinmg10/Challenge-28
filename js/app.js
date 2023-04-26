let Numero1 = parseInt(prompt("Ingrese primer numero"));

let Operacion = prompt("Ingrese operador (+) (-) (*) (/)");

let Numero2 = parseInt(prompt("Ingrese segundo numero"));


switch (Operacion) {

    case "+" :
    
console.log(Numero1 + Numero2);
break
case "-" :
console.log(Numero1-Numero2);
break
case "*" :
console.log(Numero1*Numero2);
break
case "/": 
console.log(Numero1/Numero2);
break
default :
    alert("Operacion no valida");

}
