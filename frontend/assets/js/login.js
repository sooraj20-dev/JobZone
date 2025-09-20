document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'light') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            `;
        } else {
            body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
            `;
        }
    });

    // Password Toggle Functionality
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    
    passwordToggle.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
            `;
        } else {
            passwordInput.type = 'password';
            passwordToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
            `;
        }
    });

    // Form Validation
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginAlert = document.getElementById('loginAlert');
    const alertMessage = document.getElementById('alertMessage');
    
    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Allow both email and username (at least 3 characters)
        return regex.test(email) || email.length >= 3;
    }
    
    // Password validation (at least 6 characters)
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    // Real-time validation for email
    emailInput.addEventListener('input', function() {
        if (!validateEmail(this.value) && this.value.length > 0) {
            this.classList.add('input-error');
            emailError.style.display = 'block';
        } else {
            this.classList.remove('input-error');
            emailError.style.display = 'none';
        }
    });
    
    // Real-time validation for password
    passwordInput.addEventListener('input', function() {
        if (!validatePassword(this.value) && this.value.length > 0) {
            this.classList.add('input-error');
            passwordError.style.display = 'block';
        } else {
            this.classList.remove('input-error');
            passwordError.style.display = 'none';
        }
    });
    
    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate email
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add('input-error');
            emailError.style.display = 'block';
            isValid = false;
        }
        
        // Validate password
        if (!validatePassword(passwordInput.value)) {
            passwordInput.classList.add('input-error');
            passwordError.style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            // Simulate login API call
            setTimeout(function() {
                // For demo: simulate login failure with specific credentials
                if (emailInput.value === 'test@example.com' && passwordInput.value === 'wrong123') {
                    // Show error alert
                    loginAlert.style.display = 'flex';
                    loginAlert.classList.add('fade-in');
                    alertMessage.textContent = 'Invalid email or password. Please try again.';
                } else {
                    // Redirect on success (in a real app)
                    loginAlert.style.display = 'flex';
                    loginAlert.classList.add('fade-in');
                    loginAlert.classList.add('alert-success');
                    alertMessage.textContent = 'Login successful! Redirecting...';
                    
                    // Simulate redirect
                    setTimeout(function() {
                        // In a real app: window.location.href = 'dashboard.html';
                        console.log('Login successful, redirecting...');
                    }, 1500);
                }
            }, 800);
        }
    });
});