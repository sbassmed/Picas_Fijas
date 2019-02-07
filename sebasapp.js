var contp = 0;
var contf = 0;
var randoms = [];
var random_number = [];


// # Random
function Random_setnumber(){
    if (randoms == "") {
      for (var i = 0; i < 10; i++) {
        randoms.push(i);
      }
    }
    var index = Math.floor(Math.random() * randoms.length);
    var val = randoms[index];
    randoms.splice(index, 1);
    return val;
  }
  for (var i = 0; i < 4; i++) {
    random_number+= Random_setnumber();
  }
  console.log(random_number);


function checker(number,random_number){
  for (var i = 0; i < number.length; i++) {
    if (number.includes(random_number[i])) {
      contp ++ ;
    }
    if (number[i] === random_number[i]) {
      contf ++ ;
    }
  }
  if (contf >0) {
    contp = contp - contf;
  }
}

function duplicates(number) {
var  number = number.split("").sort(function(a, b){return a - b});
  for (var i = 1; i < number.length; i++) {
    if (number[i] === number[i-1]) {
      return true
    }
  }
}


$("#set-number").keyup(function(e) {
  var user_number = $(this).val();
  $(this).removeClass('error_background');
  $("span").removeClass('error_text');
  if(e.which == 13) {
    if (user_number.length < 4 || user_number.length > 4){
      $(this).addClass('error_background');
       $("span").addClass('error_text');
    }else if (duplicates(user_number)) {
      $(this).addClass('error_background');
      $("span").addClass('error_text');
    }else {
      checker(user_number,random_number)
      $('.adicion').append('<tr><td>'+ user_number +'</td> <td>'+ contp +'</td> <td>'+ contf +'</td></tr>');
      if (user_number === random_number) {
        $('#modal').css('display','inline');
        $('#button').on('click',function(){
          $('#modal').css('display','none');
          $("#numbers_table > tbody").html("");
            location.reload();
            Random_setnumber();
         });
      };
      $(this).val("");
      contf = 0;
      contp = 0;
    };
  };
});
