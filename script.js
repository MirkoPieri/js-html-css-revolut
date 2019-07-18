// Ricreare almeno l’header completo con i dropdown che al click si mostrano e spariscono ricliccando.
// La traccia da riprodurre è questa: https://www.revolut.com/en-IT/
// Poi tutto quello che riuscite a ricreare della pagina è tutto di guadagnato per ripasso e ex ulteriore vostro. Quindi più fate più vi conviene.

$( document ).ready(function() {

  $(".dropdown-accounts").click(function() {
    $(".drop_accounts").toggleClass("active");
  });

  $(".dropdown-products").click(function() {
    $(".drop_products").toggleClass("active");
  });

  $(".dropdown-company").click(function() {
    $(".drop_company").toggleClass("active");
  });

  $(".dropdown-help").click(function() {
    $(".drop_help").toggleClass("active");
  });

  $(".dropdown-en").click(function() {
    $(".drop_en").toggleClass("active");
  });

});
