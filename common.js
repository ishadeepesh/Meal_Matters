const myElement = document.getElementById("email1");
    function myEventHandler() {

      var userEmail = document.getElementById("email1").value;

      localStorage.setItem("userEmail", userEmail);

      console.log(userEmail);
    }
    myElement.addEventListener("input", myEventHandler);