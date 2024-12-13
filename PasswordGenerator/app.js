let passwordHistory = []; // Array to store password history

// Function to generate a random password
function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?/';

    let allChars = '';
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    if (allChars === '') {
        document.getElementById('output').textContent = 'Please select at least one character type.';
        return;
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('output').textContent = password;
    evaluateStrength(password);
    addToHistory(password);
}

// Function to evaluate password strength
function evaluateStrength(password) {
    const strengthEl = document.getElementById('strength');
    let score = 0;

    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length >= 12) score++;

    const strength = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
    strengthEl.textContent = `Strength: ${strength[score - 1] || 'Very Weak'}`;
}

// Function to copy the generated password to the clipboard
function copyToClipboard() {
    const output = document.getElementById('output').textContent;
    if (output === 'Your password will appear here.' || output === 'Please select at least one character type.') {
        alert('No valid password to copy!');
        return;
    }

    const tempInput = document.createElement('input');
    tempInput.value = output;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Password copied to clipboard!');
}

// Function to add password to history
function addToHistory(password) {
    passwordHistory.push(password);

    const historyEl = document.getElementById('history');
    const listItem = document.createElement('li');
    listItem.textContent = password;
    historyEl.appendChild(listItem);
}