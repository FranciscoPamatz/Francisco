var  fecha  =  prompt  ( "Introduzca dato: " ) ;

var  fecha  =  nueva  Fecha  ( fecha ) ;
var  fechaActual  =  nueva  Fecha ( ) ;


sea  ​​miilisegundos  =  24 * 60 * 60 * 1000 ;
let  MilisegundosTranscurridos  =  Math . abs ( fecha . getTime ( )  -  fechaActual . getTime ( ) ) ;
let  diasTranscurridos  =  Math . redondo  ( MilisegundosTranscurridos / miilisegundos ) ;

if  ( fecha . empieza con ( "ene"  ||  "feb"  ||  "mar"  ||  "abr"  ||  "may"  ||  "oct" 
||  "nov"  ||  "diciembre" )  ​​)  {
    
documento _ escribir ( fecha ) ;
alerta ( "Dias Transcurridos" ) ;
alerta ( diasTranscurridos - 1 ) ;
consola _ log  ( diasTranscurridos - 1 ) ;

} más  {
    alerta ( "Introduzca fecha valida" ) ;
}
