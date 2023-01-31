
<script>
    $(document).ready(function(){
  // Add smooth scrolling to all links 
  // añade desplazamiento suave a todos los enlaces
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    // Asegúra que this.hash tenga un valor antes de anular el comportamiento predeterminado   
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      // Evitar el comportamiento de clic de anclaje predeterminado
      event.preventDefault();

      // Store hash
      // Almacenar  hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // Usando el método animate() de jQuery para agregar desplazamiento de página suave
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      // El número opcional (800) especifica el número de milisegundos que se tarda en desplazarse al área especificada

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        // Agregue hash (#) a la URL cuando termine de desplazarse (comportamiento de clic predeterminado)

        window.location.hash = hash;
      });
    } // End if- fin ---Fuente: W3Schools.com
  })
});
</script>
