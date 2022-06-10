var  cadena  =  prompt ( "Introduce la cadena:" ) ;
var  separador  =  " " ;
var  longitud  =  0 ;
var  vector  =  nueva  matriz ( ) ;
var  posicion  =  0 ;


for  ( var  i  en  cadena )  {
    longitud ++ ;
}

vector [ posicion ]  =  "" ;
para  ( var  i  =  0 ;  i  <  longitud ;  i ++ )  {
    if  ( cadena [ i ]  !=  separador )  {
        vector [ posicion ]  +=  cadena [ i ] ;
    }
    más  {
        posición ++ ;
        vector [ posicion ]  =  "" ;
    }
}

var  resultado  =  "La cadena \""  +  cadena  +  "\" " ;

var  cadenaSinEspacios  =  "" ;
para  ( yo  en  vector )  {
    si  ( vector [ i ]  !=  " " )  {
        cadenaSinEspacios  +=  vector [ i ] ;
    }
}

var  letras  =  cadena Sin Espacios . dividir ( "" ) ;
var  letrasReves  =  cadenaSinEspacios . dividir ( "" ) . reversa ( ) ;



var  iguales  =  verdadero ;
for  ( i  en  letras )  {
    if  ( letras [ i ]  ==  letrasReves [ i ] )  {

    }
    más  {

        iguales  =  falso ;
    }
}
si  ( iguales )  {
    resultado  +=  "es un palíndromo" ;
}
más  {
    resultado  +=  "no es un palíndromo" ;
}

alert ( "La cadena tiene "  +  vector . length  +  " palabras"  +  "\nLa primera palabra es: "  +  vector [ 0 ]  +
    "\nLa ultima palabra es: "  +  vector [ vector . longitud  -  1 ]  +
    "\nLa cadena en orden inverso es: "  +  vector . reversa ( )  +
    "\nLas palabras ordenadas de la aa la z son: "  +  vector . ordenar ( )  +
    "\nLas palabras ordenadas de la za la a son: "  +  vector . ordenar ( ) . reversa ( )  +
    "\n"  +  resultado ) ;
