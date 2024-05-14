document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const url = 'https://mail-sender-api1.p.rapidapi.com/';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '8fee5fc337msh0458f243df7da6ep133701jsn0389182ae289',
        'X-RapidAPI-Host': 'mail-sender-api1.p.rapidapi.com'
      },
      body: JSON.stringify({
        sendto: 'fas.azeez@gmail.com',
        name: document.getElementById("name").value,
        replyTo: document.getElementById("email").value,
        ishtml: 'false',
        title: 'Contact Form Submission',
        body: document.getElementById("msg").value
      })
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      // Optionally, display a success message to the user
      document.getElementById("status").innerHTML = "Message sent successfully!";
      // Clear form fields
      document.getElementById("contactForm").reset();
    } catch (error) {
      console.error(error);
      // Optionally, display an error message to the user
      alert("An error occurred. Please try again later.");
    }
  });
  