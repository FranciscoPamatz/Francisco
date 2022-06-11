// tiene que ir en una funcion
función  abrir ( ) {
    //Mostrara un cuadro de texto donde se le pide introducir su edad
  var  edad  =  prompt ( "Introduce una edad:" ) ;
// Verifica que el dato introducido sea un numero de ser asi valida que sea mayor a 18
// Mostrar un mensaje de puede conducir
// De no ser asi mostrara otro mensaje que aun no puede conducir
  if ( Número ( edad ) == edad ) {
      si ( edad  >=  18 ) {
          documento _ getElementById ( "raíz" ) . innerHTML = "Puedes conducir" ;
      } más {
          documento _ getElementById ( "raíz" ) . innerHTML = "Aun no puedes conducir" ;
      }
      // Si no era un numero valida pedira que sea introducido uno que si lo sea
  } más {
      alerta ( "Introduce un número válido" ) ;
  }
}
