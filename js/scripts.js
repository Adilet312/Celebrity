$(document).ready(function(){
  $("form.formID").submit(function(event){
    event.preventDefault();
    var name = $("#fullnameID").val();
    var gender = $("#genderID option:selected").val();
    var radio = $("input:radio[name=actor]:checked").val();
    /*--check name varaiable for emptiness-->*/
    if(name)
    {


    }
    else
    {
      $(".nameWarning").show();
    }

    if(gender)
    {


    }
    else
    {
      $(".genderWarning").show();
    }
    if(radio)
    {


    }
    else
    {
      $(".radioWarning").show();
    }

  });
});











//
//
// $(document).ready(function() {
//   $("form#insurance").submit(function(event)
//   {
//     var age = parseInt($("input#age").val());
//     var gender = $("select#gender").val();
//
//     if (age)
//     {
//       var quote = (100 - age) * 3;
//       if (gender === 'male' && age < 26)
//       {
//         quote += 50;
//       }
//
//       $("#rate").empty().append(quote);
//       $("#quote").show();
//     }
//     else
//      {
//       alert('Please enter your age.');
//     }
//
//     event.preventDefault();
//   });
// });
