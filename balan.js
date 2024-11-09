document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let isValid = true;
  
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.innerHTML = '');
  
    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
      document.getElementById('nameError').innerHTML = 'Magaca waa in la buuxiyaa.';
      isValid = false;
    }
  
    // Validate Aabaha (Father)
    const father = document.getElementById('father').value.trim();
    if (father === '') {
      document.getElementById('fatherError').innerHTML = 'Aabahaa waa in la buuxiyaa.';
      isValid = false;
    }
  
    // Validate Awoowe (Grandfather)
    const grandfather = document.getElementById('grandfather').value.trim();
    if (grandfather === '') {
      document.getElementById('grandfatherError').innerHTML = 'Awoowahaa waa in la buuxiyaa.';
      isValid = false;
    }
  
    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').innerHTML = 'Fadlan geli email sax ah.';
      isValid = false;
    }
  
    // Validate Neighborhood
    const neighborhood = document.getElementById('neighborhood').value.trim();
    if (neighborhood === '') {
      document.getElementById('neighborhoodError').innerHTML = 'Xaafada waa in la buuxiyaa.';
      isValid = false;
    }
  
    // Validate Country
    const country = document.getElementById('country').value.trim();
    if (country === '') {
      document.getElementById('countryError').innerHTML = 'Fadlan dooro wadanka.';
      isValid = false;
    }
  
    // Validate Date of Birth (Dhalashada)
    const dob = document.getElementById('dob').value.trim();
    if (dob === '') {
      document.getElementById('dobError').innerHTML = 'Taariikhda dhalashada waa in la buuxiyaa.';
      isValid = false;
    }
  
    // Validate Doctor
    const doctor = document.getElementById('doctor').value.trim();
    if (doctor === '') {
      document.getElementById('doctorError').innerHTML = 'Fadlan dooro dhactarka.';
      isValid = false;
    }
  
    // Validate Symptoms (Xanuunka)
    const symptoms = document.getElementById('symptoms').value.trim();
    if (symptoms === '') {
      document.getElementById('symptomsError').innerHTML = 'Fadlan qor xanuunka aad dareemeysid.';
      isValid = false;
    }
  
  
    if (isValid) {
      alert('Foomka waa la gudbiyay!');
    }
  });  
  