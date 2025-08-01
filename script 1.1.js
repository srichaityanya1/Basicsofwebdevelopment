function showMessage() {
    alert("Hello chandu! You clicked the button!");
  }
  
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return false;
    }
  
    alert("Thank you for contacting me, " + name + "!");
    return true;
  }
  