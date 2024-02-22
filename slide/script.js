$(document).ready(function() {
    let currentStep = 1;
    
    function showStep(step) {
        $('.step').not('.step-' + step).fadeOut('slow', function() {
          $('.step-' + step).fadeIn('slow').addClass('active');
        });
      }
       
    
    $('.next-btn').click(function() {
      if (currentStep < 3) {
        currentStep++;
        showStep(currentStep);
      }
    });
    
    $('.prev-btn').click(function() {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      }
    });
    
    $('.submit-btn').click(function() {
      alert('Form Submitted!');
      // Lakukan submit data atau navigasi selanjutnya
    });
  
    showStep(currentStep); // Tampilkan langkah awal
  });
  