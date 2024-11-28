const form = document.getElementById("contactForm");
      const statusMessage = document.getElementById("statusMessage");

      form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        statusMessage.style.display = "block";
        setTimeout(() => {
          statusMessage.style.display = "none";
          form.reset(); 
        }, 3000);
      });