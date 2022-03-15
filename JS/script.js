//what we do section
$().ready(function () {
  console.log("page loaded.");
  $(".card1").click(() => {
    $(".card-heading1").toggle("slow");
    $().ready(function () {
    $(".card3-text").toggle("slow");
  }); 

//   form validation
  $("button#button").click(function (event) {
    let name = $("#inputname").val();
    let email = $("#inputEmail").val();
    let message = $("#mymessage").val();

    if ($("#inputname").val() && $("#inputEmail").val()) {
      alert(
        "Hi " +
          name +
          ",Thank you for reaching out to us.One of us will contact you shortly."
      );
    } else {
      alert("Please fill the form");
    }
  });
});
