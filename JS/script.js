//what we do section

$(document).ready(function () {
  $(".mt-3").click(function () {
    $(".hide", this).toggle(1000);
    $(".show", this).toggle();
  });
});

// //   form validation
//   $("button#button").click(function (event) {
//     let name = $("#inputname").val();
//     let email = $("#inputEmail").val();
//     let message = $("#mymessage").val();

//     if ($("#inputname").val() && $("#inputEmail").val()) {
//       alert(
//         "Hi " +
//           name +
//           ",Thank you for reaching out to us.One of us will contact you shortly."
//       );
//     } else {
//       alert("Please fill the form");
//     }
//   });
// });
