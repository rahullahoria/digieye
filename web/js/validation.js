function validatePhone(fld) {    
  var filter = /^([7-9][0-9]{9})+$/;
  if (fld.value == "") {
    return false;
  } 
  else if (!(filter.test(fld))) {
    return false ;
  } 
  else if (!(fld.length == 10)) {
    return false;
  }
  else {
    return true ;
  }
}
function validateEmail(fld) {
  var tfld = trim(fld);                        // value of field with whitespace trimmed off
  var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
  if (!emailFilter.test(tfld)) {              //test email for illegal characters
    return false;
  } 
  else {
    return true;
  }
}

function sendmesage() {
  $("#sendmesage").attr('disabled','disabled');
  var name = $("#name").val();
  var email = $("#email").val();
  var mobile = $("#contact").val();
  var massage = $("#Textarea1").val();
  if (!validateFirstname(name)){
    alert("Please enter valid name");
    $("#sendmesage").removeAttr('disabled');
  }
  else if (!validateEmail(email)){
    alert("Please enter valid email");
    $("#sendmesage").removeAttr('disabled');
  }
  else if (!validatePhone(mobile)){
    alert("Please enter valid mobile number");
    $("#sendmesage").removeAttr('disabled');
  }
  else if (!validateFirstname(massage)){
    alert("Please write something");
    $("#sendmesage").removeAttr('disabled');
  }
  else {
    var dataString = "name=" + name + "&email=" + email + "&mobile=" + mobile + "&massage=" + massage ;
    $.ajax({
      type: "POST",
      url: "ajax/sendmesage.php",
      data: dataString,
      cache: false,
      success: function(result){
        alert("Send Successfully");
        location.reload();
      },
      error: function(result){
        alert("result");
        return false;
      }
    });
    return false;
  }
  $("#sendmesage").removeAttr('disabled');
}
function nospaces(t){
  if(t.value.match(/\s/g)){
    alert('Sorry, you are not allowed to enter any spaces');
    t.value=t.value.replace(/\s/g,'');
  }
}
function trim(s){
  return s.replace(/^\s+|\s+$/, '');
}
function validateFirstname(fld) {
  var illegalChars = /\W/; // allow letters, numbers, and underscores
  if (fld.value == "") {
    return false ;
  }  
  else if (fld.length < 3) {
    return false ;
  }  
  else if (illegalChars.test(fld.value)) {
    return false ;
  } 
  else {
    return true ;
  }
}