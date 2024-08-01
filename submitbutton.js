 // Get the form element
 const form = document.getElementById('signup-form');

 // Add an event listener for the form submission
 form.addEventListener('submit', async (event) => {
     event.preventDefault(); // Prevent the default form submission

     // Create a FormData object from the form
     const formData = new FormData(form);

     try {
         // Send a POST request to the server
         const response = await fetch('http://localhost:3000/createacct', { // Updated endpoint
             method: 'POST',
             body: formData
         });

         // Handle the response
         if (response.ok) {
             const message = await response.text();
             alert(message); // Show success message
         } else {
             const errorMessage = await response.text();
             alert('Error: ' + errorMessage); // Show error message
         }
     } catch (error) {
         console.error('Error:', error);
         alert('An error occurred while signing up. Please try again.');
     }
 });