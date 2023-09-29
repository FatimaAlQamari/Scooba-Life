var calc = document.getElementById("calculate");
var hide = document.getElementById("hide");
var buy = document.getElementById("buy");
var msg = document.getElementById("msg-text");
hide.style.display = "none";

function sum() {
  var nod = document.getElementById("divers").value;
  if (nod === "") {
   alert("Please enter values");
  return;
  }
  else if (nod < 0) {
    alert("invalid values");
    return;
  }
  else {
  if (document.getElementById("agey").checked) {
    hide.style.display = "block";
    calc.style.display = "none";
    }
  else if (document.getElementById("agen").checked) {
       var text = ("below 18 divers are not allowed");
       msg.innerHTML = text;
       calc.style.display = "none";
    }
    else {
         var text = ("please confirm the age");
         msg.innerHTML = text;
         calc.style.display = "none";
      }
  }
};

function reciept() {
  var checkact = document.querySelectorAll('input[name="activity"]:checked');
  var checkactnames = Array.from(checkact).map(activity => activity.value);

  if (checkactnames.length > 0) {
    msg.innerHTML = "You have successfully purchased the following activities: " + checkactnames.join(', ');
  } else {
    msg.innerHTML = "Please select at least one activity.";
  }
  buy.style.display = "none";
};

calc.addEventListener("click", function() {
sum();
});

buy.addEventListener("click", function() {
reciept();
});
