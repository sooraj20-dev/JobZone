document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    themeToggle.addEventListener('click', function() {
        body.setAttribute('data-theme', body.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });

    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    passwordToggle.addEventListener('click', function() {
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });
});