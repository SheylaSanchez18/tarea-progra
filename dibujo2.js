

var texto = document.getElementById("tlineas");
var texto2 = document.getElementById("tlineas2");
var boton2 = document.getElementById("boton");
var op = document.getElementById("opera");

boton2.addEventListener("click",dibujoporclick)


function dibujoporclick()
{

	var x = parseInt(texto.value);
	var x1 = parseInt(texto2.value);
	var opcion = parseInt(op.value);

	if(opcion==1){
		        var c = x + x1;
		        document.write("La suma es "+c);
               }else if (opcion==2) {
               	                      var c = x - x1;
               	                      document.write("La resta es "+c);
                                     }else if (opcion==3){
                                     	                  var c = x * x1;
                                     	                  document.write("La Multiplicacion es "+c)
                                                          }else if(opcion==4){
                                                          	                  var c = x / x1;
                                                          	                  document.write("La divicon es "+c);
                                                                              }else if (opcion==5){
                                                                                                   var cubo = x*x*x;
                                                                                                   var cubo2 = x1*x1*x1;
                                                                                                   document.write("El cubo del primer numero es " +cubo);
                                                                                                   document.write( " El cobo del segundo numero es " +cubo2);
                                                                                                   }else if (opcion==6){
                                                                                                                        var r1 = Math.sqrt(x);
                                                                                                                        var r2 = Math.sqrt(x1);
                                                                                                                        document.write("La raiz del primer Numero es "+r1);
                                                                                                                        document.write(" La raiz del segundo Numero es "+r2);
                                                                                                                        }

}