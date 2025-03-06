document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reportForm');
    const submitBtn = form.querySelector('.submit-btn');
  
    // Add smooth scroll behavior for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form submission handler
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Disable submit button and show loading state
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span class="btn-text">Submitting...</span>
        <span class="btn-icon">↻</span>
      `;
  
      // Gather form data
      const formData = {
        incidentType: form.querySelector('#incidentType').value,
        description: form.querySelector('#description').value,
        location: form.querySelector('#location').value,
        datetime: form.querySelector('#datetime').value,
        contact: form.querySelector('#contact').value
      };
  
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        alert('Thank you for your report. We will review it shortly and take appropriate action.');
        
        // Reset form
        form.reset();
      } catch (error) {
        alert('There was an error submitting your report. Please try again.');
      } finally {
        // Re-enable submit button and restore original text
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  
    // File upload preview
    const evidenceInput = document.getElementById('evidence');
    evidenceInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      if (files.length > 0) {
        const fileNames = files.map(file => file.name).join(', ');
        const helpText = evidenceInput.parentElement.querySelector('.help-text');
        helpText.textContent = Selected files: ${fileNames};
      }
    });
  
    // Add animation to feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
  
    featureCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  });