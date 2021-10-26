// Listen for submit 
document.getElementById('kelvin-form').addEventListener('submit', function(e) {
     
    // Show loader 
    document.getElementById('loader').style.display = 'block'; 

    // Hide results 
    document.getElementById('results').style.display = 'none'; 
    

    // Show loader 2 seconds before results display 
    setTimeout(calculateResults, 2000);  

    e.preventDefault(); 
}); 

// Calculate Results function 
function calculateResults() {   
    
    // Declare the UI variable 
    const kelvin  = document.getElementById('kelvin-value'); 
    const celcius = document.getElementById('celcius-value');   

    // Calculations 
    kelvinValue = parseFloat(kelvin.value); 
    celciusValue = kelvinValue - 273.15;  


    if (isFinite(celciusValue)) { 

       // Remove Loader 
       document.getElementById('loader').style.display = 'none';   

       // Show results 
       document.getElementById('results').style.display = 'block'; 

       // Show reset button
       document.getElementById('reset').style.display = 'block'; 

       celcius.value = celciusValue.toFixed(2);  

    } else {
        showError('Kindly check you numbers'); 
    }

} 

// Reset button
document.getElementById('reset-button').addEventListener('click', function(e) { 
    // Clear the kelvin value input 
    document.getElementById('kelvin-value').value = ''; 
    document.getElementById('celcius-value').value = ''; 
    
    // Hide the resuslts div and the reset button
    document.getElementById('results').style.display = 'none'; 

    e.preventDefault(); 
})

// ShowError function 
function showError(error) {
    // Hide loader 
    document.getElementById('loader').style.display = 'none'; 

    // Hide Results 
    document.getElementById('results').style.display = 'none';  

    // Create a div 
    const errorDiv = document.createElement('div'); 

    // Add a class 
    errorDiv.className = 'alert alert-danger';  

    // Append textNode 
    errorDiv.appendChild(document.createTextNode(error)); 

    // Get elements
    const heading = document.querySelector('.heading');   
    const card = document.querySelector('.card');

    // Insert error above heading
    card.insertBefore(errorDiv, heading);  

    // Make the error dissapear after 2 secs 
    setTimeout(clearError, 2000); 
    

}  

// Function clear error 
function clearError() {
    document.querySelector('.alert').remove(); 
}
