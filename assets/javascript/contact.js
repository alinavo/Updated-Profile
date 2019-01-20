


function validateForm() {
    var x = document.forms["icon_email"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
